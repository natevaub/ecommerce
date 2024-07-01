import MaxWidthWrapper from "../components/MaxWidthWrapper";
import HeroCarousel from "../components/HeroCarousel";
import {
  CollectionSlider,
} from "../components/ProductSlider";
import { getAllProductsWithMainImage } from "@/actions";

export default async function Home() {
  const product = await getAllProductsWithMainImage();

  return (
    <div>
      {/* {JSON.stringify(productInfos)} */}
      <section>
        <HeroCarousel />
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
