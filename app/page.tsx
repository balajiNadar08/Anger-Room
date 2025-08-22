import Navbar from "@/components/Navbar";
import Feature from "@/components/Feature";
import { User, Globe, Lock } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />

      <div className="flex flex-col items-center justify-center pt-[10rem] md:pt-[12rem] pb-26 gap-8 md:gap-12 lg:gap-10 px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-2 md:gap-3 text-2xl md:text-4xl lg:text-5xl font-extrabold text-center max-w-4xl">
          <p className="leading-tight">Welcome to AngerRoom🔥</p>
          <p className="bg-gradient-to-r to-[#00A19C] py-1 leading-tight">
            Rant Freely, Stay Anonymous👀
          </p>
        </div>

        <div className="text-center text-gray-400 pb-8 md:pb-10 lg:pb-14 max-w-2xl px-4">
          <p className="text-sm md:text-base lg:text-lg">
            A safe space to express your thoughts, frustrations and feelings.
          </p>
          <p className="text-sm md:text-base lg:text-lg">
            Secure, fast and completely free.
          </p>
        </div>

        <div>
          <button
            className="text-[#0A0A0A] text-base md:text-lg font-semibold rounded-full bg-gradient-to-r from-white to-[#00A19C] 
            py-3 px-8 md:py-3 md:px-10 cursor-pointer hover:-translate-y-1 transition-all ease-in-out duration-500
            active:scale-95 touch-manipulation"
          >
            Start Ranting 😁
          </button>
        </div>
      </div>


      <div className="flex items-center justify-center w-full px-4 md:px-6 lg:px-8">
        <div className="bg-gradient-to-tl from-[#FFF] to-[#00A19C] h-64 md:h-80 lg:h-[40rem] 
        w-full md:w-[85%] lg:w-[70%] rounded-xl md:rounded-2xl"></div>
      </div>


      <div className="flex flex-col items-center pt-24 md:pt-30 pb-16 md:pb-20 lg:pb-50 px-4 md:px-8 lg:px-8">
        <div className="max-w-4xl md:pb-4 text-center">
          <p className="text-2xl md:text-3xl font-bold pb-2 leading-tight">
            Features That Let You Rant Freely
          </p>
          <p className="text-gray-400 text-sm md:text-base lg:text-lg">
            A safe and anonymous space to share your thoughts with the world.
          </p>
        </div>

        <div className="max-w-5xl pt-8 mb-30 grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature
            title="Login" 
            content="Join instantly as a guest (anonymous) or sign in with google account for a more personal experience."
          >
            <User />
          </Feature>
          <Feature
            title="Global Chatroom" 
            content="Shared space where everyone's messages appear in real time, creating a sense of community ranting!"
          >
            <Globe />
          </Feature>
          <Feature
            title="Safe Space" 
            content="A platform designed for people to freely share feelings, thoughts and frustrations without fear of judgment."
          >
            <Lock />
          </Feature>
        </div>
      </div>

      
    </div>
  );
}