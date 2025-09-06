"use client";
import { useState } from "react";

const Page = () => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  return (
    <div className="max-w-5xl flex mx-auto items-center p-4 relative overflow-hidden">
      <div className="hidden absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08)_0%,transparent_30%)]"></div>
          <div className="absolute w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(0,161,156,0.2)_0%,transparent_40%)] blur-2xl"></div>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto mt-[6rem] flex flex-col gap-6 items-center relative z-10">
        <div>
          <h1 className="text-3xl font-bold text-center text-white">
            Set Up Your Profile
          </h1>
          <p className="text-center text-gray-400 mt-2">
            Complete your profile to get started
          </p>
        </div>

        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl flex flex-col p-8 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl">
          <form className="flex flex-col gap-6">
            <div>
              <label
                htmlFor="username"
                className="text-sm text-gray-300 block mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="block w-full rounded text-md px-3 py-2 bg-white/5 border border-white/10 outline-none focus:border-[#00A19C] transition-colors text-white"
                placeholder="Enter your username"
              />
            </div>

            <div className="flex flex-row gap-4">
              <div className="flex-1">
                <label
                  htmlFor="age"
                  className="text-sm text-gray-300 block mb-2"
                >
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                  className="block w-full rounded text-md px-3 py-2 bg-white/5 border border-white/10 outline-none focus:border-[#00A19C] transition-colors text-white"
                  placeholder="Your age"
                />
              </div>

              <div className="flex-1">
                <label
                  htmlFor="gender"
                  className="text-sm text-gray-300 block mb-2"
                >
                  Gender
                </label>
                <select
                  name="gender"
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full block rounded text-md px-3 py-2 bg-white/5 border border-white/10 outline-none focus:border-[#00A19C] transition-colors h-[42px] text-white"
                >
                  <option value="" disabled className="text-gray-500">
                    Select...
                  </option>
                  <option value="male" className="text-gray-900">
                    Male
                  </option>
                  <option value="female" className="text-gray-900">
                    Female
                  </option>
                  <option value="prefer_not_to_say" className="text-gray-900">
                    Prefer not to say
                  </option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="text-md font-bold py-2 rounded-lg bg-gradient-to-r from-white to-[#00A19C] text-black cursor-pointer disabled:opacity-50 transition-colors"
            >
              Save Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
