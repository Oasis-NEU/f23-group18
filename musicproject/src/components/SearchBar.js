import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    // Make a POST request to your Flask backend
    fetch("http://127.0.0.1:5000/artists", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ searchText }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        navigate('/results', { state: { artistData: data } });
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter an artist"
        value={searchText}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
}

export default SearchBar;