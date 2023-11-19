import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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


  // Call this using {artistsContent} 
  // Can use this to display the artists in a vertical list fashion

  // const artistsContent = (typeof artistData.artists === 'undefined') ? (
  //   <p>Loading...</p>
  // ) : (
  //   artistData.artists.map((artist, i) => (
  //     <p key={i}>{artist}</p>
  //   ))
  // );


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
