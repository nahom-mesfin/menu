import React from "react";
import "../styles.css";

const Header = ({ categories }) => {
  return (
    <header className="sticky-header">
      <h1>
        Me<span>n</span>u
      </h1>
      <div className="header-links">
        {categories.map((category) => (
          <a key={category} href={`#${category}`} className="header-link">
            {category}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
