import { createContext, useContext, useEffect, useState } from "react";
import useWebSocket from "react-use-websocket";

const WebSocketContext = createContext();

export const WebSocketProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const { sendJsonMessage, lastJsonMessage } = useWebSocket(
    "ws://localhost:1234/react",
    {
      shouldReconnect: () => true, // Automatically reconnect
    },
  );

  useEffect(() => {
    if (lastJsonMessage) {
      setMessages((prev) => [...prev, lastJsonMessage]);
    }
  }, [lastJsonMessage]);

  return (
    <WebSocketContext.Provider value={{ messages, sendJsonMessage }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocketContext = () => useContext(WebSocketContext);
