import { Route, Routes } from "react-router-dom";
import CreateEvent from "./pages/CreateEvent";
import Events from "./pages/Events";
import Landing from "./pages/Landing";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/create" element={<CreateEvent />} />
      <Route path="/event" element={<Events />} />
    </Routes>
  );
}

export default App;
