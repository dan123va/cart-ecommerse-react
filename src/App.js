import React, { useState, useEffect } from "react";
import useFetch from "./hooks/useFetch";
import TopMenu from "./components/TopMenu";
import Products from "./components/Products";
import { urlApiProducts } from "./utils/constants";
import { ToastContainer, toast } from "react-toastify";
import { STORAGE_PRODUCTS_CART } from "./utils/constants";

function App() {
  const products = useFetch(urlApiProducts);
  const [productsCart, setProductsCart] = useState([]);

  useEffect(() => {
    getProductsCart();
  }, []);

  const getProductsCart = () => {
    const idsProducts = localStorage.getItem(STORAGE_PRODUCTS_CART);

    if (idsProducts) {
      const idsProductsSplit = idsProducts.split(",");
      setProductsCart(idsProductsSplit);
    } else {
      setProductsCart([]);
    }
  };

  const addProductCart = (id, name) => {
    const idsProducts = productsCart;
    idsProducts.push(id);
    setProductsCart(idsProducts);
    localStorage.setItem(STORAGE_PRODUCTS_CART, productsCart);
    getProductsCart();
    toast.success(`${name} añadido al carrito correctamente.`);
  };

  return (
    <div className="App">
      <TopMenu
        productsCart={productsCart}
        getProductsCart={getProductsCart}
        products={products}
      />
      <Products products={products} addProductCart={addProductCart} />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange={true}
        draggable
        pauseOnHover={false}
      />
    </div>
  );
}

export default App;
