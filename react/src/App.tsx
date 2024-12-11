import { WebSocketProvider } from "./components/WebSocketContext";
import DownloadsList from "./components/DownloadsList";

function App() {
  return (
    <WebSocketProvider>
      <DownloadsList />
    </WebSocketProvider>
  );
}

export default App;
