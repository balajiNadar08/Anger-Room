import { Github, Instagram, MoveLeft } from "lucide-react"; 
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col mt-[0.5rem] gap-[1rem] px-4 py-20 items-center">
      {/* <div className="text-2xl font-bold self-start">
        <h1>About DEVELOPER</h1>
      </div> */}

      <div>
        <div className="">
          <img
            className="rounded h-100 mx-auto mb-8"
            src="/assets/dev-img.webp"
            alt="image of developer in ghibli style"
          />
        </div>
        <div className="text-xl px-4 flex flex-col gap-4 text-gray-300 text-center">
          <p>
            Hi, I'm <span className="font-bold text-cyan-300">Balaji</span>, the
            developer of{" "}
            <span className="font-bold text-cyan-300">AngerRoom</span>. I'm a
            full-stack developer passionate about creating beautiful, functional
            and user-friendly applications that I intend to use and share with
            the world.
          </p>
          <p>
            {" "}
            <span className="font-bold text-cyan-300">AngerRoom</span> is a
            personal project designed and developed to bring a positive change
            in users real-life by removing the negative and toxicity all while
            being anonymous in AngerRoom. I believe in the power of simple and
            effective communication tools and I hope you enjoy using this
            platform as much as I enjoyed building it.
          </p>
        </div>
      </div>

      <div className="flex gap-4 underline mb-6">
        <p className="text-xl">MY SOCIALS: </p>
        <div className="flex gap-2">
          <a href="https://github.com/balajiNadar08" target="_blank">
            <Github size={26} />
          </a>
          <a href="https://www.instagram.com/balaji_nadar_08/" target="_blank">
            <Instagram size={26} />
          </a>
        </div>
      </div>

      <div>
        <Link
          href={"/test-firebase"}
          className=" flex items-center text-lg font-bold px-6 py-2 rounded-3xl bg-gradient-to-r from-white to-[#00A19C] text-black cursor-pointer"
        >
          <MoveLeft className="inline mr-2" /> Back to Chat
        </Link>
      </div>
    </div>
  );
};

export default page;
