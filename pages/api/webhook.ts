export default function handler(req, res) {
  // TODO: Stripe webhook logic here
  res.status(200).json({ received: true });
}
