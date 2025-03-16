export interface ChatMessage {
  text: string;
  isUser: boolean;
}

export interface ChatbotUIProps {
  messages: string | string[];
  onSendMessage: (message: string) => void;
}
  