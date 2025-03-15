import React, { useState } from 'react';
import styled from 'styled-components';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f1f1f1;
`;

const TextArea = styled.textarea`
  width: 80%;
  padding: 10px;
  border-radius: 5px;
  resize: none;
`;

const SendButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ChatInput= ({ onSendMessage }: ChatInputProps) => {
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <InputWrapper>
      <TextArea value={message} onChange={handleChange} rows={2} />
      <SendButton onClick={handleSend}>Send</SendButton>
    </InputWrapper>
  );
};

export default ChatInput;
