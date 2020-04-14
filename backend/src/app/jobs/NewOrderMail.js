import Mail from '../../lib/Mail';

class NewOrderMail {
  get key() {
    return 'NewOrderMail';
  }

  async handle({ data }) {
    const { deliveryman, product, recipient } = data;

    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: 'Nova entrega!',
      template: 'newOrder',
      context: {
        deliveryman: deliveryman.name,
        product,
        street: recipient.street,
        number: recipient.number,
        city: recipient.city,
        state: recipient.state,
      },
    });
  }
}

export default new NewOrderMail();
