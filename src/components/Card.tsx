import React from "react";
import "./card.css";
import Button from "./Button";

type CardProps = {
  image: string;
  title: string;
  text: string;
  className: string;
};

export const Card = ({ image, title, text, className }: CardProps) => {
  return (
    <div className="card-container">
      <img src={image} alt="car" />
      <h1>{title}</h1>
      <p>{text}</p>
      <Button title="Learn More" />
    </div>
  );
};
