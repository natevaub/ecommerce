import MaxWidthWrapper from "./components/MaxWidthWrapper"
import HeroCarousel from "./components/HeroCarousel";
import ProductSlider from "./components/ProductSlider";
export default function Home() {
  console.log('Hello');
  return (
    <div>
      <section>
          <HeroCarousel />
      </section>
      <section  className='bg-red-400'>
        <MaxWidthWrapper className='flex flex-col h-[calc(100vh-10rem)]'>
          <ProductSlider title="Featured Products" />
        </MaxWidthWrapper>
      </section>
      <section  className='bg-blue-400'>
        <MaxWidthWrapper className='flex flex-col h-[calc(100vh-10rem)]'>
          <ProductSlider title="Best Sellers" />
        </MaxWidthWrapper>
      </section>
    </div>
  )
}
