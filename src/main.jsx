// src/main.jsx
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import ResMenu from "./components/ResMenu";
import GrosoryWrapper from "./components/GrosoryWrap";
import Cart from "./components/Cart";


const appRouter = createBrowserRouter([
  { 
    path: "/", 
    element: <App />,
    children:[
      {
        path: "/",
        element:<Body/>
      },
      { 
        path: "/about", 
        element: <About /> 
      },
      {
        path:"/cart",
        element: <Cart/>
      },
      { 
        path: "/contact", 
        element: <Contact /> 
      },
      {
        path:"/grosory",
        element:<GrosoryWrapper/>
      },
      {
        path:"/restaurants/:resId",
        element:<ResMenu/>
      }
    ],
    errorElement: <Error/>, 
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
