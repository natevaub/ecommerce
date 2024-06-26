import MaxWidthWrapper from "../components/MaxWidthWrapper";
import HeroCarousel from "../components/HeroCarousel";
import {
  ProductDisplayInfo,
  CollectionSlider,
} from "../components/ProductSlider";
import { getAllProducts } from "@/actions";

export default async function Home() {
  const product = await getAllProducts();

  return (
    <div>
      {/* {JSON.stringify(productInfos)} */}
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
            products={product}
          />
        </MaxWidthWrapper>
      </section>
      <section className="bg-grey-400">
        <MaxWidthWrapper className="flex flex-col h-[calc(100vh-10rem)]">
          <CollectionSlider
            title="Featured Collection"
            products={product}
          />
        </MaxWidthWrapper>
        </section>
    </div>
  );
}
