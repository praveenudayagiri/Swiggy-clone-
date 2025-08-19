export default async function handler(req, res) {
  const { restaurantId } = req.query;

  if (!restaurantId) {
    return res.status(400).json({ error: "restaurantId is required" });
  }

  const SWIGGY_MENU_URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.3066525&lng=80.4365402&restaurantId=${restaurantId}`;

  try {
    const response = await fetch(SWIGGY_MENU_URL, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115 Safari/537.36",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Swiggy API error: ${response.status}`);
    }

    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (error) {
    console.error("Menu API error:", error);
    res.status(500).json({ error: error.message });
  }
}
