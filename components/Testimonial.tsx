
interface FeedbackProps {
  name: string;
  content: string;
  imagePath: string;
}

const Feedback = ({name, content, imagePath}: FeedbackProps) => {
  return (
    <div className="bg-white/5 backdrop-blur-md border-2 border-white/10 rounded-2xl flex flex-col gap-6 px-6 py-8">
      <p className="text-gray-400">{content}</p>

      <div className="flex items-center gap-3">
        <img src={imagePath} alt={`${name}'s profile picture.`} 
          className="rounded-full w-12 h-12"
        />
        <p className="font-semibold">{name}</p>
      </div>
    </div>
  );
};

export default Feedback;
