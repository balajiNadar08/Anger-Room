"use client";
import Link from "next/link";
import { useState } from "react";
import { MoveLeft } from "lucide-react";

const page = () => {
  const [feedbackType, setFeedbackType] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col mt-[2rem] gap-[2rem] px-4 py-20 items-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Share Your Feedback</h1>
        <p className="text-gray-400">
          Help us improve by reporting a bug or suggesting a new feature.
        </p>
      </div>

      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl flex flex-col p-8 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
        <form
          action="https://formspree.io/f/mdkyowby"
          method="POST"
          className="flex flex-col gap-6"
        >
          <div className="flex-1">
            <label
              htmlFor="feedback"
              className="text-sm text-gray-300 block mb-2"
            >
              Type of Resport
            </label>
            <select
              name="feedbackType"
              id="feedback"
              value={feedbackType}
              required
              onChange={(e) => setFeedbackType(e.target.value)}
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
              name="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="e.g., Dark mode issue"
              className="block w-full rounded text-md px-3 py-2 bg-white/5 border border-white/10 outline-none focus:border-[#00A19C] transition-colors text-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="text-sm text-gray-300 block mb-2"
            >
              Description
            </label>
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Please provide as much detail as possible..."
              className="block w-full rounded text-md px-3 py-2 bg-white/5 border border-white/10 outline-none focus:border-[#00A19C] transition-colors text-white"
              required
            ></textarea>
          </div>

          <div>
            <label htmlFor="email" className="text-sm text-gray-300 block mb-2">
              Your email (optional)
            </label>
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="So we can follow up with you"
              className="block w-full rounded text-md px-3 py-2 bg-white/5 border border-white/10 outline-none focus:border-[#00A19C] transition-colors text-white"
            />
          </div>

          <button
            type="submit"
            className="text-md font-bold py-2 rounded-lg bg-gradient-to-r from-white to-[#00A19C] text-black cursor-pointer disabled:opacity-50 transition-colors"
          >
            Submit Report
          </button>
        </form>
      </div>
      <div>
        <Link
          href={"/chat"}
          className=" flex items-center text-lg font-bold px-6 py-2 rounded-3xl bg-gradient-to-r from-white to-[#00A19C] text-black cursor-pointer"
        >
          <MoveLeft className="inline mr-2" /> Back to Chat
        </Link>
      </div>
    </div>
  );
};

export default page;
