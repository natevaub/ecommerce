import MaxWidthWrapper from "../components/MaxWidthWrapper";
import HeroCarousel from "../components/HeroCarousel";
import ProductSlider from "../components/ProductSlider";
import {
  ProductDisplayInfo,
  ProductCarousel,
  CollectionSlider,
} from "../components/ProductSlider";
import { getAllProducts, getProductInfos } from "@/actions";

export default async function Home() {
  const product = await getAllProducts();
  const productInfos = await getProductInfos();

  return (
    <div>
      {JSON.stringify(productInfos)}
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
          <CollectionSlider
            title="Featured Collection"
            products={productInfos}
          />
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
