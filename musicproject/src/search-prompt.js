import React from "react";
import "./search-prompt.css";

function Authors() {
    return (
        <p className="authors">Created by: Logan Ravinuthala, Austin Hwang, Ansh Juvvadi, Waasif Mahmood</p>
    );
}

function AppHeader() {
    return (
      <header className="App-header">
          <h1>Sound Scout</h1>
          <Authors />
      </header>
    )
  }

function SearchBar() {
    return (
        <div className="search-bar">
            <input className="search-bar-input" type="text" placeholder="Search for an artist" />
        </div>
    )
}

export default function SearchPrompt() {
    return (
        <div className="search-prompt">
            <AppHeader />
        </div>
    )
}