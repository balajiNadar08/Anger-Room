import { Github, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex flex-col md:items-center px-8 pb-4">
      <div className="max-w-5xl md:w-full pt-6 border-t-2 border-gray-600">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <p className="text-3xl font-bold">AngerRoom</p>

          <div className="pb-10 lg:flex lg:gap-8">
            <p className="pb-2 text-lg lg:text-xl">DEVELOPER'S SOCIAL</p>
            <div className="flex gap-2 lg:gap-4">
              <a href="https://github.com/balajiNadar08" target="_blank">
                <Github size={26} />
              </a>
              <a
                href="https://www.instagram.com/balaji_nadar_08/"
                target="_blank"
              >
                <Instagram size={26} />
              </a>
            </div>
          </div>
        </div>

        <p className="text-lg text-center text-gray-400">
          © 2025 AngerRoom. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
