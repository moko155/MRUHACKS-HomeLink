import * as React from "react";
import "./HouseVisualization.css";

interface HousePart {
  shape: string;
  color: string;
  texture: string;
  content: string;
}

interface HouseVisualizationProps {
  roof: HousePart;
  window: HousePart;
  door: HousePart;
  exterior: HousePart;
  onPartClick: (part: "roof" | "window" | "door" | "exterior") => void;
}

const HouseVisualization: React.FC<HouseVisualizationProps> = ({
  roof,
  window,
  door,
  exterior,
  onPartClick,
}) => {
  return React.createElement(
    "svg",
    {
      className: "house-svg",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 400 300",
    },
    [
      // Exterior (house body)
      React.createElement("rect", {
        key: "exterior",
        x: 50,
        y: 120,
        width: 300,
        height: 160,
        fill: exterior.color,
        className: "house-part exterior",
        onClick: () => onPartClick("exterior"),
      }),

      // Roof
      roof.shape === "flat"
        ? React.createElement("rect", {
            key: "roof-flat",
            x: 50,
            y: 80,
            width: 300,
            height: 40,
            fill: roof.color,
            className: "house-part roof",
            onClick: () => onPartClick("roof"),
          })
        : React.createElement("polygon", {
            key: "roof-triangle",
            points: "50,120 200,20 350,120",
            fill: roof.color,
            className: "house-part roof",
            onClick: () => onPartClick("roof"),
          }),

      // Window
      window.shape === "circle"
        ? React.createElement("circle", {
            key: "window-circle",
            cx: 280,
            cy: 160,
            r: 30,
            fill: window.color,
            className: "house-part window",
            onClick: () => onPartClick("window"),
          })
        : React.createElement("rect", {
            key: "window-square",
            x: 250,
            y: 130,
            width: 60,
            height: 60,
            fill: window.color,
            className: "house-part window",
            onClick: () => onPartClick("window"),
          }),

      // Door
      door.shape === "double"
        ? React.createElement("g", { key: "door-double" }, [
            React.createElement("rect", {
              key: "door-left",
              x: 140,
              y: 160,
              width: 40,
              height: 120,
              fill: door.color,
              className: "house-part door",
              onClick: () => onPartClick("door"),
            }),
            React.createElement("rect", {
              key: "door-right",
              x: 180,
              y: 160,
              width: 40,
              height: 120,
              fill: door.color,
              className: "house-part door",
              onClick: () => onPartClick("door"),
            }),
          ])
        : React.createElement("rect", {
            key: "door-single",
            x: 160,
            y: 160,
            width: 80,
            height: 120,
            fill: door.color,
            className: "house-part door",
            onClick: () => onPartClick("door"),
          }),
    ]
  );
};

export default HouseVisualization;
