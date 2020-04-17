import { Op } from 'sequelize';
import { isBefore, isAfter, set } from 'date-fns';
import Order from '../models/Order';

class DeliveryController {
  async show(request, response) {
    const { id: deliveryman_id } = request.params;
    const { page = 1 } = request.query;

    const count = await Order.count();

    const orders = await Order.findAll({
      where: {
        deliveryman_id,
        canceled_at: null,
        end_date: null,
      },
      order: [['created_at', 'ASC']],
      limit: 5,
      offset: (page - 1) * 5,
    });

    response.header('X-Total-Count', count);

    return response.json(orders);
  }

  async update(request, response) {
    const { id } = request.params;

    const delivery = await Order.findByPk(id);

    if (!delivery) {
      return response.status(400).json({ error: 'Order not exists.' });
    }

    const startTime = set(new Date(), { hours: 8, minutes: 0, seconds: 0 });
    const finalHour = set(new Date(), { hours: 18, minutes: 0, seconds: 0 });

    const startDate = new Date();

    if (isBefore(startDate, startTime)) {
      return response
        .status(400)
        .json({ error: 'Withdrawals before 08:00 are not allowed.' });
    }

    if (isAfter(startDate, finalHour)) {
      return response
        .status(400)
        .json({ error: 'Withdrawals after 18:00 are not allowed.' });
    }

    const deliveries = await Order.findAndCountAll({
      where: {
        // deliveryman_id: delivery.deliveryman_id,
        start_date: { [Op.between]: [startTime, finalHour] },
      },
    });

    // console.log(deliveries); // testar isso ainda

    if (deliveries.count >= 5) {
      return response
        .status(400)
        .json({ error: 'No more than 5 withdrawals per day are allowed.' });
    }

    delivery.start_date = startDate;

    await delivery.save();

    return response.json(delivery);
  }
}

export default new DeliveryController();
