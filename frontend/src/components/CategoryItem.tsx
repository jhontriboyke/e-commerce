type CategoryItem = {
  image: string;
  title: string;
};

const CategoryItem = ({ image, title }: CategoryItem) => {
  return (
    <div className="flex flex-col h-full relative group">
      <div className="max-h-[400px] w-full overflow-hidden">
        <img
          className="w-full h-full object-cover md:group-hover:scale-[1.15] transition-all duration-200"
          src={image}
          alt={title}
        />
      </div>
      <div className="absolute bottom-0 bg-black/25 w-full p-3 text-white md:static md:bg-transparent md:text-inherit md:p-0">
        <h3 className="uppercase font-bold text-2xl lg:text-3xl mb-2 md:mb-0">
          {title}
        </h3>
        <span className="uppercase text-sm tracking-tight underline font-semibold cursor-pointer hover:text-slate-500">
          SHOP NOW
        </span>
      </div>
    </div>
  );
};

export default CategoryItem;
