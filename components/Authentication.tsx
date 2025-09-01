import Link from "next/link";
import React from "react";

const Authentication = () => {
  return (
    <div className="w-full max-w-md mx-auto flex flex-col mt-[2rem] gap-[4rem] items-center">
      <h1 className="text-3xl font-bold">AngerRoom</h1>

      <div className="flex flex-col border-1 p-8 rounded-xl">
        <form action="" className="flex flex-col gap-6">
          <div>
            <label htmlFor="email" className="text-sm text-gray-300">Email</label>
            <input type="email" id="email" className="border-1 block w-full rounded text-md px-3 py-2" />
          </div>
          <div>
            <label htmlFor="password" className="text-sm text-gray-300">Password</label>
            <input type="password" id="password" className="border-1 block w-full rounded text-md px-3 py-2" />
          </div>
          <button type="submit">Login</button>
        </form>

        <p>
          Don't have an account?{" "}
          <span>
            <Link href={""}>Sign up</Link>
          </span>
        </p>

        <div>
          <p className="text-center">OR</p>
        </div>

        <button>Continue as Guest</button>
      </div>
    </div>
  );
};

export default Authentication;
