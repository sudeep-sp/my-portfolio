import { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import ReactMarkdown from "react-markdown"; // Import react-markdown

export default function Bot() {
  const [query, setQuery] = useState(""); // For user input
  const [response, setResponse] = useState(""); // For API response
  const [loading, setLoading] = useState(false); // Loading state
  const [showMsg, setShowMsg] = useState(false); // Show message state
  const prompts = [
    {
      title: "What are the strengths of Sudeep?",
      description: "Show me the strengths of Sudeep",
    },
    {
      title: "What are the achievements of Sudeep?",
      description: "Show me the achievements of Sudeep",
    },
  ];

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
      console.error("Error fetching the response:", error);
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
    if (typeof window !== "undefined") {
      import("scrollreveal").then((ScrollReveal) => {
        ScrollReveal.default().reveal(".reveal", {
          distance: "50px",
          duration: 800,
          easing: "ease-in-out",
          opacity: 0,
          scale: 0.9,
          reset: false,
          interval: 100,
          origin: "bottom",
        });
      });
    }
  }, []);

  return (
    <section className="bg-primary text-white px-10 md:px-32" id="AIBot">
      <div className="max-w-4xl mb-4 md:mb-10">
        <h2 className="text-3xl font-bold reveal">AI Bot</h2>
      </div>

      <div className="flex justify-between flex-col-reverse md:flex-row space-y-10 md:space-y-0">
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
                onKeyDown={handleKeyPress}
                className="bg-transparent w-full block text-gray-300 focus:outline-none placeholder-gray-500"
              />
            </div>
            {query.length > 0 && (
              <IoCloseSharp
                className="text-xl text-gray-500 cursor-pointer"
                onClick={handleClearChat}
              />
            )}
          </div>

          <div className="flex flex-col md:flex-row">
            {!showMsg && (
              <>
                {prompts.map((prompt, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      handleQuerySubmit();
                      setQuery(prompt.title);
                    }}
                    className=" px-6 py-4 rounded-lg mr-2 mb-2 border border-gray-600 space-y-1 cursor-pointer"
                  >
                    <p className="font-bold text-lg text-gray-200">
                      {prompt.title}
                    </p>
                    <p className="font-medium text-md text-gray-400">
                      {prompt.description}
                    </p>
                    <p></p>
                  </div>
                ))}
              </>
            )}
          </div>

          {/* Content Area */}
          {showMsg && (
            <div className="bg-secondary px-6 py-4 rounded-xl mb-14 h-[300px] overflow-y-auto">
              {loading ? (
                <p className="text-gray-300">Loading...</p>
              ) : (
                <ReactMarkdown className="text-gray-300 whitespace-pre-wrap">
                  {response || "No response received yet."}
                </ReactMarkdown>
              )}
            </div>
          )}
        </div>

        <div className="w-[70%] mx-auto md:max-w-[60%] reveal">
          <img
            className="w-full mb-10 md:mb-0"
            src="/my_bot1.PNG"
            alt="Bot Illustration"
          />
        </div>
      </div>
    </section>
  );
}
