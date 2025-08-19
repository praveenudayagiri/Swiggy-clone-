export default async function handler(req, res) {
  const { restaurantId } = req.query;

  const SWIGGY_MENU_URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.3066525&lng=80.4365402&restaurantId=${restaurantId}`;

  try {
    const response = await fetch(SWIGGY_MENU_URL);
    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch menu" });
  }
}
