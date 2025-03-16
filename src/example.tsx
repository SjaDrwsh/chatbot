import Chatbot from "./App";

const Example = () => {
  return (
    <div>
      <h2>Chatbot Example</h2>
      <Chatbot
        messages={['Hello there! Welcome to the Chatbot UI']}
        onSendMessage={(msg) => console.log("User message:", msg)}
      />
    </div>
  );
};

export default Example;
