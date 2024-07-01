import { useState, useEffect } from "react";
import { LucideMinus, LucidePlus } from "lucide-react";

type OptionKey = 'brands' | 'models' | 'series' | 'colors' | 'prices';

interface FiltersProps {
  brands: string[];
  models: string[];
  series: string[];
  colors: string[];
  prices: string[];
}

export const FiltersGuitars = ({
  brands,
  models,
  series,
  colors,
  prices,
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





  return (

    <div className="lg:w-[250px]">
      <h1 className="uppercase font-bold pb-2">Filters</h1>

      <ul>
        <li className="flex justify-between uppercase p-0.5 border-b-2">
          Brands
          {isOptionsShown.brands ? (
            <LucideMinus onClick={() => toggleOption('brands') }></LucideMinus>
          ) : (
            <LucidePlus onClick={() => toggleOption('brands' )}></LucidePlus>
          )}
        </li>

        {isOptionsShown.brands &&
          brands.map((brand, index) => <div key={index}>{brand}</div>)}

        <li className="flex justify-between uppercase p-0.5 border-b-2">
          Models
          {isOptionsShown.models ? (
            <LucideMinus onClick={() => toggleOption('models') }></LucideMinus>
          ) : (
            <LucidePlus onClick={() => toggleOption('models') }></LucidePlus>
          )}
          
        </li>
          {isOptionsShown.models &&
            models.map((model, index) => <div key={index}>{model}</div>)}
        <li className="flex justify-between uppercase p-0.5 border-b-2">
         Series 
          {isOptionsShown.series ? (
            <LucideMinus onClick={() => toggleOption('series') }></LucideMinus>
          ) : (
            <LucidePlus onClick={() => toggleOption('series') }></LucidePlus>
          )}
        </li>
          {isOptionsShown.series &&
            series.map((serie, index) => <div key={index}>{serie}</div>)}
        {/* <li className="uppercase p-0.5 border-b-2"> Color</li> */}
        <li className="flex justify-between uppercase p-0.5 border-b-2">
            Prices
          {isOptionsShown.prices ? (
            <LucideMinus onClick={() => toggleOption('prices') }></LucideMinus>
          ) : (
            <LucidePlus onClick={() => toggleOption('prices') }></LucidePlus>
          )}
        </li>
          {isOptionsShown.prices &&
            prices.map((price, index) => <div key={index}>{price}</div>)}
      </ul>
    </div>
  );
};
