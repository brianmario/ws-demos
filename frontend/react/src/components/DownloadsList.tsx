import { useEffect } from "react";
import { useWebSocketContext } from "./WebSocketContext";

const DownloadsList = () => {
  const { messages } = useWebSocketContext();

  useEffect(() => {
    messages.forEach(({ id, progress }) => {
      const element = document.getElementById(`download:${id}`);

      const progressElement = element.querySelector("progress");
      progressElement.value = progress;
    });
  }, [messages]);

  return (
    <div id="downloads">
      <div id="download:1">
        <span>Inside Out 2 (2024)</span>
        <progress value="0" max="1"></progress>
      </div>
      <div id="download:2">
        <span>Inception (2010)</span>
        <progress value="0" max="1"></progress>
      </div>
    </div>
  );
};

export default DownloadsList;
