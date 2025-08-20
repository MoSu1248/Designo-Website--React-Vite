import React from "react";
import { designCategories } from "../../data/DesignCatagories";
import { Link, NavLink } from "react-router-dom";
import "./catagoryBtns.scss";
import RightArrow from "../../assets/shared/desktop/icon-right-arrow.svg";

function CategoryButtons({ currentCategory }) {
  // Get all categories except the current one
  const otherCategories = designCategories.filter(
    (cat) => cat.name !== currentCategory
  );

  return (
    <div className="category-buttons">
      {otherCategories.map((cat) => (
        <NavLink
          to={`/${cat.name.toLowerCase().replace(" ", "-")}`}
          className={`card card__${cat.name.toLowerCase().replace(" ", "-")}`}
          key={cat.name}
        >
          <h2>{cat.name}</h2>
          <p to={`/${cat.name.toLowerCase().replace(" ", "-")}`}>
            view projects
            <span>
              <img src={RightArrow} />
            </span>
          </p>
        </NavLink>
      ))}
    </div>
  );
}

export default CategoryButtons;
