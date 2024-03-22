import { SendIcon } from 'lucide-react';

const Newsletter = () => {
  return (
    <div className="w-full h-[60vh] bg-teal-100 grid place-items-center">
      <section className=" flex flex-col gap-2">
        <h2 className="text-center text-5xl font-bold">Newsletter</h2>
        <p className="text-lg traacking-wide">
          Get timely updates from your favorite products
        </p>
        <form>
          <div className="w-full h-[40px] bg-white flex flex-row items-center gap-2">
            <input
              className="pl-2 w-full outline-none "
              type="email"
              id="newsletter-email"
              name="newsletter-email"
              placeholder="Your email"
            />
            <button
              className="bg-slate-200 p-2 self-stretch"
              type="submit"
              title="send button"
            >
              <SendIcon className="stroke-slate-800" />
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Newsletter;
