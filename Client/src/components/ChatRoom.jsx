import React from "react";

const ChatRoom = () => {
  return (
    <div className="w-screen h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-[75%] h-[75%] bg-white rounded-lg shadow-lg flex flex-col overflow-hidden">
        
        {/* Header */}
        <header className="bg-gray-100 p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Chat Room Title</h1>
          <div className="flex items-center space-x-4">
            <button className="bg-black text-white px-4 py-1 rounded-md">Logout</button>
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <i className="fas fa-user text-xl"></i>
            </div>
          </div>
        </header>

        {/* Chat Area */}
        <div className="flex-1 bg-blue-500 p-4 overflow-y-auto">
          <div className="flex items-start mb-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <i className="fas fa-user text-xl"></i>
            </div>
            <div className="ml-2 p-2 bg-gray-700 text-white rounded-lg max-w-xs">
              <p>User 2</p>
            </div>
          </div>

          <div className="flex items-start justify-end mb-4">
            <div className="mr-2 p-2 bg-white text-black border border-white rounded-lg max-w-xs">
              <p>User 1</p>
            </div>
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <i className="fas fa-user text-xl"></i>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <footer className="bg-gray-100 p-4 flex items-center">
          <button className="text-2xl mr-4">
            <i className="fas fa-arrow-left"></i>
          </button>
          <div className="flex-1 flex flex-col">
            <div className="flex space-x-4 text-sm mb-2">
              <button className="font-bold">Bold</button>
              <button className="italic">Italics</button>
              <button className="underline">Underline</button>
            </div>
            <div className="flex items-center">
              <input
                type="text"
                className="w-full p-3 rounded border border-gray-300"
                placeholder="Type a message..."
              />
              <button className="ml-2 p-2 bg-blue-500 text-white rounded">
                Send
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ChatRoom;