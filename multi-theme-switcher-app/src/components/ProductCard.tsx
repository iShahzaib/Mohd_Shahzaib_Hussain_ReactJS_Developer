import React from "react";
import { useTheme } from "../context/ThemeContext";

interface ProductCardProps {
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

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  image,
  description,
  // category,
  // rating,
}) => {
  const { theme } = useTheme();

  return (
    <div
      className="product-card"
      style={{
        background: theme.cardBg,
        color: theme.cardColor,
        borderRadius: theme.borderRadius,
        boxShadow: theme.cardShadow || "0 2px 8px rgba(0,0,0,0.05)",
        padding: theme.spacing,
        margin: theme.spacing,
        fontFamily: theme.fontFamily,
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
      <h3
        style={{
          margin: "8px 0",
          fontSize: theme.fontSize,
          textAlign: "center",
        }}
      >
        {title}
      </h3>
      {/* <p style={{ margin: "4px 0", fontSize: 14, color: "#888" }}>{category}</p> */}
      <p
        style={{
          fontWeight: "bold",
          margin: "4px 0",
          fontSize: 18,
        }}
      >
        ${price}
      </p>
      <p
        style={{
          fontSize: 14,
          margin: "8px 0",
          textAlign: "center",
        }}
      >
        {description.slice(0, 60)}...
      </p>
      {/* <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
        <span style={{ fontSize: 16, marginRight: 4 }}>⭐</span>
        <span style={{ fontSize: 15 }}>
          {rating.rate} ({rating.count})
        </span>
      </div> */}
      <button
        className="add-to-cart-button"
        type="button"
        style={{
          background: theme.buttonBg,
          color: theme.buttonColor,
          borderRadius: theme.borderRadius,
          fontFamily: theme.fontFamily,
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
