"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { FiltersGuitars } from "@/components/Filters";
import { FilterCategory, FilterQuery, Product } from "../../../../types/types";
import {
  getAllProductsWithMainImage,
  getAllUniqueBrands,
  getAllUniqueModels,
  getAllUniqueSeries,
  getFilteredProducts,
  getProductsByModel,
} from "@/actions";

export default function Page() {
  const Router = useRouter();
  const pathName = usePathname();
  const brand = pathName.split("/")[2];

  console.log("Brand", brand);

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

  useEffect(() => {
    const fetchData = async () => {
      const brands = await getAllUniqueBrands();
      setAllFilters((prev) => ({ ...prev, allBrands: brands }));
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const models = await getAllUniqueModels();
      setAllFilters((prev) => ({ ...prev, allModels: models }));
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const series = await getAllUniqueSeries();
      setAllFilters((prev) => ({ ...prev, allSeries: series }));
    };
    fetchData();
  }, []);

  useEffect(() => {
    setAllFilters((prev) => ({
      ...prev,
      allPrices: ["$0 - $499", "$500 - $999", "$1000 - $1499"],
    }));
    console.log("Set allPrices:", [
      "$0 - $499",
      "$500 - $999",
      "$1000 - $1499",
    ]);
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
              {brand?.toUpperCase()} ELECTRIC GUITARS
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
            {/* <FlyoutLink 
              FlyoutContent={SortBy}
              sortBy={sortBy}
              onSortChange={setSortBy}
            ></FlyoutLink> */}
          </div>
        </div>
      </div>
    </div>
  );
}
