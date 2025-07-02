export default async function handler(req, res) {
  const {
    query: { symbol },
  } = req;

  try {
    const response = await fetch(`https://api.binance.com/api/v3/ticker/bookTicker?symbol=${symbol.toUpperCase()}`);
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
