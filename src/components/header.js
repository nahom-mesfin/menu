import React from "react";
import "../styles.css";

const Header = ({ categories }) => {
  return (
    <header className="sticky-header">
      {categories.map((category) => (
        <a key={category} href={`#${category}`} className="header-link">
          {category}
        </a>
      ))}
    </header>
  );
};

export default Header;
