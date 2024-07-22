"use client";
import React from "react";
import { useState } from "react";
import { Model, Category } from "../types/types";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function DisplayItem({ data }: { data: Model }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const zoomStyle = isHovered
    ? { transform: "scale(1.1)", transition: "transform .5s ease" }
    : { transfrom: "scale(1)", transition: "transform .5s ease" };

  return (
    <div
      className="w-[400px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="overflow-hidden">
        <img
          src={data.image_url}
          alt={data.name}
          className=""
          style={zoomStyle}
        />
      </div>
      <p className="text-lg flex items-center mr-2">
        {data.name}
        {isHovered ? <ArrowRight className="transition" /> : ""}
      </p>
    </div>
  );
}

function CarouselModelsCategories({
  dataList,
}: {
  dataList: Model[] | Category[];
}) {
  return (
    <Carousel className="item-gap-4">
      <CarouselContent>
        {dataList?.map((data) => (
          <CarouselItem key={data.name} className="md:basis-1/2 lg:basis-1/4">
            <DisplayItem data={data} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export { DisplayItem, CarouselModelsCategories };
