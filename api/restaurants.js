export default async function handler(req, res) {
  const SWIGGY_RESTAURANTS_URL =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.3066525&lng=80.4365402&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  try {
    const response = await fetch(SWIGGY_RESTAURANTS_URL);
    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch restaurants" });
  }
}
