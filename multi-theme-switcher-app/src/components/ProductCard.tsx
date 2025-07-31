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
        className="product-image"
        src={image}
        alt={title}
        style={{
          borderRadius: theme.borderRadius,
          marginBottom: theme.spacing,
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

      <p className="product-price">${price}</p>

      <p title={description} className="product-description">
        {description.length > 60
          ? `${description.substring(0, 60)}...`
          : description}
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
