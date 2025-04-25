import './App.css'
import Header from './components/Header/Header.jsx'
import ProductCard from './components/ProductCard/ProductCard.jsx'
import React, { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then((data) => setData(data));
  }, [])

  return (
    <>
      <Header />
      <div className="products-container">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export default App
