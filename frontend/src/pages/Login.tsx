import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="h-screen w-full overflow-hidden relative">
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover brightness-[.6] opacity-80"
          src="\photos\bg-girl-2.jpg"
          alt="bg girl 1"
        />
      </div>
      <div className="absolute behind bg-white min-w-[400px] w-[400px] p-8 lg:py-12 rounded flex flex-col gap-6">
        <Link className="underline" to="/">
          Home
        </Link>
        <h1 className="text-xl">SIGN IN</h1>
        <form className="grid grid-cols-1 gap-4">
          <input
            className="p-2 border border-slate-400 rounded outline-none"
            type="email"
            placeholder="Email"
          />
          <input
            className="p-2 border border-slate-400 rounded outline-none"
            type="password"
            placeholder="Password"
          />

          <button
            className="mt-4 bg-teal-500 hover:bg-teal-600/90 transition-colors duration-200 active:bg-teal-400/80 p-3  text-sm font-bold text-white"
            type="submit"
          >
            LOGIN
          </button>
        </form>
        <div className="flex flex-col gap-2">
          <a className="underline" href="">
            Forgot Password ?
          </a>
          <Link className="underline" to={'/register'}>
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
