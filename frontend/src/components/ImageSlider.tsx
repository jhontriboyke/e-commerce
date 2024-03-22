import { useState } from 'react';
import Slider from './Slider';

type ImageSlider = {
  children: React.ReactNode;
  length: number;
};

export type HandleClick = (type: 'prev' | 'next') => void;

const ImageSlider = ({ children, length }: ImageSlider) => {
  const [imageLength] = useState(length);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleClick = (type: 'prev' | 'next') => {
    if (type === 'prev') {
      currentIndex <= 0
        ? setCurrentIndex(imageLength - 1)
        : setCurrentIndex((prev) => prev - 1);
    } else if (type === 'next') {
      currentIndex >= imageLength - 1
        ? setCurrentIndex(0)
        : setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <Slider handleClick={handleClick}>
      <div
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
        className="w-full h-full flex flex-row transition-all duration-700 ease-in-out"
      >
        {children}
      </div>
    </Slider>
  );
};

type ImageSliderWrapper = {
  image: string;
  info: {
    title: string;
    desc: string;
  };
  index: number;
};

const Wrapper = ({ image, info, index }: ImageSliderWrapper) => {
  const bg =
    index == 0
      ? 'bg-purple-100/50'
      : index === 1
      ? 'bg-pink-100/50'
      : 'bg-amber-100/50';
  return (
    <section
      className={`shrink-0 relative overflow-y-hidden lg:h-full grid grid-cols-1 lg:grid-cols-2 w-full ${bg} `}
    >
      <div className="absolute  lg:z-0 lg:static h-full grid place-items-center">
        <img
          className="block h-full object-cover w-full"
          src={image}
          alt={info.title}
        />
      </div>
      <div className="relative z-10 lg:static h-full flex justify-center items-end lg:items-center">
        <section className="bg-slate-100/80 text-slate-800 p-2 lg:bg-transparent lg:p-0 text-sm flex flex-col gap-2">
          <h2 className="text-6xl lg:text-5xl font-semibold">{info.title}</h2>
          <p className="md:text-base lg:text-lg">{info.desc}</p>
          <button className="cursor-pointer py-2 px-4 bg-slate-600 text-white font-bold rounded self-start">
            SHOP NOW
          </button>
        </section>
      </div>
    </section>
  );
};

ImageSlider.Wrapper = Wrapper;

export default ImageSlider;
