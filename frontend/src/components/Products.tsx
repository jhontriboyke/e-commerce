import { ProductsData } from '@/utils/data';
import ProductItem from './ProductItem';

const Products = () => {
  return (
    <div className="px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-3">
      {ProductsData.map((product) => (
        <ProductItem key={product.id} image={product.image} />
      ))}
    </div>
  );
};

export default Products;
