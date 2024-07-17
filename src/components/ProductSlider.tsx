import { getAllProductsWithMainImage } from "@/actions";
import { Product } from "../types/types";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function DisplayByIdWithImage({ product }: { product: Product }) {
  return (
    <div className="flex flex-col 2xl:h-[417px] 2xl:w-[250px] xl:h-[417px] xl:w-[250px] lg:h-[360px] lg:w-[217px] md:h-[200px] md:w-[150px] bg-gray-200 items-center gap-[2rem] xl:py-[2rem] py-[1.25rem] border border-transparent hover:border-width-5 hover:border-red-500 cursor-pointer font-semibold">
      <div className="xl:h-[290px] lg:h-[250px] md:h-[250px]">
        <img
          src={product.image_url}
          alt={product.name}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="px-[0.25rem] text-center max-xl:text-sm ">
        <h1>{product.name}</h1>
        <p>${product.price}</p>
      </div>
    </div>
  );
}

export function ProductCarousel({
  products,
}: {
  products: Awaited<ReturnType<typeof getAllProductsWithMainImage>>;
}) {
  return (
    <Carousel>
      <CarouselContent className="flex">
        {products?.map((product) => (
          <CarouselItem
            key={product.product_id}
            className="flex-none w-1/2 w-1/4"
          >
            <DisplayByIdWithImage product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export function CollectionSlider({
  title,
  products,
}: {
  title: string;
  products: Awaited<ReturnType<typeof getAllProductsWithMainImage>>;
}) {
  return (
    <div className="w-full mt-[3rem] flex-grow">
      <h1 className="uppercase text-4xl mb-[3rem]">{title}</h1>
      <div>
        <ProductCarousel products={products} />
      </div>
    </div>
  );
}

export function ProductsGrid({ products }: { products: Product[] }) {
  for (let product of products) {
    // console.log("ProductsGrid display:", product.name);
  }
  return (
    <div className="2xl:grid 2xl:grid-cols-4 gap-4 md:xl:grid md:xl:grid-cols-3 max-xl:grid max-xl:grid-cols-3">
      {products.map((product) => (
        <DisplayByIdWithImage key={product.id} product={product} />
      ))}
    </div>
  );
}
