import Announcement from '@/components/Announcement';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { MinusIcon, PlusIcon } from 'lucide-react';

const Cart = () => {
  return (
    <>
      <header>
        <Navbar />
        <Announcement />
      </header>
      <main className="p-5">
        <section className="flex flex-col gap-4">
          <h1 className="text-4xl text-center">YOUR BAG</h1>

          <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row items-center justify-between">
            <button className="bg-slate-200 hover:bg-slate-200/80 transition-colors duration-200 p-2 text-slate-900">
              CONTINUE SHOPPING
            </button>
            <div className="flex flex-row items-center gap-4">
              <span className="cursor-pointer underline">Shopping Bag(2)</span>
              <span className="cursor-pointer underline">Your Wishlist(1)</span>
            </div>
            <button className="hidden lg:block bg-slate-950 hover:bg-slate-800/80 transition-colors duration-200 p-2 text-slate-100">
              CHECKOUT NOW
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-6 xl:grid-cols-4 gap-x-10">
            <div className="lg:col-span-4 xl:col-span-3 flex flex-col gap-6">
              <div className="py-5 flex flex-col lg:flex-row gap-6 lg:gap-4">
                <div className="order-[-1] mx-auto lg:h-[200px] lg:w-[250px] ">
                  <img
                    className=" w-full h-full object-contain"
                    src="\photos\product-1.webp"
                    alt="product-1"
                  />
                </div>
                <div className="flex-[1] flex flex-col gap-2 lg:gap-4 items-center lg:items-start">
                  <h3>
                    <b>Product</b>: OXLORD WHITE SUMMER JACKET
                  </h3>
                  <span>
                    <b>ID</b>: 9882525125621
                  </span>
                  <span>
                    <div className="w-8 h-8 bg-slate-100 rounded-full border border-slate-400" />
                  </span>
                  <span>
                    <b>Size</b>: M
                  </span>
                </div>
                <div className="order-[-1] lg:order-[0] flex flex-col gap-4 lg:gap-6 items-center justify-center">
                  <div className="flex flex-row items-center gap-8 lg:gap-2">
                    <PlusIcon />
                    <span className="text-lg font-semibold">2</span>
                    <MinusIcon />
                  </div>
                  <span className="text-4xl">$ 30</span>
                </div>
              </div>
              <hr />
              <div className="py-5 flex flex-col lg:flex-row gap-6 lg:gap-4">
                <div className="order-[-1] mx-auto lg:h-[200px] lg:w-[250px] ">
                  <img
                    className=" w-full h-full object-contain"
                    src="\photos\product-4.webp"
                    alt="product-4"
                  />
                </div>
                <div className="flex-[1] flex flex-col gap-2 lg:gap-4 items-center lg:items-start">
                  <h3>
                    <b>Product</b>: OXLORD TEAL SUMMER TOTEE
                  </h3>
                  <span>
                    <b>ID</b>: 9882525125621
                  </span>
                  <span>
                    <div className="w-8 h-8 bg-slate-100 rounded-full border border-slate-400" />
                  </span>
                  <span>
                    <b>Size</b>: M
                  </span>
                </div>
                <div className="order-[-1] lg:order-[0] flex flex-col gap-4 lg:gap-6 items-center justify-center">
                  <div className="flex flex-row items-center gap-8 lg:gap-2">
                    <PlusIcon />
                    <span className="text-lg font-semibold">2</span>
                    <MinusIcon />
                  </div>
                  <span className="text-4xl">$ 50</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 xl:col-span-1 border border-slate-400 rounded lg:self-start sticky top-2">
              <div className="p-5 flex flex-col gap-3">
                <h2 className="text-2xl">ORDER SUMMARY</h2>
                <div className="flex flex-col gap-2">
                  <h3 className="text-md flex text-slate-600 flex-row items-center justify-between">
                    <span>Subtotal</span>
                    <span>$ 80</span>
                  </h3>
                  <h3 className="text-md flex text-slate-600 flex-row items-center justify-between">
                    <span>Estimated Shipping</span>
                    <span>$ 6.90</span>
                  </h3>
                  <h3 className="text-md flex text-slate-600 flex-row items-center justify-between">
                    <span>Shipping Discount</span>
                    <span>$ -6.90</span>
                  </h3>
                  <hr className="my-2" />
                  <h3 className="font-bold text-2xl flex flex-row items-center justify-between">
                    <span>Total</span>
                    <span>$ 80</span>
                  </h3>
                </div>
                <button className="bg-slate-950 hover:bg-slate-800/80 transition-colors duration-200 p-2 text-slate-100">
                  CHECKOUT NOW
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Cart;
