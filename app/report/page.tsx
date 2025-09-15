import Link from "next/link";

const page = () => {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col mt-[2rem] gap-[2rem] px-4 py-20 items-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Share Your Feedback</h1>
        <p className="text-gray-400">
          Help us improve by reporting a bug or suggesting a new feature.
        </p>
      </div>

      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl flex flex-col p-8 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
        <form className="flex flex-col gap-6">
          <div className="flex-1">
            <label
              htmlFor="feedback"
              className="text-sm text-gray-300 block mb-2"
            >
              Type of Feedback
            </label>
            <select
              name="feedback"
              id="feedback"
              value={""}
              // onChange={}
              className="w-full block rounded text-md px-3 py-2 bg-white/5 border border-white/10 outline-none focus:border-[#00A19C] transition-colors h-[42px] text-white"
            >
              <option value="" disabled className="text-gray-500">
                Select...
              </option>
              <option value="bug_report" className="text-gray-900">
                Bug Report
              </option>
              <option
                value="suggestion_or_improvement"
                className="text-gray-900"
              >
                Suggestion or Improvement
              </option>
              <option value="other" className="text-gray-900">
                Other
              </option>
            </select>
          </div>
          <div>
            <label
              htmlFor="subject"
              className="text-sm text-gray-300 block mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              placeholder="e.g., Dark mode issue"
              className="block w-full rounded text-md px-3 py-2 bg-white/5 border border-white/10 outline-none focus:border-[#00A19C] transition-colors text-white"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="text-sm text-gray-300 block mb-2"
            >
              Subject
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Please provide as much as detail as possible..."
              className="block w-full rounded text-md px-3 py-2 bg-white/5 border border-white/10 outline-none focus:border-[#00A19C] transition-colors text-white"
            ></textarea>
          </div>
          <div>
            <label htmlFor="email" className="text-sm text-gray-300 block mb-2">
              Your email (optional)
            </label>
            <input
              type="email"
              placeholder="So we can follow up with you"
              className="block w-full rounded text-md px-3 py-2 bg-white/5 border border-white/10 outline-none focus:border-[#00A19C] transition-colors text-white"
            />
          </div>

          <button
            type="submit"
            className="text-md font-bold py-2 rounded-lg bg-gradient-to-r from-white to-[#00A19C] text-black cursor-pointer disabled:opacity-50 transition-colors"
          >
            Submit Feedback
          </button>
        </form>
      </div>
      <div>
        <Link
          href={"/test-firebase"}
          className="text-lg font-bold px-6 py-2 rounded-3xl bg-gradient-to-r from-white to-[#00A19C] text-black cursor-pointer"
        >
          Back to Chat
        </Link>
      </div>
    </div>
  );
};

export default page;
