import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Product from "./Product"; 
import {fetchProductsApi} from '../api';

//remember to change href
export default function ProductsPage() {

  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    let data = await fetchProductsApi();
    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-full px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
