type Props = {
  title: string;
}

const ProductSlider = ( props: Props ) => {
  return (
    <div className='w-full mt-[3rem] flex-grow'>
      <h1 className='uppercase text-4xl'>{props.title}</h1>
      <div>
      </div>
    </div>
  );
}

export default ProductSlider;