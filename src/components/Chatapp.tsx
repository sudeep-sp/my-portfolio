"use client";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Chatapp() {
  const [query, setQuery] = useState(""); // For user input
  const [response, setResponse] = useState(""); // For API response
  const [loading, setLoading] = useState(false); // Loading state
  const [showMsg, setShowMsg] = useState(false); // Show message state

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

  return (
    <section className="bg-primary text-white flex flex-col items-center justify-center px-32 py-20">
      <div className="max-w-4xl mx-auto mb-10">
        <h2 className="text-3xl font-bold">AI Bot</h2>
      </div>

      <div className="text-white w-full max-w-5xl mx-auto rounded-xl shadow-lg  p-4 bg-dark pb-10">
        {/* Window Top Bar */}
        <div className="flex items-center bg-dark rounded-t-lg px-3 py-2">
          <div className="flex space-x-2.5">
            <div
              className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"
              onClick={handleClearChat}
            ></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>

        {/* Search Input */}
        <div className="bg-secondary h-14 px-4 py-2 flex items-center space-x-2 rounded-xl mx-14 mt-14 mb-6 w-[60%]">
          <span className="text-yellow-400">✨</span>
          <input
            type="text"
            placeholder="Ask About Me..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress} // Listen for "Enter" key press
            className="bg-transparent w-full text-gray-300 focus:outline-none placeholder-gray-500"
          />
        </div>

        {/* Content Area */}
        {showMsg ? (
          <div className="bg-secondary px-6 py-4 rounded-xl mx-14 mb-14">
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
    </section>
  );
}
