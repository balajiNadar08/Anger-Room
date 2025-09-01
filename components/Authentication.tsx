import Link from "next/link";
import React from "react";

const Authentication = () => {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col mt-[2rem] gap-[1rem] items-center px-4 py-20">
      <h1 className="text-3xl font-bold">AngerRoom</h1>

      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl flex flex-col p-8 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
        <form action="" className="flex flex-col gap-6">
          <div>
            <label htmlFor="email" className="text-sm text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="block w-full rounded text-md px-3 py-2 bg-white/5 border border-white/10 outline-none focus:border-[#00A19C]"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="block w-full rounded text-md px-3 py-2 bg-white/5 border border-white/10 outline-none focus:border-[#00A19C]"
            />
          </div>
          <button
            type="submit"
            className="text-md font-bold py-2 rounded-lg bg-gradient-to-r from-white to-[#00A19C] text-black cursor-pointer"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-400 py-5">
          Don't have an account?{" "}
          <span>
            <Link href={""} className="text-[#00A19C]">
              Sign up
            </Link>
          </span>
        </p>

        <div className="relative py-2 text-center">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-white/20"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-[#111111] rounded-full text-gray-400">
              OR
            </span>
          </div>
        </div>

        <button className="font-bold py-2 mt-4 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 cursor-pointer">
          Continue as Guest
        </button>
      </div>
    </div>
  );
};

export default Authentication;
