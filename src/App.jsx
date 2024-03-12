import "./css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard technicians={false} />} />
        <Route path="/re" element={<Dashboard technicians={true} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
