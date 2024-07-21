"use client";
import React from "react";
import { useState } from "react";
import { Model, Category } from "../types/types";

export default function DisplayItem({ model }: { model: Model }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const scaleStyle = isHovered
    ? { transform: "scale(1.1)" }
    : { transfrom: "scale(1)", transition: "tranform .5 ease" };

  return (
    <div
      className="w-[400px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="overflow-hidden">
        <img
          src={model.image_url}
          alt={model.name}
          className=""
          style={scaleStyle}
        />
      </div>
      <p>{model.name}</p>
    </div>
  );
}
