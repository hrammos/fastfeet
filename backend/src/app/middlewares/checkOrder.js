import Order from '../models/Order';

export default async (request, response, next) => {
  const { id } = request.params;
  const order = await Order.findByPk(id);

  if (!order) {
    return response.status(400).json({ error: 'Order not found.' });
  }

  return next();
};
