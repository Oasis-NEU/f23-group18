import React from "react";
import Description from "./Description";
import Button from "./Button";
import Authors from "./Authors";

function AppHeaderHome() {
    return (
      <header className="App-header">
        <h1>Sound Scout</h1>
        <Description />
        <Button />
        <Authors />
      </header>
    );
}

export default AppHeaderHome;