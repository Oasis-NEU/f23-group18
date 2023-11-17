import React from "react";

function SearchBar() {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Enter an artist"/>
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    )
}

export default SearchBar;