// import * as Yup from 'yup';
import Order from '../models/Order';

class FinishDeliveryController {
  async update(request, response) {
    // const schema = Yup.object().shape({

    // });

    // if (!(await schema.isValid(request.body))) {
    //   return response.status(400).json({ error: 'Validation fails.' });
    // }

    const { id } = request.params;

    const delivery = await Order.findByPk(id);

    if (!delivery) {
      return response.status(400).json({ error: 'Order not exists' });
    }

    if (!delivery.start_date) {
      return response
        .status(400)
        .json({ error: 'Encomenda ainda não saiu para entrega' });
    }

    if (delivery.canceled_at) {
      return response.status(400).json({ error: 'Entrega canceladas' });
    }

    if (delivery.end_date) {
      return response
        .status(400)
        .json({ error: 'Encomenda já foi finalizada' });
    }

    await delivery.update({
      signature_id: request.body.signature_id,
      end_date: new Date(),
    });

    return response
      .status(200)
      .json({ success: 'Package delivered successfully' });
  }
}

export default new FinishDeliveryController();
