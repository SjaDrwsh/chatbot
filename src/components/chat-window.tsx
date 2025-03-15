import React from 'react';
import styled from 'styled-components';
import MessageBubble from './bubble';
import ChatInput from './chat-input';

interface ChatWindowProps {
  messages: string | string[];
  onSendMessage: (message: string) => void;
}

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 500px;
  width: 100%;
  max-width: 400px;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  background-color: white;
`;

const MessageList = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding-right: 10px;
`;

const ChatWindow= ({ messages, onSendMessage }: ChatWindowProps) => {
  const [messageList, setMessageList] = React.useState<{ text: string; isUser: boolean }[]>([]);
  const messageListEndRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const messageArray = Array.isArray(messages) ? messages : [messages];
    const botMessages = messageArray.map((message) => ({
      text: message,
      isUser: false
    }));
    setMessageList((prevMessages) => [...prevMessages, ...botMessages]);
  }, [messages]);

  // Scroll to the bottom whenever a new message is added
  React.useEffect(() => {
    if (messageListEndRef.current) {
      messageListEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messageList]);

  // Send message handler (for user typing)
  const handleSendMessage = (message: string) => {
    setMessageList((prevMessages) => [
      ...prevMessages,
      { text: message, isUser: true },  // Add user message with isUser = true
    ]);
    onSendMessage(message);  // Notify parent component about the message
  };

  return (
    <ChatWrapper>
      <MessageList>
        {messageList.map((msg, index) => (
          <MessageBubble key={index} text={msg.text} isUser={msg.isUser} />
        ))}
        <div ref={messageListEndRef} />
      </MessageList>
      <ChatInput onSendMessage={handleSendMessage} />
    </ChatWrapper>
  );
};

export default ChatWindow;
