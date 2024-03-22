import { ArrowLeft, ArrowRight } from 'lucide-react';
import { HandleClick } from './ImageSlider';

type Slider = {
  children: React.ReactNode;
  handleClick: HandleClick;
};

const Slider = ({ handleClick, children }: Slider) => {
  return (
    <div className="w-full h-screen flex relative overflow-hidden">
      <span
        onClick={() => handleClick('prev')}
        className="z-10 opacity-[.9] grid place-items-center absolute inset-y-1/2 left-5 cursor-pointer w-12 h-12 bg-white shadow-md rounded-full"
      >
        <ArrowLeft />
      </span>
      {children}
      <span
        onClick={() => handleClick('next')}
        className="z-10 opacity-[.9] grid place-items-center absolute inset-y-1/2 right-5 cursor-pointer w-12 h-12 bg-white shadow-md rounded-full"
      >
        <ArrowRight />
      </span>
    </div>
  );
};

export default Slider;
