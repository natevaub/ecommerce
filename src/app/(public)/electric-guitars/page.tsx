"use client";
import MaxWidthWrapper from "../../../components/MaxWidthWrapper";
import { useState, useEffect, act } from "react";
import { ProductsGrid } from "../../../components/ProductSlider";
import {
  getAllProductsWithMainImage,
  getFilteredProducts,
  getBrandsBasedOnActiveFilters,
  getModelsBasedOnActiveFilters,
  getSeriesBadsedOnActiveFilters,
} from "@/actions";
import { FiltersGuitars } from "@/components/Filters";
import Link from "next/link";
import { Product } from "@/types/types";

import { FilterQuery, FilterCategory } from "../../../types/types";

const FlyoutLink = ({ FlyoutContent, sortBy, onSortChange }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = open && FlyoutContent;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="group relative h-fit xl:ml-12 sm:ml-10"
    >
      <h1 className="uppercase font-bold pb-2 text-sm cursor-pointer">
        Sort By :{" "}
        <span className="text-red-400 transition duration-150">
          {sortBy || "Please select one"}
        </span>
      </h1>
      {showFlyout && <FlyoutContent onSortChange={onSortChange} />}
    </div>
  );
};

const SortBy = ({ onSortChange }) => {
  const liStyle = "p-1 hover:bg-gray-200 hover:font-semibold";
  return (
    <ul className="border-2 cursor-pointer">
      <li
        className={liStyle}
        onClick={() => {
          onSortChange("Price Low To High");
        }}
      >
        Price Low to High
      </li>
      <li
        className={liStyle}
        onClick={() => {
          onSortChange("Price High To Low");
        }}
      >
        Price High to Low
      </li>
      <li
        className={liStyle}
        onClick={() => {
          onSortChange("Alphabetical A - Z");
        }}
      >
        Alphabetical A - Z
      </li>
      <li
        className={liStyle}
        onClick={() => {
          onSortChange("Alphabetical Z - A");
        }}
      >
        Alphabetical Z - A
      </li>
    </ul>
  );
};

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
        console.log("Fetched all products:", products);
      } else {
        products = await getFilteredProducts(
          activeFilters.brands,
          activeFilters.models,
          activeFilters.series,
          activeFilters.prices
        );
        
      }
      console.log("Active Prices:", activeFilters.prices)
      console.log("Hello");

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

  useEffect(() => {
    const fetchData = async () => {
      const brands = await getBrandsBasedOnActiveFilters(activeFilters.models, activeFilters.series);
      setAllFilters((prev) => ({ ...prev, allBrands: brands }));
    };
    fetchData();
  }, [activeFilters]);

  useEffect(() => {
    const fetchData = async () => {
      // const models = await getAllUniqueModels();
      const models = await getModelsBasedOnActiveFilters(activeFilters.brands, activeFilters.series);
      setAllFilters((prev) => ({ ...prev, allModels: models }));
    };
    fetchData();
  }, [activeFilters]);

  useEffect(() => {
    const fetchData = async () => {
      const series = await getSeriesBadsedOnActiveFilters(activeFilters.brands, activeFilters.models);
      setAllFilters((prev) => ({ ...prev, allSeries: series }));
    };
    fetchData();
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
            ></FlyoutLink>
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
