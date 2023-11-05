import React from 'react';
import './App.css';

function Description() {
  return (
    <p className="textbox">
      The purpose of Sound Scout is for people like you to find new lesser known artists to listen to.
      All you have to do is enter any artist you want in the text box on the next page, and then we will give you 5 artists
      that have a similar sound to this artist but are lesser known.
      This way, you can find fresh artists to listen to and it’ll give recognition to some lesser known artists that deserve
      a bigger audience. Click “Get Started” whenever you’re ready!
    </p>
  );
}

function Button() {
  return (
    <div className="button">
      <a href="search-prompt" className="get-started-button">Get Started!</a>
    </div>
  );
}

function Authors() {
  return (
    <p className="authors">Created by: Logan Ravinuthala, Austin Hwang, Ansh Juvvadi, Waasif Mahmood</p>
  );
}

function AppHeader() {
  return (
    <header className="App-header">
        <h1>Sound Scout</h1>
        <Description />
        <Button />  
        <Authors />
      </header>
  )
}

function App() {
  return (
    <div className="App">
      <AppHeader />
    </div>
  );
}

export default App;