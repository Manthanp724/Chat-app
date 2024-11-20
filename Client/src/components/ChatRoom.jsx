import React from "react";

const ChatRoom = () => {
    return (
        <div >
            <div >

                {/* Header */}
                <header>
                    <h1>Chat Room Title</h1>
                    <div>
                        <button>Logout</button>
                        <div >
                            <i ></i>
                        </div>
                    </div>
                </header>

                {/* Chat Area */}
                <div >
                    <div>
                        <div>
                            <i ></i>
                        </div>
                        <div >
                            <p>User 2</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p>User 1</p>
                        </div>
                        <div >
                            <i ></i>
                        </div>
                    </div>
                </div>

                {/* Message Input */}
                <footer >
                    <button >
                        <i ></i>
                    </button>
                    <div >
                        <div>
                            <button >Bold</button>
                            <button >Italics</button>
                            <button> Underline</button>
                        </div>
                        <div >
                            <input
                                type="text"
                                placeholder="Type a message..."
                            />
                            <button >
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
