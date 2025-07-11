import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

//remember to change href
export default function ProductsPage() {

  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
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
            <Link key={product.id} to={`/product/${product.id}`} className="group">
            
              <img
                alt={product.imageAlt}
                src={product.image}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
