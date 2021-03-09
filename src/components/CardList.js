import React from "react";
import CardRecipe from "./CardRecipe";
import Img from '../assets/Cheescake.jpg';

export default function CardList(props) {
  const img = Img;

  const hardcodedCard = {
    image: img,
    title: "Cheescake",
    description: "Extraordinary Cheescake to Lorem Impus Dolores ",
  };

  return (
    <div>
      <h1>Card List</h1>
      <CardRecipe
        image= {hardcodedCard.image}
        title={hardcodedCard.title}
        description={hardcodedCard.description}
      />
    </div>
  );
}
