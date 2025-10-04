import * as React from "react";
import { ChangeEvent } from "react";
import "./HouseCustomizer.css";

interface HouseCustomizerProps {
  part: "roof" | "window" | "door" | "exterior";
  values: {
    shape: string;
    color: string;
    texture: string;
    content: string;
  };
  onChange: (updatedValues: {
    shape: string;
    color: string;
    texture: string;
    content: string;
  }) => void;
  onClose: () => void;
}

const HouseCustomizer: React.FC<HouseCustomizerProps> = ({
  part,
  values,
  onChange,
  onClose,
}) => {
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    onChange({ ...values, [name]: value });
  };

  return (
    React.createElement("div", { className: "customizer-container" }, [
      React.createElement("h2", { key: "title", className: "customizer-title" }, `Customize ${part}`),

      // Shape selector
      React.createElement("label", { key: "shape-label", className: "customizer-label" }, "Shape"),
      React.createElement("select", {
        key: "shape-input",
        name: "shape",
        value: values.shape,
        onChange: handleInputChange,
        className: "customizer-select",
      }, [
        React.createElement("option", { key: "default", value: "" }, "Select shape"),
        React.createElement("option", { key: "opt1", value: "triangle" }, "Triangle"),
        React.createElement("option", { key: "opt2", value: "square" }, "Square"),
        React.createElement("option", { key: "opt3", value: "arched" }, "Arched"),
      ]),

      // Color input
      React.createElement("label", { key: "color-label", className: "customizer-label" }, "Color"),
      React.createElement("input", {
        key: "color-input",
        type: "color",
        name: "color",
        value: values.color,
        onChange: handleInputChange,
        className: "customizer-color",
      }),

      // Texture selector
      React.createElement("label", { key: "texture-label", className: "customizer-label" }, "Texture"),
      React.createElement("select", {
        key: "texture-input",
        name: "texture",
        value: values.texture,
        onChange: handleInputChange,
        className: "customizer-select",
      }, [
        React.createElement("option", { key: "none", value: "" }, "None"),
        React.createElement("option", { key: "wood", value: "wood" }, "Wood"),
        React.createElement("option", { key: "brick", value: "brick" }, "Brick"),
        React.createElement("option", { key: "tiles", value: "tiles" }, "Tiles"),
      ]),

      // Content input
      React.createElement("label", { key: "content-label", className: "customizer-label" }, "Content"),
      React.createElement("textarea", {
        key: "content-input",
        name: "content",
        value: values.content,
        onChange: handleInputChange,
        className: "customizer-textarea",
        rows: 3,
      }),

      // Close button
      React.createElement("button", {
        key: "close-button",
        onClick: onClose,
        className: "customizer-close-btn",
      }, "Close"),
    ])
  );
};

export default HouseCustomizer;
