import React from "react";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ShoppingCartPage from "./pages/ShoppingCartPage/ShoppingCartPage";
import ProductItem from "./pages/ProductItemPage/ProductItemPage";
import AllProductsPage from "./pages/AllProductsPage/AllProductsPage";
import Footer from "./components/Footer/Footer";
import ProductsFromCategoryPage from "./pages/ProductsFromCategoryPage/ProductsFromCategoryPage";
import "./App.css"
import ProductsWithSale from "./pages/ProductsWithSale/ProductsWithSale";
import Header from "./components/Header/Header";

// import ProductsWithSale from './pages/ProductsWithSale/ProductsWithSale'

function App() {
  return (
    <div className="app_container">
      <Header/>
      <Routes>
        {/* ДОМАШНЯЯ СТРАНИЦА */}
        <Route path="/" element={<HomePage />} />

        {/* ВСЕ КАТЕГОРИИ */}
        <Route path="/categories/all" element={<CategoriesPage />} />

        {/* ВСЕ ПРОДУКТЫ */}
        <Route path="/products/all" element={<AllProductsPage />} />

        {/* ПРОДУКТЫ ПО КАТЕГОРИИ */}
        <Route
          path="/categories/:category_id"
          element={<ProductsFromCategoryPage />}
        />

        {/* ОДИН ПРОДУКТ */}
        <Route
          path="/products/:product_id"
          element={<ProductItem />}
        />

        {/* КОРЗИНА    */}
        <Route path="/cartPage" element={<ShoppingCartPage />} />

        {/* НЕ НАЙДЕНО */}
        <Route path="*" element={<NotFoundPage />} />

        {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ТОВАРЫ СО СКИДКОЙ */}
        <Route path="/products/sales" element={<ProductsWithSale/>} /> 
      </Routes>

      <Footer />
    </div>
  );
}

export default App;










