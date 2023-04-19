import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Room from "./room/Room";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/room/:roomId" element={<Room />} />
      </Routes>
    </div>
  );
}

export default App;
