import Order from '../models/Order';

class FinishDeliveryController {
  async update(request, response) {
    const { id } = request.params;

    const delivery = await Order.findByPk(id);

    if (!delivery) {
      return response.status(400).json({ error: 'Order not exists' });
    }

    if (!delivery.start_date) {
      return response
        .status(400)
        .json({ error: 'Order has not yet been withdrawn.' });
    }

    if (delivery.canceled_at) {
      return response.status(400).json({ error: 'Order canceled.' });
    }

    if (delivery.end_date) {
      return response
        .status(400)
        .json({ error: 'Order has already been finalized.' });
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
