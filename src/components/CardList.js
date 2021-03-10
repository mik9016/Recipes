import React from "react";
import CardRecipe from "./CardRecipe";
import Img from "../assets/Cheescake.jpg";


export default function CardList(props) {
  const img = Img;

  const hardcodedArr = [
    {
      id: 1,
      image: img,
      title: "Cheescake",
      description: "Extraordinary Cheescake to Lorem Impus Dolores 1",
    },
    {
      id: 2,
      image: img,
      title: "Cheescake",
      description: "Extraordinary Cheescake to Lorem Impus Dolores2 ",
    },
    {
      id: 3,
      image: img,
      title: "Cheescake",
      description: "Extraordinary Cheescake to Lorem Impus Dolores3 ",
    },
  ];

  return (
    <div>
      <h1>Card List</h1>
      {hardcodedArr.map((card) => {
        console.log();
        return (
          
            <CardRecipe 
              key={card.id}
              image={card.image}
              title={card.title}
              description={card.description}
            />
     
        );
      })}
    </div>
  );
}
