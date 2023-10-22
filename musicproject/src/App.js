import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Music Recommendation *we need an actual title*</h1>
        <p>
        The purpose of *insert title* is for people like you to find new lesser known artists to listen to. 
        All you have to do is enter any artist you want in the text box on the next page, and then we will give you 5 artists 
        that have a similar sound to this artist but are lesser known. 
        This way, you can find fresh artists to listen to and it’ll give recognition to some lesser known artists that deserve 
        a bigger audience. Click “Get Started” whenever you’re ready!
        </p>
        <div className="button">
          <a href="search-prompt.js" className="get-started-button">Get Started!</a>
        </div>
      </header>
    </div>
  );
}

export default App;
