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
import Signup from "./Pages/Signup.jsx";
import Otpverify from "./Pages/Otpverify.jsx";
// import store from '../store.js'
// import { Provider } from 'react-redux'



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
    <Route path="/singup" element={<Signup/>} />
    <Route path="/otp" element={<Otpverify/>} />
    </Route>
    
  )
);

createRoot(document.getElementById("root")).render(
//  <Provider store={store}>
  
//  </Provider>
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router} />
  </ThemeProvider>
);
