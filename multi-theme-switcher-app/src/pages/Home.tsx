import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import ProductCard from "../components/ProductCard";

// Define the structure of a Product item
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;

  // Uncomment for future use if needed
  // category: string;
  // rating: {
  //   rate: number;
  //   count: number;
  // };
}

// Home page component — shows list of products and supports theme switching
export default function Home() {
  // Get current theme styles from context
  const { theme } = useTheme();

  // Local state to store products and loading indicator
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch product data from Fake Store API when component mounts
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data); // Store fetched products
        setLoading(false); // Hide loader
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div
      className="theme-transition"
      style={{
        background: theme.background, // Apply background from selected theme
        color: theme.color, // Apply text color from theme
        fontFamily: theme.fontFamily, // Apply font from theme
      }}
    >
      <div className="home-content">
        {/* Page Heading */}
        <h2 style={{ textAlign: "center" }}>Product List</h2>

        {/* Intro paragraph */}
        <p style={{ marginBottom: 16, textAlign: "center" }}>
          Browse our latest products and enjoy seamless theme switching!
        </p>

        {/* Show loading text until data is fetched */}
        {loading ? (
          <p style={{ textAlign: "center" }}>Loading...</p>
        ) : (
          <div className="product-grid" style={{ gap: theme.spacing }}>
            {/* Render product cards */}
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
