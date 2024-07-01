import { getAllProductsWithMainImage } from "@/actions";
import {Product} from "../types/types"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


export function DisplayByIdWithImage({ product }: { product: Product }) {
  return (
    <div className="flex flex-col h-[500px] w-[300px] bg-gray-200 items-center gap-[2rem] py-[2rem] border border-transparent hover:border-width-5 hover:border-red-500 cursor-pointer">
      <div className="h-[350px]">
        <img
          src={product.image_url}
          alt={product.name}
          className="object-contain h-full"
        />
      </div>
      <div className="text-center">
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
            className="flex-none w-1/2 md:w-1/4"
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

export function ProductsGrid({
  products,
}: {
  products: Product[];
}) {
  for (let product of products) {
    //console.log(product.image_url);
  }
  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <DisplayByIdWithImage key={product.id} product={product} />
      ))}
    </div>
  );
}

