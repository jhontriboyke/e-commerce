import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="h-screen w-full overflow-hidden relative">
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover brightness-[.6] opacity-80"
          src="\photos\bg-girl-1.jpg"
          alt="bg girl 1"
        />
      </div>
      <div className="absolute behind bg-white min-w-[400px] w-[600px] p-8 lg:py-12 rounded flex flex-col gap-6">
        <Link className="underline" to="/">
          Home
        </Link>
        <h1 className="text-xl">CREATE AN ACCOUNT</h1>
        <form className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            className="p-2 border border-slate-400 rounded outline-none"
            type="text"
            placeholder="First Name"
          />
          <input
            className="p-2 border border-slate-400 rounded outline-none"
            type="text"
            placeholder="Last Name"
          />
          <input
            className="p-2 border border-slate-400 rounded outline-none"
            type="text"
            placeholder="Username"
          />
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
          <input
            className="p-2 border border-slate-400 rounded outline-none"
            type="password"
            placeholder="Confirm Password"
          />
          <span className="lg:col-span-2">
            By creating an account I consent to the processing of my personal
            data in accordance with the <b>PRIVACLY POLICY</b>
          </span>
          <button
            className="mt-4 bg-slate-500 hover:bg-slate-600/90 transition-colors duration-200 active:bg-slate-400/80 p-3 lg:col-span-2 text-sm font-bold text-white"
            type="submit"
          >
            CREATE
          </button>
        </form>
        <Link className="underline" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
