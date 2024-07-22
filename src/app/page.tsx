import MaxWidthWrapper from "../components/MaxWidthWrapper";
import HeroCarousel from "../components/HeroCarousel";
import {
  CollectionSlider,
} from "../components/ProductSlider";
import { getAllProductsWithMainImage } from "@/actions";
import {MODELS_ASSETS} from "../components/Assets";
import {DisplayItem, CarouselModelsCategory} from "../components/FrontPageModelCategory"

export default async function Home() {

  return (
    <div>
      <section>
        <HeroCarousel />
      </section>
      <section className="">
        <MaxWidthWrapper className="flex flex-col h-[calc(100vh-10rem)]">
        <h2 className="text-[2rem] my-6">TOP MODELS</h2>
        {/* <DisplayItem model={MODELS_ASSETS[0]} /> */}
        <CarouselModelsCategory dataList={MODELS_ASSETS} />
        </MaxWidthWrapper>
      </section>
      <section className="bg-grey-400">
        {/* <MaxWidthWrapper className="flex flex-col h-[calc(100vh-10rem)]">

        </MaxWidthWrapper> */}
        </section>
    </div>
  );
}
