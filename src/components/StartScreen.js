// src/components/StartScreen.js

import React from 'react';
import './StartScreen.css';

const StartScreen = ({ startGame }) => {
  return (
    <div className="App-header">
      <h1 className="title">성새 도시 자드</h1>
      <button className="start-button" onClick={startGame}>게임 시작</button>
    </div>
  );
};

export default StartScreen;