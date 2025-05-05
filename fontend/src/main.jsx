import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router";
import { Rootlayout } from "./components/Rootlayout.jsx";
import { ThemeProvider } from "@/components/theme-provider";
import Shop from "./Pages/Shop.jsx";
import SingleProduct from "./Pages/SingleProduct.jsx";
import Cart from "./Pages/Cart.jsx";
import Checkout from "./Pages/Checkout.jsx";
import Login from "./Pages/Login.jsx";
import Singup from "./Pages/Singup.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>

      <Route path="/" element={<Rootlayout />}>
      <Route index element={<App />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/singleproduct/:id" element={<SingleProduct />} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/checkout" element={<Checkout/>} />
      
    </Route>

    <Route path="/login" element={<Login/>} /> 
    <Route path="/singup" element={<Singup/>} />
    </Route>
    
  )
);

createRoot(document.getElementById("root")).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router} />
  </ThemeProvider>
);
