import React from "react";
import "./App.css";
import { Card } from "./components/Card";
import Sedan from "./images/icon-sedans.svg";
import Luxury from "./images/icon-luxury.svg";
import Suvs from "./images/icon-suvs.svg";

function App(): JSX.Element {
  return (
    <div className="app-container">
      <div className="app">
        <Card
          className="first"
          image={Sedan}
          title="Sedans"
          text="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
        />

        <Card
          className="second"
          image={Suvs}
          title="SUVs"
          text="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
        />
        <Card
          className="third"
          image={Luxury}
          title="Luxury"
          text="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
        />
      </div>
    </div>
  );
}

export default App;
