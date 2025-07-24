export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Di sini kamu bisa proses callback, validasi signature, dll
    console.log('Callback Tripay diterima');
    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
