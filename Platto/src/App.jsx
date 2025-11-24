import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LogingPopup from "./components/LogingPopup/LogingPopup";
import { useState } from "react";

const App = () => {
  const [showLoging, setShowLoging] = useState(false);

  return (
    <>
    {showLoging? <LogingPopup setShowLogin={setShowLoging}/>: <></>}
      <div className="app">
        <NavBar  setShowLoging={setShowLoging} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
