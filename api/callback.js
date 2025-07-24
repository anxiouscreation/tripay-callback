export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log('Tripay Callback Received ✅');
    res.status(200).json({ success: true, message: "Callback received." });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
