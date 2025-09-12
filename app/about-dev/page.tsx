import { Github, Instagram } from "lucide-react";

const page = () => {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col mt-[2rem] gap-[1rem] items-center px-4 py-20">
      <div>
        <h1>About DEVELOPER</h1>
      </div>

      <div>
        <div>
          <img
            src="/assets/dev-img.webp"
            alt="image of developer in ghibli style"
          />
        </div>

        <p>
          Hi, I'm Balaji, the developer of AngerRoom. I'm also a full-stack
          developer passionate about creating beautiful, functional and
          user-friendly applications that I intend to use and share with the
          world. AngerRoom is a personal project designed and developed to bring
          a positive change in users real-life by removing the negative and
          toxicity in AngerRoom. I believe in the power of simple and effective
          communication tools and I hope you enjoy using this platform as much
          as I enjoyed building it.
        </p>
      </div>

      <div className="">
        <p className="">DEVELOPER'S SOCIAL</p>
        <div className="">
          <a href="https://github.com/balajiNadar08" target="_blank">
            <Github size={26} />
          </a>
          <a href="https://www.instagram.com/balaji_nadar_08/" target="_blank">
            <Instagram size={26} />
          </a>
        </div>
      </div>

      <div>
        <button>Back to Chat</button>
      </div>
    </div>
  );
};

export default page;
