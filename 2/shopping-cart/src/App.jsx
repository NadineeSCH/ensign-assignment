import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsPage from "./ProductsPage";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";

function App() {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  const [cartOpen, setCartOpen] = useState(false);

  function handleAddToCart(product) {
    console.log("Product added to cart:", product); //debug
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product.id === product.id
      );
      if (existingItem) {
        // if the item already exists, increase its quantity
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // if it's a new item, add it with quantity 1
        return [...prevItems, { product: product, quantity: 1 }];
      }
    });
  }

  function handleRemoveFromCart(productId) {
    console.log("Product removed from cart:", productId); //debug
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product.id !== productId)
    );
  }

  function handleUpdateQuantity(productId, quantity) {
    console.log("Quantity updated for product:", productId, "to", quantity); //debug
    if (quantity == 0) {
      handleRemoveFromCart(productId); // if quantity is 0, remove the item from cart
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.product.id === productId
            ? { ...item, quantity: quantity} // ensure quantity is at least 1
            : item
        )
      );
    }
  }

  //update localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    console.log("Cart items updated:", cartItems); //debug
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
          element={<ProductDetails onCartUpdate={handleAddToCart} />}
        />
      </Routes>
      <Cart
        cartItems={cartItems}
        isOpen={cartOpen}
        onClose={() => {
          console.log("Cart closed"); //debug
          setCartOpen(false);
        }}
        onRemove={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </Router>
  );
}

export default App;
