import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {fetchDetailsApi} from '../api'; 

export default function ProductDetails({ onCartUpdate }) {
  const { id } = useParams();

  // You'd usually fetch from API using the ID, but for now, just hardcode or simulate
 

  const [detail, setDetail] = useState({});
  
    async function fetchDetails() {
      let data = await fetchDetailsApi(id);
      setDetail(data);
    }

    function handleClick(){
        onCartUpdate(detail);
    }

  
    useEffect(() => {
      fetchDetails();
    }, []);

  return (
    <div className="p-8 mt-16">
      <h1 className="text-2xl font-bold">{detail.title}</h1>
      <img src={detail.image} alt={detail.imageAlt} />
      <p>{detail.price}</p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded" onClick={handleClick}>Add to Cart</button>
    </div>
  );
}
