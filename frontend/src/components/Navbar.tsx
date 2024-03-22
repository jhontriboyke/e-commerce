import { MenuIcon, SearchIcon, ShoppingCartIcon } from 'lucide-react';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className=" bg-white h-[60px] ">
      <div className="py-3 px-4 grid grid-cols-2 md:grid-cols-3 items-center">
        <div className="flex flex-row items-center gap-2 ">
          <span className="cursor-pointer text-sm">EN</span>
          <div className="border-[0.5px] border-slate-400 flex flex-row items-center p-1">
            <input
              className="outline-none w-full"
              type="text"
              title="Search"
              placeholder=""
            />
            <SearchIcon />
          </div>
        </div>
        <div className="flex flex-row items-center gap-4 justify-end md:block">
          <Link
            to={'/'}
            className="block text-xl md:text-2xl md:text-center text-end font-bold"
          >
            KLOTHING
          </Link>
          <div className="cursor-pointer md:hidden p-1 bg-slate-200 rounded ">
            <MenuIcon />
          </div>
        </div>
        <div className="hidden md:flex flex-row justify-end gap-6 items-center">
          <Link to="/register">REGISTER</Link>
          <Link to="/login">LOGIN</Link>
          <Link to="/cart">
            <Badge badgeContent={999} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
