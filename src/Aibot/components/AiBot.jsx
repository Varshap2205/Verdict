import React, { useState } from "react";
import { IoAttachSharp } from "react-icons/io5";
import { FaArrowUp } from "react-icons/fa";
import Sidebar from "./Sidebar";
function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [showChat, setShowChat] = useState(false);

  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { sender: "user", text: input }]);
      setInput("");
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Hello! How can I help you today?" },
        ]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      <div className="flex flex-row ">
        <Sidebar className="bg-gray-900" />
        <div className=" text-white flex flex-col items-center justify-center  mx-5">
          {!showChat && (
            <div className="text-center">
              <h1 className="text-3xl font-semibold mb-6">
                What can I help with?
              </h1>

              <div className="relative w-full max-w-xl mx-auto mb-6">
                <div className="flex items-center bg-gray-800 rounded-full px-4 py-2">
                  <IoAttachSharp
                    className="rounded-full bg-gray-800 mr-4"
                    size={26}
                  />
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="bg-transparent w-full text-white focus:outline-none"
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <button
                    className="ml-4 bg-gray-600 p-2 rounded-full hover:bg-gray-500"
                    onClick={() => setShowChat(true)}
                  >
                    <FaArrowUp className="w-4 h-4 text-white bg-gray-600" />
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600">
                  Make a plan
                </button>
                <button className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600">
                  Summarize text
                </button>
                <button className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600">
                  Get advice
                </button>
                <button className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600">
                  Surprise me
                </button>
                <button className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600">
                  More
                </button>
              </div>
            </div>
          )}

          {showChat && (
            <div className="flex flex-col justify-center items-center w-full ">
              <div className="w-1/2 max-w-full p-4 h-full overflow-y-auto">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    } mb-4`}
                  >
                    <div
                      className={`${
                        message.sender === "user"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-300 text-black"
                      } p-5 rounded-lg max-w-sm`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-full max-w-full flex p-4 justify-center mx-96 position:relative">
                <div className="relative w-1/2 flex">
                  <input
                    className="w-full p-3 border rounded-full focus:outline-none pr-10"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Type a message..."
                  />
                  <IoAttachSharp
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                    size={24}
                  />
                </div>
                <button
                  onClick={sendMessage}
                  className=" text-white p-2 rounded-full ml-2"
                >
                  <FaArrowUp className="w-6 h-6  rounded-full" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
