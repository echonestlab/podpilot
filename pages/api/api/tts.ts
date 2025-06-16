export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'Missing text' });

  // TODO: Integrate with ElevenLabs or return stub
  res.status(200).json({ audioUrl: 'https://example.com/fake.mp3' });
}
