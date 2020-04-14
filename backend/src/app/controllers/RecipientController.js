import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
  async index(request, response) {
    const recipients = await Recipient.findAll();
    return response.json(recipients);
  }

  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.string().required(),
      complement: Yup.string().nullable(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      cep: Yup.string().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails.' });
    }

    const {
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      cep,
    } = await Recipient.create(request.body);

    return response.json({
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      cep,
    });
  }

  async show(request, response) {
    const { id } = request.params;
    const recipient = await Recipient.findByPk(id);

    return response.json(recipient);
  }

  async update(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      street: Yup.string(),
      number: Yup.string(),
      complement: Yup.string().nullable(),
      state: Yup.string(),
      city: Yup.string(),
      cep: Yup.string(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails.' });
    }

    const { id } = request.params;
    const recipient = await Recipient.findByPk(id);

    recipient.update(request.body);

    return response.json(recipient);
  }

  async destroy(request, response) {
    const { id } = request.params;
    const recipient = await Recipient.findByPk(id);

    recipient.destroy();

    return response.status(204).send();
  }
}

export default new RecipientController();
