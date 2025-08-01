import React from "react";
import { useTheme } from "../context/ThemeContext";

// Define the props expected by the ProductCard component
interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  description: string;

  // Additional fields (commented out for now, but useful for future enhancements)
  // category: string;
  // rating: {
  //   rate: number;
  //   count: number;
  // };
}

// ProductCard component displays a single product with theme-based styling
const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  image,
  description,
  // category,
  // rating,
}) => {
  // Access the current theme from ThemeContext
  const { theme } = useTheme();

  return (
    <div
      className="product-card"
      // Apply theme-specific styles dynamically to the card container
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
      {/* Product image */}
      <img
        className="product-image"
        src={image}
        alt={title}
        style={{
          borderRadius: theme.borderRadius,
          marginBottom: theme.spacing,
        }}
      />

      {/* Product title */}
      <h3
        style={{
          margin: "8px 0",
          fontSize: theme.fontSize,
          textAlign: "center",
        }}
      >
        {title}
      </h3>

      {/* Optional: Uncomment to show product category */}
      {/* <p style={{ margin: "4px 0", fontSize: 14, color: "#888" }}>{category}</p> */}

      {/* Product price */}
      <p className="product-price">${price}</p>

      {/* Product description (truncated if too long) */}
      <p
        title={description} // Tooltip for full description
        className="product-description"
      >
        {description.length > 60
          ? `${description.substring(0, 60)}...`
          : description}
      </p>

      {/* Optional: Uncomment to display rating */}
      {/* 
      <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
        <span style={{ fontSize: 16, marginRight: 4 }}>⭐</span>
        <span style={{ fontSize: 15 }}>
          {rating.rate} ({rating.count})
        </span>
      </div>
      */}

      {/* Action button with theme styling */}
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
