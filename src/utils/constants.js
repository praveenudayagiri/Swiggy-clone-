const isProd = import.meta.env.PROD; // true when deployed on Vercel

export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const LOGO_URL =
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-delivery-logo-by-abhishek-choudhary-dribbble.jpg";

export const MENU_API_URL = isProd
  ? "/api/menu?restaurantId="
  : "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.3066525&lng=80.4365402&restaurantId=";

export const HOME_RESTAURANTS_API_URL = isProd
  ? "/api/restaurants"
  : "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.3066525&lng=80.4365402&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
