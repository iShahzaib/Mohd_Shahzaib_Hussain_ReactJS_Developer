import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function Contact() {
  const { theme } = useTheme();

  return (
    <div
      className="theme-transition"
      style={{
        background: theme.background,
        color: theme.color,
        fontFamily: theme.fontFamily,
      }}
    >
      <div className="about-content">
        <h2>Contact Page</h2>
        <p>
          You can reach us at{" "}
          <a href="mailto:info@example.com" style={{ color: theme.buttonBg }}>
            info@example.com
          </a>
        </p>
        <form style={{ marginTop: theme.spacing }}>
          <div style={{ marginBottom: theme.spacing }}>
            <label>Name:</label>
            <input
              type="text"
              style={{
                marginLeft: 8,
                padding: "8px",
                borderRadius: theme.borderRadius,
                border: "1px solid #ccc",
                fontFamily: theme.fontFamily,
              }}
            />
          </div>
          <div style={{ marginBottom: theme.spacing }}>
            <label>Message:</label>
            <div style={{ display: "flex" }}>
              <textarea
                style={{
                  margin: "8px 0 0 8px",
                  padding: "8px",
                  borderRadius: theme.borderRadius,
                  border: "1px solid #ccc",
                  fontFamily: theme.fontFamily,
                  width: "100%",
                  minHeight: 80,
                }}
              />
            </div>
          </div>
          <button
            type="submit"
            style={{
              background: theme.buttonBg,
              color: theme.buttonColor,
              border: "none",
              borderRadius: theme.borderRadius,
              padding: "10px 24px",
              fontFamily: theme.fontFamily,
              cursor: "pointer",
              transition: "background 0.3s",
            }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}