import { ReactNode } from "react";

interface FeatureProps {
  children: ReactNode;
  title: string;
  content: string;
}

const Feature = ({ children, title, content }: FeatureProps) => {
  return (
    <div className="bg-white/5 backdrop-blur-md border-2 border-white/10 rounded-2xl flex flex-col gap-6 px-6 py-8">
      <div className="bg-white/10 w-fit p-3 rounded-full">{children}</div>

      <div className="flex flex-col gap-3">
        <p className="font-bold text-xl text-white">{title}</p>
        <p className="text-gray-400">{content}</p>
      </div>
    </div>
  );
};

export default Feature;
