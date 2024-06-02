
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import HeroCarousel from "../components/HeroCarousel";
import ProductSlider from "../components/ProductSlider";

import { Product } from "@/types/types";
import { GetServerSideProps } from "next";
import { getAllProducts } from "@/actions";

interface HomePageProps {
  products: Product[];
}

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  // Fetch products data
  const products = await getAllProducts();
  
  // Return props object
  return {
    props: {
      products, // Pass products directly
    },
  };
};

export default function HomePage({ products }: HomePageProps) {
  return (
    <div>
      <section>
        <HeroCarousel />
      </section>
      <section className="bg-red-400">
        <MaxWidthWrapper className="flex flex-col h-[calc(100vh-10rem)]">
          <ProductSlider title="Featured Products" products={products} />
        </MaxWidthWrapper>
      </section>
      <section className="bg-blue-400">
        <MaxWidthWrapper className="flex flex-col h-[calc(100vh-10rem)]">
          <ProductSlider title="Best Sellers" products={products} />
        </MaxWidthWrapper>
      </section>
    </div>
  );
}