// import React from 'react'
import { ChatEngine } from "react-chat-engine";
import "./chat.css";
import ChatFeed from "../../components/chat/ChatFeed";

export default function chat() {
  return (
    <div className="chat">
      <ChatEngine
        height="100vh"
        projectID="
eec5e975-c549-4f4e-9ff8-28e2d1206507"
        userName="sharon"
        userSecret="1234"
        renderChatFeed={(ChatAppProps) => <ChatFeed {...ChatAppProps} />}
      />
    </div>
  );
}
