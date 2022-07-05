import React from "react";
import "./button.css";

type ButtonProops = {
  title: string;
};

const Button = ({ title }: ButtonProops) => {
  return <button className="button">{title}</button>;
};

export default Button;
