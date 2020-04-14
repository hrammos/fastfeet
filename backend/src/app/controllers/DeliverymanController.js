import * as Yup from 'yup';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

class DeliverymanController {
  async index(request, response) {
    const deliverymans = await Deliveryman.findAll({
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return response.json(deliverymans);
  }

  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      avatar_id: Yup.number(),
      email: Yup.string()
        .email()
        .required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails.' });
    }

    const deliverymanExists = await Deliveryman.findOne({
      where: { email: request.body.email },
    });

    if (deliverymanExists) {
      return response
        .status(400)
        .json({ error: 'Deliveryman already exists.' });
    }

    const { id, name, avatar_id, email } = await Deliveryman.create(
      request.body
    );

    return response.json({
      id,
      name,
      avatar_id,
      email,
    });
  }

  async show(request, response) {
    const { id } = request.params;
    const deliveryman = await Deliveryman.findOne({
      where: { id },
      attributes: ['id', 'name', 'avatar_id', 'email'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return response.json(deliveryman);
  }

  async update(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails.' });
    }

    const { id } = request.params;
    const { email } = request.body;

    const deliveryman = await Deliveryman.findByPk(id);

    if (email && email !== deliveryman.email) {
      const deliverymanExists = await Deliveryman.findOne({ where: { email } });

      if (deliverymanExists) {
        return response
          .status(400)
          .json({ error: 'Deliveryman already exists.' });
      }
    }

    deliveryman.update(request.body);

    return response.json(deliveryman);
  }

  async destroy(request, response) {
    const { id } = request.params;
    const deliveryman = await Deliveryman.findByPk(id);

    deliveryman.destroy();

    return response.send();
  }
}

export default new DeliverymanController();
