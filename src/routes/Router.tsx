import React from "react";
import { Routes, Route } from "react-router-dom";

import Index from "../pages/Index";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import PageNotFound from "../pages/PageNotFound";

import Checkout from "../pages/Checkout";
import MyCart from "../pages/MyCart";
import SelectAddress from "../pages/SelectAddress";
import Orders from "../pages/Orders";
import OrderDetail from "../pages/OrderDetail";
import ManageProducts from "../pages/ManageProducts";
import ManageOrders from "../pages/ManageOrders";
import ManageOrderDetail from "../pages/ManageOrderDetail";
import ManageUsers from "../pages/ManageUsers";

interface Props {}

const Router: React.FC<Props> = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
      <Route path="/buy">
        <Route path="my-cart" element={<MyCart />} />
        <Route path="select-address" element={<SelectAddress />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
      <Route path="/orders/my-orders" element={<Orders />}>
        <Route path=":id" element={<OrderDetail />} />
      </Route>
      <Route path="/admin">
        <Route path="manage-products" element={<ManageProducts />} />
        <Route path="manage-orders" element={<ManageOrders />} />
        <Route path="manage-orders/:id" element={<ManageOrderDetail />} />
        <Route path="manage-users" element={<ManageUsers />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
