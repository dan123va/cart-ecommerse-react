import React, { useState } from "react";
import useFetch from "./hooks/useFetch";
import TopMenu from "./components/TopMenu";
import Products from "./components/Products";
import { urlApiProducts } from "./utils/constants";
import { ToastContainer, toast } from "react-toastify";
import { STORAGE_PRODUCTS_CART } from "./utils/constants";

function App() {
  const products = useFetch(urlApiProducts);
  const [productsCart, setProductsCart] = useState([]);

  const addProductCart = (id, name) => {
    const idsProducts = productsCart;
    idsProducts.push(id);
    setProductsCart(idsProducts);
    localStorage.setItem(STORAGE_PRODUCTS_CART, productsCart);
    toast.success(`${name} añadido al carrito correctamente.`)
  };

  return (
    <div className="App">
      <TopMenu />
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
