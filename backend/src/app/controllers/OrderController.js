import * as Yup from 'yup';
import { Op } from 'sequelize';
import Order from '../models/Order';
import Recipient from '../models/Recipient';
import File from '../models/File';
import Deliveryman from '../models/Deliveryman';
import Queue from '../../lib/Queue';
import NewOrderMail from '../jobs/NewOrderMail';

class OrderController {
  async index(request, response) {
    const { product, page = 1 } = request.query;

    const count = await Order.count();

    const orders = await Order.findAll({
      where: {
        product: {
          [Op.iLike]: `%${product}%`,
        },
      },
      attributes: [
        'id',
        'recipient_id',
        'deliveryman_id',
        'product',
        'canceled_at',
        'start_date',
        'end_date',
      ],
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['name', 'street', 'number', 'state', 'city', 'cep'],
        },
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['name', 'email', 'avatar_id'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['name', 'path', 'url'],
            },
          ],
        },
      ],
      order: [['created_at', 'ASC']],
      limit: 5,
      offset: (page - 1) * 5,
    });

    response.header('X-Total-Count', count);

    return response.json(orders);
  }

  async store(request, response) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
      product: Yup.string().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails.' });
    }

    const { recipient_id, deliveryman_id } = request.body;
    const recipient = await Recipient.findByPk(recipient_id);
    const deliveryman = await Deliveryman.findByPk(deliveryman_id);

    if (!recipient) {
      return response.status(400).json({ error: 'Recipient not exists.' });
    }

    if (!deliveryman) {
      return response.status(400).json({ error: 'Deliveryman not exists.' });
    }

    const { id, product } = await Order.create(request.body);

    await Queue.add(NewOrderMail.key, {
      deliveryman,
      product,
      recipient,
    });

    return response.json({
      id,
      recipient_id,
      deliveryman_id,
      product,
    });
  }

  async show(request, response) {
    const { id } = request.params;
    const order = await Order.findOne({
      where: { id },
      attributes: ['recipient_id', 'deliveryman_id', 'product'],
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['name', 'street', 'number', 'state', 'city', 'cep'],
        },
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['name', 'email'],
        },
      ],
    });

    return response.json(order);
  }

  async update(request, response) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number(),
      deliveryman_id: Yup.number(),
      product: Yup.string(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails.' });
    }

    const { id } = request.params;
    const order = await Order.findByPk(id);

    order.update(request.body);

    return response.json(order);
  }

  async destroy(request, response) {
    const { id } = request.params;
    const order = await Order.findByPk(id);

    order.destroy();

    return response.status(204).send();
  }
}

export default new OrderController();
