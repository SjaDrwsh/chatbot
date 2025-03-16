import ChatWindow from './components/chat-window';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f7f7;
`;

const AppTitle = styled.h1`
  text-align: center;
`;

export interface ChatbotUIProps {
  messages: string | string[];
  onSendMessage: (message: string) => void;
}

export const ChatbotUI = ({ messages, onSendMessage}: ChatbotUIProps) => {
  if(!onSendMessage){
    throw Error('onSendMessage is a mandatory prop, please pass it to receive message typed by the user')
  }


  const formattedMessages = Array.isArray(messages) ? messages : [messages];

  return (
    <AppContainer>
      <div>
        <AppTitle>Chatbot</AppTitle>
        <ChatWindow
          messages={formattedMessages}
          onSendMessage={onSendMessage}
        />
      </div>
    </AppContainer>
  );
};

export default ChatbotUI;