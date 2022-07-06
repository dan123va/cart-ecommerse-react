import React from "react";
import useFetch from "./hooks/useFetch";
import TopMenu from "./components/TopMenu";
import Products from "./components/Products";
import { urlApiProducts } from "./utils/constants";

function App() {
  const products = useFetch(urlApiProducts);

  return (
    <div className="App">
      <TopMenu />
      <Products products={products} />
    </div>
  );
}

export default App;
