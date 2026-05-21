import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";

import HomePage from "./pages/HomePage";
import ActivePage from "./pages/ActivePage";
import ApiPage from "./pages/ApiPage";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/active" element={<ActivePage />} />
        <Route path="/api" element={<ApiPage />} />
      </Routes>
    </div>
  );
}

export default App;