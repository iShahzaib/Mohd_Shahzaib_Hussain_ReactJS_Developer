import React from "react";
import { useTheme } from "../context/ThemeContext";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image, description }) => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        background: theme.cardBg,
        color: theme.cardColor,
        borderRadius: theme.borderRadius,
        boxShadow: theme.boxShadow || "0 2px 8px rgba(0,0,0,0.05)",
        padding: theme.spacing,
        margin: theme.spacing,
        maxWidth: 300,
        fontFamily: theme.fontFamily,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: 180,
          objectFit: "contain",
          borderRadius: theme.borderRadius,
          marginBottom: theme.spacing,
          background: "#fff",
        }}
      />
      <h3 style={{ margin: "8px 0" }}>{title}</h3>
      <p style={{ fontWeight: "bold", margin: "4px 0" }}>${price}</p>
      <p style={{ fontSize: 14, margin: "8px 0" }}>{description.slice(0, 60)}...</p>
      <button
        style={{
          background: theme.buttonBg,
          color: theme.buttonColor,
          border: "none",
          borderRadius: theme.borderRadius,
          padding: "8px 16px",
          fontFamily: theme.fontFamily,
          cursor: "pointer",
          marginTop: 8,
          transition: "background 0.3s",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
