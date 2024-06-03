import MaxWidthWrapper from "../components/MaxWidthWrapper";
import HeroCarousel from "../components/HeroCarousel";
import ProductSlider from "../components/ProductSlider";
import { ProductDisplayInfo } from "../components/ProductSlider";
import { getAllProducts, getProductInfo } from "@/actions";

export default async function Home() {
  const product = await getAllProducts();
  const productById = await getProductInfo(1);
  console.log("Name: ", productById.name, "Price: ", productById.price, "Url: ", productById.mainImage);

  return (
    <div>
      {/* { JSON.stringify(product) } */}
      <section>
        <HeroCarousel />
      </section>
      <section className="bg-red-400">
        <MaxWidthWrapper className="flex flex-col h-[calc(100vh-10rem)]">
          <ProductDisplayInfo title="Featured Products" products={product} />
        </MaxWidthWrapper>
      </section>
      <section className="bg-blue-400">
        <MaxWidthWrapper className="flex flex-col h-[calc(100vh-10rem)]">
          <ProductSlider title="Featured Products" product={productById} />
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
