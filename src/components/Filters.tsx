import { useState, useEffect, use } from "react";
import {
  LucideMinus,
  LucidePlus,
  LucideSquare,
  LucideSquareCheck,
} from "lucide-react";

import { FilterQuery } from "../types/types";

type OptionKey = "brands" | "models" | "series" | "colors" | "prices";

interface FiltersProps {
  brands: string[];
  models: string[];
  series: string[];
  colors: string[];
  prices: string[];
  setActiveFilters: React.Dispatch<React.SetStateAction<FilterQuery>>;
  activeFilters: FilterQuery;
}

export const FiltersGuitars = ({
  brands,
  models,
  series,
  colors,
  prices,
  setActiveFilters,
  activeFilters,
}: FiltersProps) => {
  const [isOptionsShown, setIsOptionsShown] = useState({
    brands: false,
    models: false,
    series: false,
    colors: false,
    prices: false,
  });

  const toggleOption = (option: OptionKey) => {
    setIsOptionsShown((prev) => ({ ...prev, [option]: !prev[option] }));
  };

  const toggleFilter = (category: OptionKey, filter: string) => {
    setActiveFilters((prev) => {
      const isActive = (
        prev[category as keyof typeof prev] as string[]
      ).includes(filter);
      if (isActive) {
        // If the filter is already active, remove it from the array
        return {
          ...prev,
          [category]: prev[category].filter((f) => f !== filter),
        };
      } else {
        // If the filter is not active, add it to the array
        return { ...prev, [category]: [...prev[category], filter] };
      }
    });
  };

  useEffect(() => {
    console.log("Active filters:", activeFilters);
  }, [activeFilters, setActiveFilters]);

  return (
    <div className="xl:ml-12 sm:ml-10 mb-3">
      <h1 className="uppercase font-bold pb-2">Filters</h1>

      <ul>
        <li className="flex justify-between uppercase p-0.5 border-b-2 mb-2">
          Brands
          {isOptionsShown.brands ? (
            <LucideMinus onClick={() => toggleOption("brands")}></LucideMinus>
          ) : (
            <LucidePlus onClick={() => toggleOption("brands")}></LucidePlus>
          )}
        </li>

        {isOptionsShown.brands &&
          brands.map((brand, index) => (
            <div
              key={index}
              className="flex justify-between p-0.5 text-sm"
              onClick={() => toggleFilter("brands", brand)}
            >
              {brand}
              {activeFilters.brands.includes(brand) ? (
                <LucideSquareCheck className="w-3 mr-[0.4rem]" />
              ) : (
                <LucideSquare className="w-3 mr-[0.4rem]" />
              )}
            </div>
          ))}

        <li className="flex justify-between uppercase p-0.5 border-b-2 mb-2">
          Models
          {isOptionsShown.models ? (
            <LucideMinus onClick={() => toggleOption("models")}></LucideMinus>
          ) : (
            <LucidePlus onClick={() => toggleOption("models")}></LucidePlus>
          )}
        </li>
        {isOptionsShown.models &&
          models.map((model, index) => (
            <div
              key={index}
              className="flex justify-between p-0.5 text-sm"
              onClick={() => toggleFilter("models", model)}
            >
              {model}
              {activeFilters.models.includes(model) ? (
                <LucideSquareCheck className="w-3 mr-[0.4rem]" />
              ) : (
                <LucideSquare className="w-3 mr-[0.4rem]" />
              )}
            </div>
          ))}
        <li className="flex justify-between uppercase p-0.5 border-b-2 mb-2">
          Series
          {isOptionsShown.series ? (
            <LucideMinus onClick={() => toggleOption("series")}></LucideMinus>
          ) : (
            <LucidePlus onClick={() => toggleOption("series")}></LucidePlus>
          )}
        </li>
        {isOptionsShown.series &&
          series.map((serie, index) => (
            <div
              key={index}
              className="flex justify-between p-0.5 text-sm"
              onClick={() => toggleFilter("series", serie)}
            >
              {serie}
              {activeFilters.series.includes(serie) ? (
                <LucideSquareCheck className="w-3 mr-[0.4rem]" />
              ) : (
                <LucideSquare className="w-3 mr-[0.4rem]" />
              )}
            </div>
          ))}
        {/* <li className="uppercase p-0.5 border-b-2"> Color</li> */}
        <li className="flex justify-between uppercase p-0.5 border-b-2 mb-2">
          Prices
          {isOptionsShown.prices ? (
            <LucideMinus onClick={() => toggleOption("prices")}></LucideMinus>
          ) : (
            <LucidePlus onClick={() => toggleOption("prices")}></LucidePlus>
          )}
        </li>
        {isOptionsShown.prices &&
          prices.map((price, index) => (
            <div
              key={index}
              className="flex justify-between p-0.5 text-sm"
              onClick={() => toggleFilter("prices", price)}
            >
              {price}
              {activeFilters.prices.includes(price) ? (
                <LucideSquareCheck className="w-3 mr-[0.4rem]" />
              ) : (
                <LucideSquare className="w-3 mr-[0.4rem]" />
              )}
            </div>
          ))}
      </ul>
    </div>
  );
};
