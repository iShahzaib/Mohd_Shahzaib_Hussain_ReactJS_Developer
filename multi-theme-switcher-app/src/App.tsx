import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Main application component
function App() {
  return (
      // Router handles client-side routing across pages
      <Router>
        {/* Persistent header with theme switcher */}
        <Header />

        {/* Main content area with padding to offset fixed header height */}
        <div style={{ paddingTop: "4rem" }}>
          <Routes>
            {/* Home page (root route) */}
            <Route path="/" element={<Home />} />

            {/* About page */}
            <Route path="/about" element={<About />} />

            {/* Contact page */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
