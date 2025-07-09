import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(localStorage.getItem("count") ? JSON.parse(localStorage.getItem("count")) : 0);
  //const [count, setCount] = useState(0);

  const [products, setProducts] = useState([]);

  useEffect(() => {
  localStorage.setItem("count", JSON.stringify(count));
}, [count]);

//simulate fetching products from api

async function fetchProducts() {
  fetch('https://fakestoreapi.com/products')
  .then(response => response.text())
  .then(data => setProducts(data));
        // const response = await fetch(`http://localhost:3000/dept/all`);
        // const text = await response.text();
        // const json = JSON.parse(text);
        // setDepts(json);
    }

    useEffect(() => {
      fetchProducts();
    }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className= "text-3xl font-bold underline">{products}</p>
    </>
  )
}

export default App
