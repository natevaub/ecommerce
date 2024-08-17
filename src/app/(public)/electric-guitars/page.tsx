"use client";
import { useState, useEffect } from "react";
import { ProductsGrid } from "../../../components/ProductSlider";
import {
  getAllProductsWithMainImage,
  getFilteredProducts,
  getBrandsBasedOnActiveFilters,
  getModelsBasedOnActiveFilters,
  getSeriesBadsedOnActiveFilters,
} from "@/actions";
import { FlyoutLink, SortBy } from "@/components/SortBy";
import { FiltersGuitars } from "@/components/Filters";
import Link from "next/link";
import { Product } from "@/types/types";

import { FilterQuery, FilterCategory } from "../../../types/types";

export default function Page() {
  const [defaultView, setDefaultView] = useState<Product[]>([]);

  const [sortBy, setSortBy] = useState("");

  const [allFilters, setAllFilters] = useState<FilterCategory>({
    allBrands: [],
    allModels: [],
    allSeries: [],
    allColors: [],
    allPrices: [],
  });

  const [activeFilters, setActiveFilters] = useState<FilterQuery>({
    brands: [],
    models: [],
    series: [],
    colors: [],
    prices: [],
  });

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let products: Product[] | undefined;
      if (
        Object.values(activeFilters).every(
          (filterArray) => filterArray.length === 0
        )
      ) {
        products = await getAllProductsWithMainImage();
      } else {
        products = await getFilteredProducts(
          activeFilters.brands,
          activeFilters.models,
          activeFilters.series,
          activeFilters.prices
        );
      }

      if (products) {
        switch (sortBy) {
          case "Price Low To High":
            products.sort((a, b) => a.price - b.price);
            break;
          case "Price High To Low":
            products.sort((a, b) => b.price - a.price);
            break;
          case "Alphabetical A - Z":
            products.sort((a, b) => a.name.localeCompare(b.name));
            break;
          case "Alphabetical Z - A":
            products.sort((a, b) => b.name.localeCompare(a.name));
            break;
          default:
            break;
        }
      }

      // Add a delay before setting the state
      setTimeout(() => {
        setDefaultView(products as Product[]);
        setLoading(false);
      }, 500); // 1 second delay
    };
    fetchData();
  }, [activeFilters, sortBy]);

  const fetchAndSetFilter = async (filterKey: string, fetchFunc: (...args: any) => Promise<string[]>, ...fetchArgs: any[]) => {
    const data = await fetchFunc(...fetchArgs);
    setAllFilters((prev) => ({ ...prev, [filterKey]: data }));
  };

  useEffect(() => {
    fetchAndSetFilter(
      "allBrands",
      getBrandsBasedOnActiveFilters,
      activeFilters.models,
      activeFilters.series
    );
    fetchAndSetFilter(
      "allModels",
      getModelsBasedOnActiveFilters,
      activeFilters.brands,
      activeFilters.series
    );
    fetchAndSetFilter(
      "allSeries",
      getSeriesBadsedOnActiveFilters,
      activeFilters.brands,
      activeFilters.models
    );
  }, [activeFilters]);

  useEffect(() => {
    setAllFilters((prev) => ({
      ...prev,
      allPrices: ["$0 - $499", "$500 - $999", "$1000 - $1499"],
    }));
  }, []);

  return (
    // <MaxWidthWrapper className="pt-6 px-[12.5rem] inline-block ">
    <div className="flex justify-center pt-6">
      <div className="inline-block w-full max-w-[100rem]">
        <div className="flex w-full mb-4">
          <div className="max-md:hidden xl:ml-12 sm:ml-12">
            <Link href="/">Home</Link> /{" "}
            <Link href="/electric-guitars">Electric Guitars</Link>
          </div>
        </div>

        <div className="grid grid-cols-[auto,1fr] gap-6 w-full">
          <div className="flex flex-col">
            <h1 className="py-5 font-extrabold text-2xl xl:ml-12 sm:ml-10">
              ELECTRIC GUITARS
            </h1>
            <FiltersGuitars
              brands={allFilters.allBrands}
              models={allFilters.allModels}
              series={allFilters.allSeries}
              colors={allFilters.allColors}
              prices={allFilters.allPrices}
              setActiveFilters={setActiveFilters}
              activeFilters={activeFilters}
            />
            <FlyoutLink
              FlyoutContent={SortBy}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />
          </div>
          <div
            className={`flex items-start md:xl:ml-[5rem] md:lg:ml-[3.5rem] ${
              loading ? "filter blur-md brightness-25" : ""
            }`}
          >
            <ProductsGrid products={defaultView} />
          </div>
        </div>
      </div>
      {/* </MaxWidthWrapper> */}
    </div>
  );
}
