import React from "react";
import "./CategoryTab.css";

function CategoryTab({ data, setActiveCat }) {
  return (
    <div className="category-tab-container">
      <h3 className="heading">Categories</h3>
      <div className="category-tab">
        {data.map((item) => (
          <button
            onClick={() => setActiveCat(item)}
            className="category-item"
            key={item.name}
          >
            <img
              className="category-image"
              src={item.imageUrl}
              alt={item.name}
            />
            <div className="category-name">{item.name}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryTab;
