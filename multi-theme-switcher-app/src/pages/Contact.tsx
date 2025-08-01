import { useTheme } from "../context/ThemeContext";

// Contact page component — shows contact info and a simple themed form
export default function Contact() {
  // Access the current theme from context
  const { theme } = useTheme();

  return (
    <div
      className="theme-transition"
      style={{
        background: theme.background, // Theme background
        color: theme.color, // Theme font color
        fontFamily: theme.fontFamily, // Apply theme font
      }}
    >
      <div
        className="contact-content"
        style={{ maxWidth: 600, margin: "0 auto" }}
      >
        {/* Contact heading */}
        <h2>Contact Page</h2>

        {/* Contact email */}
        <p>
          You can reach us at{" "}
          <a href="mailto:info@example.com" style={{ color: theme.buttonBg }}>
            info@example.com
          </a>
        </p>

        {/* Contact form */}
        <form style={{ marginTop: theme.spacing }}>
          {/* Name input field */}
          <div style={{ marginBottom: theme.spacing }}>
            <label htmlFor="name">Name:</label>
            <div style={{ display: "flex" }}>
              <input
                id="name"
                type="text"
                className="field-input"
                style={{
                  borderRadius: theme.borderRadius,
                  fontFamily: theme.fontFamily,
                }}
              />
            </div>
          </div>

          {/* Message text area */}
          <div style={{ marginBottom: theme.spacing }}>
            <label htmlFor="message">Message:</label>
            <div style={{ display: "flex" }}>
              <textarea
                id="message"
                className="field-input"
                style={{
                  borderRadius: theme.borderRadius,
                  fontFamily: theme.fontFamily,
                  minHeight: 80,
                }}
              />
            </div>
          </div>

          {/* Submit button */}
          <button
            className="form-submit-button"
            id="submit"
            type="submit"
            style={{
              background: theme.buttonBg,
              color: theme.buttonColor,
              borderRadius: theme.borderRadius,
              fontFamily: theme.fontFamily,
            }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
