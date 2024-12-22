import React from "react";
import "../styles.css";

const Menu = ({ categories, menuItems }) => {
  return (
    <main className="menu-container">
      {categories.map((category) => (
        <section key={category} id={category} className="menu-category">
          <h2>{category}</h2>

          <div className="menu-items">
            {menuItems[category].map((item, index) => (
              <div className="menu-item" key={index}>
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="menu-item-image"
                />
                <div className="menu-item-details">
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <h4>
                    <strong>{category}</strong>{" "}
                  </h4>

                  <p className="stars">
                    ★★★★<span className="half-star">☆</span>
                  </p>
                </div>

                <div>
                  <button className="order-now-btn">Order Now</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default Menu;
