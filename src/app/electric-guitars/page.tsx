"use client";
import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import { useState, useEffect } from "react";
import { ProductsGrid } from "../../components/ProductSlider";
import { getAllProducts } from "@/actions";
import Link from "next/link";
import { LucideMinus, LucidePlus } from "lucide-react";

export default function Page() {
  /* Get Products */
  // const all_products = await getAllProducts();
  const [isOptionsShown, setIsOptionsShown] = useState(false);
  const [all_products, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await getAllProducts();
      setAllProducts(products);
    };

    fetchData();
  }, []);

  return (
    <MaxWidthWrapper className="pt-6 md:px-[12.5rem] inline-block">
      <div className="inline-block w-full">
        <div className="flex justify-between w-full">
          <div>
            <Link href="/">Home</Link> /{" "}
            <Link href="/electric-guitars">Electric Guitars</Link>
          </div>

          <div>Sort By:</div>
        </div>

        <div className="flex justify-between">
          <h1 className="py-5 font-extrabold text-2xl">ELECTRIC GUITARS</h1>
        </div>
        <div className="flex gap-6">
          <div className="lg:w-[250px]">
            {/* Filters / Model / Serie / Collor / Price */}
            <h1 className="uppercase font-bold pb-2">Filters</h1>
            <ul>
              <li className="flex justify-between uppercase p-0.5 border-b-2">
                Model
                {isOptionsShown ? (
                  <LucideMinus
                    onClick={() => setIsOptionsShown(false)}
                  ></LucideMinus>
                ) : (
                  <LucidePlus
                    onClick={() => setIsOptionsShown(true)}
                  ></LucidePlus>
                )}
              </li>
              {isOptionsShown && <div>Get Models From DB</div>}

              <li className="uppercase p-0.5 border-b-2">Series</li>
              <li className="uppercase p-0.5 border-b-2"> Color</li>
              <li className="uppercase p-0.5 border-b-2">Price</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <ProductsGrid products={all_products} />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

// export default async function Page() {
//   /* Get Products */
//   const [ isOptionsShown, setIsOptionsShown ] = useState(false);
//   const [ all_products, setAllProducts ] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const products = await getAllProducts();
//       setAllProducts(products);
//     };

//     fetchData();
//   }, []);
//   // return (
//   //   <MaxWidthWrapper className="pt-6 md:px-[15rem] flex inline-block ">
//   //     <div className='inline-block'>
//   //     <div>
//   //       Hello From Electrics Page!
//   //     </div>
//   //     <div>Path</div>
//   //     <div className="flex justify-between">
//   //       <h1>ELECTRICS</h1>

//   //     </div>
//   //     <div className='inline-flex'>
//   //       <div className='lg:w-[200px]'>
//   //         {/* Filters / Model / Serie / Collor / Price */}
//   //         <h1>Filters</h1>
//   //         <ul>
//   //           <li>
//   //             Model
//   //           </li>
//   //           <li>
//   //            Series
//   //           </li>
//   //           <li>
//   //            Color
//   //           </li>
//   //           <li>
//   //            Price
//   //           </li>
//   //         </ul>
//   //       </div>
//   //       </div>
//   //       <div>
//   //         GRID
//   //       </div>
//   //       <div className="flex justify-center">
//   //         <ProductsGrid products={all_products} />
//   //       </div>
//   //       {/* <div>Sort By:</div> */}
//   //     </div>

//   //   </MaxWidthWrapper>

//   // );
//   return (
//     <MaxWidthWrapper className="pt-6 md:px-[12.5rem] inline-block">
//       <div className="inline-block w-full">
//         <div className="flex justify-between w-full">
//           <div>
//             <Link href="/">Home</Link> /{" "}
//             <Link href="/electric-guitars">Electric Guitars</Link>
//           </div>

//           <div>Sort By:</div>
//         </div>

//         <div className="flex justify-between">
//           <h1 className="py-5 font-extrabold text-2xl">ELECTRIC GUITARS</h1>
//         </div>
//         <div className="flex gap-6">
//           <div className="lg:w-[250px]">
//             {/* Filters / Model / Serie / Collor / Price */}
//             <h1 className="uppercase font-bold pb-2">Filters</h1>
//               <ul>
//                 <li className="flex justify-between uppercase p-0.5 border-b-2">
//                   Model
//                   <LucidePlus onClick={() => setIsOptionsShown(true)}></LucidePlus>
//                   <LucideMinus onClick={() => setIsOptionsShown(false)}></LucideMinus>
//                 </li>
//                 {
//                   isOptionsShown && ( <div>Get Models From DB</div>)
//                 }

//                 <li className="uppercase p-0.5 border-b-2">Series</li>
//                 <li className="uppercase p-0.5 border-b-2"> Color</li>
//                 <li className="uppercase p-0.5 border-b-2">Price</li>
//               </ul>
//           </div>
//           <div className="flex justify-center">
//             <ProductsGrid products={all_products} />
//           </div>
//         </div>
//       </div>
//     </MaxWidthWrapper>
//   );
// }
