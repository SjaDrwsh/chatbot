import React from 'react';
import styled from 'styled-components';

interface MessageBubbleProps {
  text: string;
  isUser: boolean;
}

const Bubble = styled.div<{ isUser: boolean }>`
  display: inline-block;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 20px;
  background-color: ${(props) => (props.isUser ? '#DCF8C6' : '#E5E5E5')};
  max-width: 80%;
  align-self: ${(props) => (props.isUser ? 'flex-end' : 'flex-start')};
  word-wrap: break-word;
  white-space: pre-wrap;
`;

const MessageBubble = ({ text, isUser }: MessageBubbleProps) => {
  return <Bubble isUser={isUser}>{text}</Bubble>;
};

export default MessageBubble;
