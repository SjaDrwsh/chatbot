import React from 'react';
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

const App = () => {
  const [messages, setMessages] = React.useState<string | string[]>([]);

  // Simulate an API response or handle the user input and fetch API response
  const handleReceiveMessage = async (userMessage: string) => {
    try {
      // Simulate an API response with a delay (replace with actual API call)
      const response = await new Promise<string[]>((resolve) =>
        setTimeout(() => resolve([`Response from API: "${userMessage}"`]), 1000) // Single string response as array
      );

      // Update the messages state with the new API response
      setMessages(response);
    } catch (error) {
      console.error('Error:', error);
      setMessages('Sorry, there was an error.');
    }
  };

  return (
    <AppContainer>
      <div>
        <AppTitle>Chatbot</AppTitle>
        <ChatWindow
          messages={messages}
          onSendMessage={handleReceiveMessage}
        />
      </div>
    </AppContainer>
  );
};

export default App;