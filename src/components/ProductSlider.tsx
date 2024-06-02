import { getAllProducts } from "@/actions";
import { Product } from "@/types/types";

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

type ProductSliderProps = {
  title: string;
  products: Product[];
}

export function ProductSlider( {title, products}: {title: string, products: Awaited<ReturnType<typeof getAllProducts>>} ) {
  return (
    <div className='w-full mt-[3rem] flex-grow'>
      <h1 className='uppercase text-4xl'>{title}</h1>
      <div>
        <DisplayProducts products={products}/>
      </div>
    </div>
  );
}

export default ProductSlider;