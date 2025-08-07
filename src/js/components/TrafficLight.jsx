import React, { useEffect, useState } from "react";
import "../../styles/index.css"; // O ajusta la ruta si usas otro archivo de estilos

const TrafficLight = () => {
  const [color, setColor] = useState("red");

  useEffect(() => {
    const colors = ["red", "yellow", "green"];
    let index = colors.indexOf(color);

    const interval = setInterval(() => {
      index = (index + 1) % colors.length;
      setColor(colors[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, [color]);

  return (
    <div className="traffic-light">
      <div
        className={`light red ${color === "red" ? "on" : ""}`}
        onClick={() => setColor("red")}
      ></div>
      <div
        className={`light yellow ${color === "yellow" ? "on" : ""}`}
        onClick={() => setColor("yellow")}
      ></div>
      <div
        className={`light green ${color === "green" ? "on" : ""}`}
        onClick={() => setColor("green")}
      ></div>
    </div>
  );
};

export default TrafficLight;