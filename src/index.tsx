import React from 'react';
import ReactDOM from 'react-dom';
import { ChatbotUI } from './App'; 

export interface RootProps {
    messages?: string | string[];
    onSendMessage?: (message: string) => void;
}

const Root = ({ messages, onSendMessage }: RootProps) => {
    if(!onSendMessage){
        throw Error('onSendMessage is a mandatory prop, please pass it to receive message typed by the user')
    }
    
    return <ChatbotUI messages={messages ?? ''} onSendMessage={onSendMessage} />;
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
