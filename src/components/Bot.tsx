"use client";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import ReactMarkdown from "react-markdown";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function Bot() {
  const [query, setQuery] = useState(""); // For user input
  const [response, setResponse] = useState(""); // For API response
  const [loading, setLoading] = useState(false); // Loading state
  const [showMsg, setShowMsg] = useState(false); // Show message state
  const query1 = "what are the strength of sudeep?";
  const query2 = "what are the weakness of sudeep?";

  const handleQuerySubmit = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setShowMsg(true);

    try {
      const res = await fetch("https://portfolio-llm.onrender.com/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch response from the API");
      }

      const data = await res.json();
      setResponse(data.response); // Update the response
    } catch (error) {
      setResponse("An error occurred while fetching the response.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleQuerySubmit();
    }
  };

  const handleClearChat = () => {
    setQuery("");
    setResponse("");
    setShowMsg(false);
  };

  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      distance: "50px", // Distance the element moves
      duration: 800, // Animation duration (in ms)
      easing: "ease-in-out", // Easing function
      opacity: 0, // Start with 0 opacity
      scale: 0.9, // Start with 90% scale
      reset: false, // Animation replay on scroll
      interval: 100, // Delay between animations for multiple elements
      origin: "bottom",
    });
  }, []);

  return (
    <section className="bg-primary text-white  px-10 md:px-32" id="AIBot">
      <div className="max-w-4xl mb-10">
        <h2 className="text-3xl font-bold reveal">AI Bot</h2>
      </div>

      <div className="flex  justify-between flex-col-reverse md:flex-row space-y-10 md:space-y-0">
        <div className="pb-10 w-full reveal">
          {/* Search Input */}
          <div className="bg-darkAccent h-14 px-4 py-2 flex justify-between items-center space-x-2 rounded-xl mb-6 w-full md:w-[65%]">
            <div className="flex items-center space-x-2 w-full">
              <span className="text-yellow-400 text-xl">✨</span>
              <input
                type="text"
                placeholder="Ask About Sudeep..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyPress} // Listen for "Enter" key press
                className="bg-transparent w-full block text-gray-300 focus:outline-none placeholder-gray-500"
              />
            </div>
            {query.length > 0 ? (
              <IoCloseSharp
                className="text-xl text-gray-500 cursor-pointer"
                onClick={handleClearChat}
              />
            ) : null}
          </div>

          {showMsg ? (
            <></>
          ) : (
            <div className="flex w-full space-x-2 my-4">
              <div
                className="py-4 px-5 border-2 border-gray-600 rounded-lg cursor-pointer"
                onClick={() => setQuery(query1)}
              >
                <p className="text-md font-semibold text-gray-400">{query1}</p>
                <p className="text-md text-gray-600">show me projects</p>
              </div>
              <div
                className="py-4 px-5 border-2 border-gray-600 rounded-lg cursor-pointer"
                onClick={() => setQuery(query2)}
              >
                <p className="text-md font-semibold text-gray-400">{query2}</p>
                <p className="text-md text-gray-600">show me projects</p>
              </div>
            </div>
          )}

          {/* Content Area */}
          {showMsg ? (
            <div className="bg-secondary px-6 py-4 rounded-xl  mb-14">
              {loading ? (
                <p className="text-gray-300">Loading...</p>
              ) : (
                <ReactMarkdown className="text-gray-300 leading-relaxed">
                  {response}
                </ReactMarkdown>
              )}
            </div>
          ) : null}
        </div>

        <div className="w-[70%] mx-auto md:max-w-[20%] reveal">
          <img className="w-full mb-10 md:mb-0" src="bot.png" alt="" />
        </div>
      </div>
    </section>
  );
}
