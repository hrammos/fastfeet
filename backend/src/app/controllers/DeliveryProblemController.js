import * as Yup from 'yup';

import Problem from '../models/Problem';
import Order from '../models/Order';
import Deliveryman from '../models/Deliveryman';
import Recipient from '../models/Recipient';
import File from '../models/File';

import Queue from '../../lib/Queue';
import CancellationMail from '../jobs/CancellationMail';

class DeliveryProblemController {
  async index(request, response) {
    const { page = 1 } = request.query;
    const deliveries = await Problem.findAll({
      attributes: ['id', 'description'],
      include: [
        {
          model: Order,
          as: 'delivery',
          where: { canceled_at: null },
          attributes: [
            'id',
            'product',
            'canceled_at',
            'start_date',
            'end_date',
          ],
          include: [
            {
              model: Deliveryman,
              as: 'deliveryman',
              attributes: ['id', 'name', 'email', 'avatar_id'],
              include: [
                {
                  model: File,
                  as: 'avatar',
                  attributes: ['name', 'path', 'url'],
                },
              ],
            },
            {
              model: Recipient,
              as: 'recipient',
              attributes: ['name', 'street', 'number', 'state', 'city', 'cep'],
            },
          ],
        },
      ],
      order: [['created_at', 'ASC']],
      limit: 5,
      offset: (page - 1) * 5,
    });

    return response.json(deliveries);
  }

  async store(request, response) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails.' });
    }

    const { id: delivery_id } = request.params;
    request.body.delivery_id = delivery_id;

    const order = await Order.findByPk(delivery_id);

    if (!order) {
      return response.status(400).json({ error: 'Order not exists.' });
    }

    const { id, description } = await Problem.create(request.body);
    return response.json({
      id,
      description,
      delivery_id,
    });
  }

  async show(request, response) {
    const { id: delivery_id } = request.params;
    const orderExist = Order.findByPk(delivery_id);

    if (!orderExist) {
      return response.status(400).json({ error: 'Order not exists.' });
    }

    const problems = await Problem.findAll({
      where: { delivery_id },
      attributes: ['id', 'description', 'delivery_id'],
      include: [
        {
          model: Order,
          as: 'delivery',
          attributes: [
            'id',
            'product',
            'canceled_at',
            'start_date',
            'end_date',
          ],
        },
      ],
    });

    return response.json(problems);
  }

  async destroy(request, response) {
    const problemId = request.params.id;
    const problem = await Problem.findByPk(problemId);

    if (!problem) {
      return response.status(400).json({ error: 'Problem not exists.' });
    }

    const order = await Order.findOne({
      where: { id: problem.delivery_id },
      attributes: [
        'id',
        'product',
        'start_date',
        'end_date',
        'canceled_at',
        'deliveryman_id',
      ],
      include: [
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['name', 'email'],
        },
      ],
    });

    if (order.start_date !== null) {
      return response
        .status(400)
        .json({ error: 'Order has not yet been withdrawn.' });
    }

    if (order.end_date !== null) {
      return response
        .status(400)
        .json({ error: 'Order has already been canceled.' });
    }

    if (order.canceled_at !== null) {
      return response
        .status(400)
        .json({ error: 'Order has already been canceled.' });
    }

    order.canceled_at = new Date();

    await order.save();

    Queue.add(CancellationMail.key, {
      order,
      problem,
    });

    return response.json(order);
  }
}

export default new DeliveryProblemController();
