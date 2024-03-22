import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full p-5">
      <div className="grid lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 xl:gap-12">
        <section className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">KLOTHING</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
            cupiditate dicta doloremque unde perspiciatis ratione quos fugit in
            nobis asperiores quasi commodi maxime provident accusamus fugiat
            nostrum, consequuntur nemo molestias?
          </p>
          <div className="flex flex-row gap-2 items-center text-xl text-white">
            <span className="w-8 h-8 rounded-full grid place-items-center bg-[#1877F2] cursor-pointer">
              <i className="fa-brands fa-facebook-f"></i>
            </span>
            <span className="w-8 h-8 rounded-full grid place-items-center bg-[#e13e87] cursor-pointer">
              <i className="fa-brands fa-instagram"></i>
            </span>
            <span className="w-8 h-8 rounded-full grid place-items-center bg-[#111] cursor-pointer">
              <i className="fa-brands fa-x-twitter"></i>
            </span>
            <span className="w-8 h-8 rounded-full grid place-items-center bg-[#BD081C] cursor-pointer">
              <i className="fa-brands fa-pinterest-p"></i>
            </span>
          </div>
        </section>
        <section className="flex flex-col gap-6">
          <h3 className="text-lg font-semibold">Useful Links</h3>
          <ul className="grid grid-cols-2 gap-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>

            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <a href="#">Woman Fashion</a>
            </li>
            <li>
              <a href="#">Accessories</a>
            </li>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Order Tracking</a>
            </li>
            <li>
              <a href="#">Wishlist</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Made by Jhontri Boyke</a>
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-6">
          <h3 className="text-lg font-semibold">Contact</h3>
          <ul className="grid grid-cols-1 gap-2">
            <li className="flex flex-row items-center gap-2">
              <i className="fa-solid fa-location-dot text-lg"></i>
              <span>73 Patih Rumbih, Kuala Kapuas, Indonesia 73514</span>
            </li>
            <li className="flex flex-row items-center gap-2">
              <i className="fa-solid fa-phone text-lg"></i>
              <span>+62 1234 5678 910</span>
            </li>
            <li className="flex flex-row items-center gap-2">
              <i className="fa-solid fa-envelope text-lg"></i>
              <span>klothing.cs@example.com</span>
            </li>
            <li>
              <img
                className="w-1/2"
                src="\photos\payment.webp"
                alt="payments image"
              />
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
