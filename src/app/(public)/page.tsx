import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import HeroCarousel from "../../components/HeroCarousel";
import { CollectionSlider } from "../../components/ProductSlider";
import { MODELS_ASSETS, CATEGORIES_ASSETS } from "../../components/Assets";
import {
  CarouselModelsCategories,
} from "../../components/FrontPageModelCategory";

export default async function Home() {
  return (
    <div>
      <section>
        <HeroCarousel />
      </section>
      <section className="">
        <MaxWidthWrapper className="flex flex-col h-[calc(100vh-10rem)]">
          <h2 className="text-[2rem] my-6">TOP MODELS</h2>
          <CarouselModelsCategories dataList={MODELS_ASSETS} />
        </MaxWidthWrapper>
      </section>
      <section className="bg-grey-400">
        <MaxWidthWrapper className="flex flex-col h-[calc(100vh-10rem)]">
          <h2 className="text-[2rem] my-6">TOP CATEGORIES</h2>
          <CarouselModelsCategories dataList={CATEGORIES_ASSETS} />
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
