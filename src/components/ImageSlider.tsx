"use client";
import Image from "next/image";
import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import "../styles/image-slider.css";

type ImageSliderProps = {
  imagesUrls: string[];
};

export function ImageSlider({ imagesUrls }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((imageIndex) => {
      if (imageIndex === imagesUrls.length - 1) return 0;
      return imageIndex + 1;
    });
  }

  function showPreviousImage() {
    setImageIndex((imageIndex) => {
      if (imageIndex === 0) return imagesUrls.length - 1;
      return imageIndex - 1;
    });
  }

  return (
    <div className="bg-black w-full h-full relative">
      <Image src={imagesUrls[imageIndex]} alt='slider image' className="img-slider-img " />
      <button className='img-slider-btn' style={{left: 0}} onClick={showNextImage}>
        <ArrowBigLeft />
      </button>
      <button className='img-slider-btn' style={{right: 0}} onClick={showPreviousImage}>
        <ArrowBigRight />
      </button>

      </div>
      
  );
}

export default ImageSlider;
