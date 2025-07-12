import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsPage from "./components/ProductsPage";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import { addToCart, removeFromCart, updateQuantity } from "./utils/cartUtils";

function App() {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  const [cartOpen, setCartOpen] = useState(false);


  function handleAddToCart(product) {
    setCartItems((prevItems) => addToCart(prevItems, product));
  }

  function handleRemoveFromCart(productId) {
    setCartItems((prevItems) => removeFromCart(prevItems, productId));
  }

  function handleUpdateQuantity(productId, quantity) {
    setCartItems((prevItems) => updateQuantity(prevItems, productId, quantity));
  }

  //update localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Router>
      <Navbar
        openCart={() => {
          setCartOpen(true);
        }}
        numItems={cartItems.length}
      />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route
          path="/product/:id"
          element={<ProductDetails onCartUpdate={handleAddToCart}/>}
        />
      </Routes>
      <Cart
        cartItems={cartItems}
        isOpen={cartOpen}
        onClose={() => {
          setCartOpen(false);
        }}
        onRemove={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </Router>
  );
}

export default App;
