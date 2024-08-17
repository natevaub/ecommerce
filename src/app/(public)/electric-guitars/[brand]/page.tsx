"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { FiltersGuitars } from "@/components/Filters";
import { FilterCategory, FilterQuery, Product } from "../../../../types/types";
import {
} from "@/actions";

export default function Page() {
  const Router = useRouter();
  const pathName = usePathname();
  const brand = pathName.split("/")[2];

  if (brand !== "fender" && brand !== "gibson") {
    Router.push("/url-not-found");
    return;
  }

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



  return (
    // <MaxWidthWrapper className="pt-6 px-[12.5rem] inline-block ">
    <div className="flex justify-center pt-6">
      <div className="inline-block w-full max-w-[100rem]">
        <div className="flex w-full mb-4">
          <div className="max-md:hidden xl:ml-12 sm:ml-12">
            <Link href="/">Home</Link> /{" "}
            <Link href="/electric-guitars">Electrics</Link>
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
          </div>
        </div>
      </div>
    </div>
  );
}
