import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { symbol } = req.query;

  try {
    const response = await fetch(`https://api.binance.com/api/v3/ticker/bookTicker?symbol=${symbol.toUpperCase()}`);
    const data = await response.json();

    if (data.code) {
      // Binance devuelve error
      return res.status(500).json({ error: "Error en Binance", message: data.msg });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Error del servidor", message: error.message });
  }
}
