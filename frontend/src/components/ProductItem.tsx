import { Heart, SearchIcon, ShoppingCartIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

type ProductItem = {
  image: string;
};

const ProductItem = ({ image }: ProductItem) => {
  return (
    <Link to="/products/123">
      <div className="h-[300px] border rounded relative group bg-slate-200/40">
        <div className="h-full mx-auto relative z-[1]">
          <img
            className="h-full  object-cover block mx-auto"
            src={image}
            alt={'Product'}
          />
          <div className="w-64 h-64 bg-white rounded-full absolute behind z-[-1]" />
        </div>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/30 flex items-center justify-center z-10">
          <div className="flex flex-row gap-8">
            <span className="p-2 rounded-full bg-black/40 flex items-center justify-center hover:scale-125 transition-all duration-200 cursor-pointer">
              <ShoppingCartIcon className="stroke-white" />
            </span>
            <span className="p-2 rounded-full bg-black/40 flex items-center justify-center hover:scale-125 transition-all duration-200 cursor-pointer">
              <SearchIcon className="stroke-white" />
            </span>
            <span className="p-2 rounded-full bg-black/40 flex items-center justify-center hover:scale-125 transition-all duration-200 cursor-pointer">
              <Heart className="stroke-white" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
