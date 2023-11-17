import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Results from "./results";
import SearchPrompt from "./search-prompt";
import AppHeaderHome from "./components/AppHeaderHome";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<AppHeaderHome />} />
          <Route path="/search-prompt" element={<SearchPrompt />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
