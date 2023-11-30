import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Results from "./results";
import SearchPrompt from "./search-prompt";
import AppHeaderHome from "./components/AppHeaderHome";

function App() {

  const [artistData, setArtistData] = useState([{}])

  useEffect(() => {
    fetch("/artists").then(
      res => res.json()
    ).then(
        artistData => {
          setArtistData(artistData)
          console.log(artistData)
        } 
    )
  }, [])



  function ResultsWrapper() {
    const location = useLocation();
    return <Results artistData={location.state?.artistData || artistData} />;
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<AppHeaderHome />} />
          <Route path="/search-prompt" element={<SearchPrompt />} />
          <Route path="/results" element={<ResultsWrapper />} />
        </Routes>

        
      </div> 
    </BrowserRouter>
  );
}

export default App;
