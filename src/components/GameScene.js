// src/components/GameScene.js

import React from 'react';
import './GameScene.css';

const GameScene = ({ scene, onOptionSelect }) => {
  return (
    <div className="game-content">
      <p>{scene.text}</p>
      <ul>
        {scene.options.map((option, index) => (
          <li key={index}>
            <button onClick={() => onOptionSelect(option)}>
              {option.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameScene;