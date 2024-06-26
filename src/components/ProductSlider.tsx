import { ProductInfo } from "@/types/types";
import { getAllProducts } from "@/actions";
import {Product} from "../types/types"
// import { getProductInfo } from "@/actions";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function DisplayProducts({
  products,
}: {
  products: Awaited<ReturnType<typeof getAllProducts>>;
}) {
  return (
    <div>
      <h1>Fender Telecaster Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.product_id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Stock: {product.stock_quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProductDisplayInfo({
  title,
  products,
}: {
  title: string;
  products: Awaited<ReturnType<typeof getAllProducts>>;
}) {
  return (
    <div className="w-full mt-[3rem] flex-grow overflow-hidden">
      <h1 className="uppercase text-4xl mb-[3rem]">{title}</h1>
      <div>
        <DisplayProducts products={products} />
      </div>
    </div>
  );
}

export function DisplayByIdWithImage({ product }: { product: Product }) {
  return (
    <div className="flex flex-col h-[500px] w-[300px] bg-gray-200 items-center gap-[2rem] py-[2rem]">
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

export function ProductSlider({
  title,
  product,
}: {
  title: string;
  product: ProductInfo;
}) {
  return (
    <div className="w-full mt-[3rem] flex-grow">
      <h1 className="uppercase text-4xl mb-[3rem]">{title}</h1>
      <div>
        <DisplayByIdWithImage product={product} />
      </div>
    </div>
  );
}

// <Carousel>
//   <CarouselContent>
//     <CarouselItem>...</CarouselItem>
//     <CarouselItem>...</CarouselItem>
//     <CarouselItem>...</CarouselItem>
//   </CarouselContent>
//   <CarouselPrevious />
//   <CarouselNext />
// </Carousel>

// export function CarouselSize() {
// return (
// <Carousel
// opts={{
// align: "start",
// }}
// className="w-full max-w-sm"
// >
// <CarouselContent>
// {Array.from({ length: 5 }).map((_, index) => (
// <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
// <div className="p-1">
// <Card>
// <CardContent className="flex aspect-square items-center justify-center p-6">
// <span className="text-3xl font-semibold">{index + 1}</span>
// </CardContent>
// </Card>
// </div>
// </CarouselItem>
// ))}
// </CarouselContent>
// <CarouselPrevious />
// <CarouselNext />
// </Carousel>
// )
// }

export function ProductCarousel({
  products,
}: {
  products: Awaited<ReturnType<typeof getAllProducts>>;
}) {
  // console.log(
  //   "Path of images received:",
  //   products.map((product) => product.mainImage)
  // );
  // console.log(
  //   "ID of images received:",
  //   products.map((product) => product.id)
  // );
  return (
    <Carousel>
      <CarouselContent className="flex">
        {products.map((product) => (
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
  products: Awaited<ReturnType<typeof getAllProducts>>;
}) {
  // console.log(products);
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
    console.log(product.image_url);
  }
  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <DisplayByIdWithImage product={product} />
      ))}
    </div>
  );
}

export default ProductSlider;
