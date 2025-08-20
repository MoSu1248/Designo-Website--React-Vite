import React from "react";
import Card from "../../components/Card/DesignCard";
import { designCategories } from "../../data/DesignCatagories";
import CategoryButtons from "../../components/CatagoryBtns/CatagoryBtns";
import Banner from "../../components/DesignsBanner/DesignBanner"

import './design.scss'

export default function AppDesign() {
  const appCategory = designCategories.find(
    (cat) => cat.name === "App Designs"
  );
  return (
    <div className="designs__container">
      <Banner title={appCategory.name} />
      <div className="cards-container">
        {appCategory.items.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </div>
        <CategoryButtons currentCategory={appCategory.name} />
    </div>
  );
}
