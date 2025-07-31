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
  // category: string;
  // rating: {
  //   rate: number;
  //   count: number;
  // };
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
      className="theme-transition"
      style={{
        background: theme.background,
        color: theme.color,
        fontFamily: theme.fontFamily,
      }}
    >
      <div className="home-content">
        <h2>Product List</h2>
        <p style={{ marginBottom: 16 }}>
          Browse our latest products and enjoy seamless theme switching!
        </p>
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
                // category={product.category}
                // rating={product.rating}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
