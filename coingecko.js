export default async function handler(req, res) {
  const { ids, vs_currency, price_change_percentage } = req.query;

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vs_currency}&ids=${ids}&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=${price_change_percentage}&x_cg_demo_api_key=${process.env.COINGECKO_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
