import React from "react";
import Card from "../../components/Card/DesignCard";
import { designCategories } from "../../data/DesignCatagories";
import CategoryButtons from "../../components/CatagoryBtns/CatBtns";
import Banner from "../../components/DesignsBanner/DesignBanner";

import "./design.scss";

export default function GraphicDesign() {
  const graphicCatagory = designCategories.find(
    (cat) => cat.name === "Graphic Designs"
  );
  if (!graphicCatagory) {
    console.error("Graphic Designs category not found!");
    return null; // or a fallback UI
  }
  return (
    <div className="designs__container">
      <Banner title={graphicCatagory.name} />

      <div className="cards-container">
        {graphicCatagory.items.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </div>
      <CategoryButtons currentCategory={graphicCatagory.name} />
    </div>
  );
}
