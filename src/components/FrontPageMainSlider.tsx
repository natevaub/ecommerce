"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ArrowBigLeft, ArrowBigRight, Minus } from "lucide-react";
import "../styles/image-slider.css";

type ImageSliderProps = {
  imagesUrls: string[];
};

export function ImageSlider({ imagesUrls }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      showNextImage();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [imageIndex, imagesUrls]);

  function showNextImage() {
    setImageIndex((prevIndex) =>
      prevIndex === imagesUrls.length - 1 ? 0 : prevIndex + 1
    );
  }

  function showPreviousImage() {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? imagesUrls.length - 1 : prevIndex - 1
    );
  }

  return (
    <div className="bg-black w-full h-full relative">
      <div className="w-full h-full flex overflow-hidden">
        {imagesUrls.map((url) => (
          <img
            key={url}
            src={imagesUrls[imageIndex]}
            alt="slider image"
            className="img-slider-img "
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>

      <button
        className="img-slider-btn"
        style={{ left: 0 }}
        onClick={showNextImage}
      >
        <ArrowBigLeft />
      </button>
      <button
        className="img-slider-btn"
        style={{ right: 0 }}
        onClick={showPreviousImage}
      >
        <ArrowBigRight />
      </button>
      <div className="absolute w-full bottom-[0.5rem] left-[50%] flex gap-[.25rem] z-50">
        {imagesUrls.map((_, index) => (
          <button
            key={index}
            className="cursor-pointer"
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? <Minus color="white" /> : <Minus />}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
