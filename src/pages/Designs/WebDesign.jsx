import React from "react";
import Card from "../../components/Card/DesignCard";
import { designCategories } from "../../data/DesignCatagories";
import CategoryButtons from "../../components/CatagoryBtns/CatBtns";
import Banner from "../../components/DesignsBanner/DesignBanner";

import "./design.scss";

function WebDesignsPage() {
  const webCategory = designCategories.find(
    (cat) => cat.name === "Web Designs"
  );
  return (
    <div className="designs__container">
      <Banner title={webCategory.name} />

      <div className="cards-container">
        {webCategory.items.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </div>
      <CategoryButtons currentCategory={webCategory.name} />
    </div>
  );
}

export default WebDesignsPage;
