import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

function App() {

  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <>
      <h2>Cart: {cartCount}</h2>

      <Navbar />

      <ProductList addToCart={addToCart} />
    </>
  );
}

export default App;