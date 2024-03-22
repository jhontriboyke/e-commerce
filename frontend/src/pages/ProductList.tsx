import Announcement from '@/components/Announcement';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Products from '@/components/Products';

const ProductList = () => {
  return (
    <>
      <header className="sticky top-0 z-50">
        <Navbar />
        <Announcement />
      </header>
      <main className="grid gap-4 py-4">
        <section className="px-5">
          <h2 className="text-4xl font-semibold mb-2">Dresses</h2>
          <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row lg:items-center justify-between">
            <div className="flex flex-row items-center gap-4">
              <span className="text-md font-bold">Filter Products:</span>
              <div className="flex flex-row items-center gap-2">
                <select name="color" id="color" title="Select color">
                  <option selected disabled>
                    Color
                  </option>
                  <option value="white">White</option>
                  <option value="black">Black</option>
                  <option value="red">Red</option>
                  <option value="blue">Blue</option>
                  <option value="yellow">Yellow</option>
                  <option value="orange">Orange</option>
                </select>
                <select name="size" id="size" title="Select size">
                  <option selected disabled>
                    Size
                  </option>
                  <option value="xs">XS</option>
                  <option value="s">S</option>
                  <option value="m">M</option>
                  <option value="l">L</option>
                  <option value="xl">XL</option>
                </select>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <span className="text-md font-bold">Sort Products:</span>
              <div className="flex flex-row items-center gap-2">
                <select name="sort" id="sort" title="Sort product by">
                  <option value="newest" selected>
                    Newest
                  </option>
                  <option value="price-asc">Price (High to Low)</option>
                  <option value="price-desc">Price (Low to High)</option>
                </select>
              </div>
            </div>
          </div>
        </section>
        <Products />
      </main>
      <Footer />
    </>
  );
};

export default ProductList;
