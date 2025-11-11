import Feature from "@/components/Feature";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import { User, Globe, Lock } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
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
          <Link href="/chat">
            <button
              className="text-[#0A0A0A] text-base md:text-lg font-semibold rounded-full bg-gradient-to-r from-white to-[#00A19C] 
            py-3 px-8 md:py-3 md:px-10 cursor-pointer hover:-translate-y-1 transition-all ease-in-out duration-500
            active:scale-95 touch-manipulation"
            >
              Start Ranting 😁
            </button>
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center w-full px-4 md:px-6 lg:px-8">
        <div
          className="relative bg-gradient-to-tl from-[#FFF] to-[#00A19C]
            h-[40rem] w-full md:w-[85%] lg:w-[70%]
            rounded-xl md:rounded-2xl flex items-center justify-center overflow-hidden"
        >
          <img
            src="/assets/chat-mockup.png"
            alt="Anonymous chat mockup"
            className="max-h-[90%] w-auto object-contain rounded-xl shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
          />
        </div>
      </div>

      <div className="flex flex-col items-center pt-24 md:pt-30 lg:pb-8 px-4 md:px-8">
        <div className="max-w-4xl md:pb-4 text-center">
          <p className="text-2xl md:text-3xl font-bold pb-2 leading-tight">
            Features To Rant Freely 🗣️🔥
          </p>
          <p className="text-gray-400 text-sm md:text-base lg:text-lg">
            A safe and anonymous space to share your thoughts with the world.
          </p>
        </div>

        <div className="max-w-5xl pt-8 grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      <div className="flex flex-col items-center pt-20 px-4 md:px-8">
        <div className="max-w-4xl md:pb-4 text-center">
          <p className="text-2xl md:text-3xl font-bold pb-2 leading-tight">
            The After-Rant Glow ✨
          </p>
          <p className="text-gray-400 text-sm md:text-base lg:text-lg">
            Here's how AngerRoom is helping people cool down.
          </p>
        </div>

        <div className="max-w-5xl pt-8 pb-18 grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Testimonial
            name="Aarav R."
            content="Whenever college stress builds up, I hop on AngerRoom. Ten minutes of ranting here feels better than an hour of complaining to friends."
            imagePath="/assets/pfp1.webp"
          />
          <Testimonial
            name="Zoya K."
            content="Honestly, I didn't expect typing out my anger would feel so freeing. It's like yelling into the void, but in a good way. I actually laughed at the end!"
            imagePath="/assets/pfp2.webp"
          />
          <Testimonial
            name="Aditya M."
            content="I love how private it feels. I can rage about work, exams or random stuff and then move on with a clear head. Highly recommend!"
            imagePath="/assets/pfp3.webp"
          />
        </div>
      </div>

      <div className="flex justify-center md:pt-4 pb-16 md:pb-20 lg:pb-20 px-4 md:px-8">
        <div className="max-w-5xl lg:w-full rounded-xl py-10 flex flex-col gap-8 md:gap-14 items-center bg-gradient-to-tl from-[#FFF] to-[#00A19C]">
          <div className="flex flex-col gap-4 md:gap-6 text-center text-[#0A0A0A]">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Ready to Rant?
            </h2>
            <p className="md:text-xl">
              Join hundreds of users connecting every day. <br />
              Create your guest account or sign up now and experience seamless
              communication.
            </p>
          </div>
          <Link href={"/chat"}>
            <button
              className="text-[#0A0A0A] text-base md:text-lg font-semibold rounded-full border-2 border-gray-800 bg-gradient-to-r from-white to-[#00A19C] 
            py-3 px-8 md:py-3 md:px-10 cursor-pointer hover:-translate-y-1 transition-all ease-in-out duration-500
            active:scale-95 touch-manipulation"
            >
              Start Ranting 😁
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
