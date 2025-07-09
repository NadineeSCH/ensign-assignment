import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsPage from "./ProductsPage";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";

function App() {

 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;

