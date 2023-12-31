import React from "react";
import "./App.css";
import "./search-prompt.css";
import SearchBar from "./components/SearchBar";
import AppTemplate from "./components/AppTemplate";

function SearchPrompt() {
    return (
        <div className="search-prompt">
            <AppTemplate />
            <SearchBar />
        </div>
    )
}

export default SearchPrompt;