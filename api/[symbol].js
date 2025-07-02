export default async function handler(req, res) {
  const { symbol } = req.query;

  try {
    const response = await fetch(`https://api.binance.com/api/v3/ticker/bookTicker?symbol=${symbol.toUpperCase()}`);
    
    if (!response.ok) {
      return res.status(response.status).json({ error: "Error en Binance", status: response.status });
    }

    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: "Error interno", message: error.message });
  }
}
