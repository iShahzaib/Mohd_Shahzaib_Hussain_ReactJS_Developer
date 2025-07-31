// src/pages/Home.tsx
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import ProductCard from "../components/ProductCard";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

export default function Home() {
  const { theme } = useTheme();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div
      style={{
        background: theme.background,
        color: theme.color,
        fontFamily: theme.fontFamily,
        minHeight: "80vh",
        padding: theme.spacing,
        borderRadius: theme.borderRadius,
        transition: "background 0.3s, color 0.3s",
      }}
    >
      <h2>Product List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: theme.spacing,
            justifyContent: "center",
          }}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              description={product.description}
            />
          ))}
        </div>
      )}
    </div>
  );
}
