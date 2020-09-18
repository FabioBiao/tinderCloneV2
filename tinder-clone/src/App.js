import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div className="app">
      {/* <h1>Lets build Tinder</h1> */}

      {/* Header */}
      <Header></Header>
      {/* TinderCards */}
      <TinderCards></TinderCards>
      {/* SwipeButtons */}
      <SwipeButtons></SwipeButtons>
    </div>
  );
}

export default App;
