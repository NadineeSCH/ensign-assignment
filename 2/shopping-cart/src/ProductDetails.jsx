import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

export default function ProductDetails() {
  const { id } = useParams();

  // You'd usually fetch from API using the ID, but for now, just hardcode or simulate
 

  const [detail, setDetail] = useState({});
  const navigate = useNavigate();
  
    async function fetchDetails() {
      fetch("https://fakestoreapi.com/products/"+id)
        .then((response) => response.json())
        .then((data) => setDetail(data));
    }

    function handleClick(){
        
    }

    
  
    useEffect(() => {
      fetchDetails();
    }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{detail.title}</h1>
      <img src={detail.image} alt={detail.imageAlt} />
      <p>{detail.price}</p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded" onClick={handleClick}>Add to Cart</button>
    </div>
  );
}
