import React from "react";
import "./App.css";
import "./search-prompt.css";
import "./results.css";
import SearchBar from "./components/SearchBar";
import AppTemplate from "./components/AppTemplate";
import RerollButton from "./components/RerollButton";
import ArtistBox from "./components/ArtistBox";

function Results({ artistData }) {
    return (
      <div className="results-container">
        <AppTemplate />
        <SearchBar />
        <div className="artist-results">
        {artistData && artistData.artists && artistData.artist_image_urls &&
          artistData.artists.map((artist, i) => (
            <ArtistBox key={i} name={artist} imageUrl={artistData.artist_image_urls[i]} />
          ))
        }
      </div>
        <RerollButton />
      </div>
    );
  }  

export default Results;