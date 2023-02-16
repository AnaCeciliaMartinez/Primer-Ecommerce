import "./index.css";
import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HamMenu from "./components/HamMenu";
import Home from "./components/Home";
import ShoppingCart from "./components/ShoppingCart";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import { Provider } from "react-redux";
import { store } from "./store/store";

const catalogue = [];

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const [lista, setlista] = useState(catalogue);

  const getData = async () => {
    const ENDPOINT = " http://localhost:5000/products";

    const res = await axios.get(ENDPOINT),
      productsdb = await res.data;

    setlista(productsdb);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-[#141414] min-h-screen space-y-5">
      <Provider store={store}>
        <NavBar openClose={toggleOpen} />
        {isOpen && <HamMenu />}

        <Routes>
          <Route path="/" element={<Home lista={lista} />} />
          <Route path="/products" element={<Products lista={lista} />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
        </Routes>

        <Footer />
      </Provider>
    </div>
  );
}
export default App;
