import Announcement from '@/components/Announcement';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Newsletter from '@/components/Newsletter';
import { MinusIcon, PlusIcon } from 'lucide-react';

const Product = () => {
  return (
    <>
      <header>
        <Navbar />
        <Announcement />
      </header>
      <main>
        <div className="my-8  grid grid-cols-1 lg:grid-cols-3 md:gap-8 xl:gap-0 max-w-[80%] mx-auto">
          <section className="w-full h-full">
            <img
              className="block mx-auto max-h-[450px]"
              src="\photos\jacket-1.jpg"
              alt="jacket 1"
            />
          </section>
          <section className=" col-span-2 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-5xl font-light">Title</h1>
              <p className="text-md tracking-wide">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit minus aliquid aliquam odit in ut, excepturi ad omnis,
                saepe sapiente assumenda sit minima, a voluptas eaque doloribus
                beatae. Repellat, perferendis!
              </p>
            </div>
            <span className="text-3xl font-light">$ 20</span>
            <div className="flex flex-row items-center gap-6">
              <div className="flex flex-row items-center gap-2">
                <label htmlFor="color">Color</label>
                <select name="color" id="color">
                  <option value="black">Black</option>
                  <option value="silver">Silver</option>
                  <option value="brown">Brown</option>
                </select>
              </div>
              <div className="flex flex-row items-center gap-2">
                <label htmlFor="size">Size</label>
                <select name="size" id="size">
                  <option value="s">S</option>
                  <option value="m">M</option>
                  <option value="l">L</option>
                  <option value="xl">XL</option>
                </select>
              </div>
            </div>
            <div className="flex flex-row gap-6">
              <div className="flex flex-row items-center gap-2">
                <MinusIcon />
                <span className="w-8 h-8 grid place-items-center border border-teal-400 rounded-lg">
                  1
                </span>
                <PlusIcon />
              </div>
              <button className="p-2 bg-teal-400 hover:bg-teal-300/80 transition-colors duration-200 text-white font-bold rounded-lg">
                ADD TO CART
              </button>
            </div>
          </section>
        </div>
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default Product;
