import { CategoriesData } from '@/utils/data';
import CategoryItem from './CategoryItem';

const Categories = () => {
  return (
    <div className="p-5 w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2">
      {CategoriesData.map((category) => (
        <CategoryItem
          key={category.id}
          image={category.image}
          title={category.title}
        />
      ))}
    </div>
  );
};

export default Categories;
