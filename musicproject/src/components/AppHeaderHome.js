import React from "react";
import Description from "./Description";
import Button from "./Button";
import Authors from "./Authors";

function AppHeaderHome() {
    return (
      <header className="App-header">
        <h1>Sound Scout 
          <img src="/logo.png" alt="Logo" style={{
          width: '130px', 
          height: 'auto',
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          marginLeft: '20px',
        }}/></h1>
        <Description />
        <Button />
        <Authors />
      </header>
    );
}

export default AppHeaderHome;