import React from "react";
import styled from "styled-components";

interface ChatWindowProps {
  messages: string[];
  onSendMessage: (message: string) => void;
}

const ChatWindow = ({ messages, onSendMessage }: ChatWindowProps) => {
  const [chatMessages, setChatMessages] = React.useState<string[]>(messages);
  const [input, setInput] = React.useState("");
  const messagesEndRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const sendMessage = () => {
    if (input.trim()) {
      setChatMessages([...chatMessages, input]);
      onSendMessage(input);
      setInput("");
    }
  };

  return (
    <ChatContainer>
      <MessageList>
        {chatMessages.map((msg, index) => (
          <MessageBubble key={index}>{msg}</MessageBubble>
        ))}
        <div ref={messagesEndRef} />
      </MessageList>
      <InputContainer>
        <ChatInput 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Type a message..."
        />
        <SendButton onClick={sendMessage}>Send</SendButton>
      </InputContainer>
    </ChatContainer>
  );
};

const ChatContainer = styled.div`
  width: 300px;
  height: 400px;
  border: 1px solid #ddd;
  padding: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const MessageList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-bottom: 10px; /* Ensure space at the bottom */
`;

const MessageBubble = styled.div`
  background: #0078ff;
  color: white;
  padding: 8px;
  border-radius: 10px;
  margin: 5px 0;
  align-self: flex-start; /* Default to left */
`;

const InputContainer = styled.div`
  display: flex;
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 5px;
`;

const SendButton = styled.button`
  margin-left: 5px;
  padding: 5px 10px;
  background: #0078ff;
  color: white;
  border: none;
  cursor: pointer;
`;

export default ChatWindow;
