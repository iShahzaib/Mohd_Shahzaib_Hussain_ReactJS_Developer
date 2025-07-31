// src/pages/Home.tsx
import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <div>
        {products.map((product: any) => (
          <div key={product.id}>{product.title}</div>
        ))}
      </div>
    </div>
  );
}
