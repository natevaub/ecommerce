"use client";
import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import { useState, useEffect } from "react";
import { ProductsGrid } from "../../components/ProductSlider";
import {
  getAllProductsWithMainImage,
  getAllUniqueModels,
  getAllUniqueBrands,
  getAllUniqueSeries,
} from "@/actions";
import { FiltersGuitars } from "@/components/Filters";
import Link from "next/link";
import { Product } from "@/types/types";

interface FilterState {
  allBrands: string[];
  activeBrands: string[] | null;
  allModels: string[];
  activeModels: string[] | null;
  allSeries: string[];
  activeSeries: string[] | null;
  allColors: string[];
  activeColor: string | null;
  allPrices: string[];
  activePrice: string | null;
}

export default function Page() {
  const [defaultView, setDefaultView] = useState<Product[]>([]);
  const [allFilters, setAllFilters] = useState<FilterState>({
    allBrands: [],
    activeBrands: null,
    allModels: [],
    activeModels: null,
    allSeries: [],
    activeSeries: null,
    allColors: [],
    activeColor: null,
    allPrices: [],
    activePrice: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      const products = await getAllProductsWithMainImage();
      setDefaultView(products as Product[]);
      console.log("Fetched products:", products);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const brands = await getAllUniqueBrands();
      setAllFilters((prev) => ({ ...prev, allBrands: brands }));
      console.log("Fetched brands:", brands);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const models = await getAllUniqueModels();
      setAllFilters((prev) => ({ ...prev, allModels: models }));
      console.log("Fetched models:", models);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      console.log('Fetching series...');
      const series = await getAllUniqueSeries();
      setAllFilters((prev) => ({ ...prev, allSeries: series }));
      console.log("Fetched series:", series);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setAllFilters((prev) => ({
      ...prev,
      allPrices: ["$0 - $499", "$500 - $999", "$1000 - $1499"],
    }));
    console.log("Set allPrices:", ["$0 - $499", "$500 - $999", "$1000 - $1499"]);
  }, []);


  return (
    <MaxWidthWrapper className="pt-6 md:px-[12.5rem] inline-block">
      <div className="inline-block w-full">
        <div className="flex justify-between w-full">
          <div>
            <Link href="/">Home</Link> /{" "}
            <Link href="/electric-guitars">Electric Guitars</Link>
          </div>

          <div>Sort By:</div>
        </div>

        <div className="flex justify-between">
          <h1 className="py-5 font-extrabold text-2xl">ELECTRIC GUITARS</h1>
        </div>
        <div className="flex gap-6">
          <FiltersGuitars
            brands={allFilters.allBrands}
            models={allFilters.allModels}
            series={allFilters.allSeries}
            colors={allFilters.allColors}
            prices={allFilters.allPrices}
          />
          <div className="flex justify-center">
            <ProductsGrid products={defaultView} />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
