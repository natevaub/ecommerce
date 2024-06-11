import { ProductInfo } from "@/types/types";
import { getAllProducts,  } from "@/actions";
import { getProductInfo } from "@/actions";
import Image from "next/image";

export function DisplayProducts({ products }: { products: Awaited<ReturnType<typeof getAllProducts>>}) {
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

export function ProductDisplayInfo( {title, products}: {title: string, products: Awaited<ReturnType<typeof getAllProducts>>} ) {
  return (
    <div className='w-full mt-[3rem] flex-grow overflow-hidden'>
      <h1 className='uppercase text-4xl'>{title}</h1>
      <div>
        <DisplayProducts products={products}/>
      </div>
    </div>
  );
}



export function DisplayByIdWithImage({ product }: { product: ProductInfo}) {
  return (
    <div className="flex flex-col h-[500px] w-[300px] bg-gray-200 items-center gap-[2rem] py-[2rem]">
      <div className='h-[350px]'>
        <img src={product.mainImage} alt={product.name} className='object-contain h-full'/>
      </div>
      <div className="text-center">
        <h1>{product.name}</h1>
        <p>${product.price}</p>
      </div>
      
    </div>
  );
}

export function ProductSlider( {title, product}: {title: string, product: ProductInfo} ) {
  return (
    <div className='w-full mt-[3rem] flex-grow'>
      <h1 className='uppercase text-4xl mb-[3rem]'>{title}</h1>
      <div>
        <DisplayByIdWithImage product={product}/>
      </div>
    </div>
  );
}


export default ProductSlider;