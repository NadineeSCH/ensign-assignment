import { Link } from "react-router-dom";

export default function Product({ product }) {
  return (
    <div className="group">
      <Link to={`/product/${product.id}`} className="group">
        <img
          alt={product.imageAlt}
          src={product.image}
          className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
        />
        <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">
          {product.price.toFixed(2)}
        </p>
      </Link>
    </div>
  );
}
