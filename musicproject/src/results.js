import React from "react";
import "./App.css";
import "./search-prompt.css";
import "./results.css";
import SearchBar from "./components/SearchBar";
import AppTemplate from "./components/AppTemplate";
import RerollButton from "./components/RerollButton";

function Results() {
    return (
        <div className="search-prompt">
            <AppTemplate />
            <RerollButton />
            <SearchBar />
            
        </div>
    )
}

export default Results;