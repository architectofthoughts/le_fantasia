// src/App.js

import React, { useState } from 'react';
import './App.css';
import StartScreen from './components/StartScreen';
import Header from './components/Header';
import Stats from './components/Stats';
import Inventory from './components/Inventory';
import GameScene from './components/GameScene';
import scenes from './data/scenes';


const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentSceneId, setCurrentSceneId] = useState(null);
  const [character, setCharacter] = useState({
    age: 32,
    gender: '남성',
    attack: 30,
    defense: 30,
  });
  const [items, setItems] = useState([
    { name: '단검', quantity: 1 },
    { name: '힐링 포션', quantity: 1 },
  ]);
  const [events, setEvents] = useState({});

  const startGame = () => {
    setGameStarted(true);
    setCurrentSceneId(1); // 첫 번째 씬으로 이동
  };

  const resetGame = () => {
    setGameStarted(false);
    setCurrentSceneId(null);
    // 캐릭터와 아이템 초기화
    setCharacter({
      age: 32,
      gender: '남성',
      attack: 50,
      defense: 30,
    });
    setItems([
      { name: '단검', quantity: 1 },
      { name: '힐링 포션', quantity: 1 },
    ]);
    setEvents({});
  };

  // 조건 평가 함수
  const evaluateConditions = (conditions) => {
    for (let i = 0; i < conditions.length; i++) {
      const condition = conditions[i];
      if (condition.check({ character, items, events })) {
        return condition.nextScene;
      }
    }
    return null; // 만족되는 조건이 없을 경우
  };

  // 선택지 선택 핸들러 수정
  const handleOptionSelect = (option) => {
    const nextSceneId = evaluateConditions(option.conditions);
    if (nextSceneId) {
      setCurrentSceneId(nextSceneId);
      // 필요한 경우 상태 업데이트 (캐릭터 능력치, 아이템, 이벤트 등)
    } else {
      // 만족되는 조건이 없을 경우 처리
      alert('선택할 수 없습니다.');
    }
  };

  const currentScene = currentSceneId ? scenes[currentSceneId] : null;

  return (
    <div className="App">
      <div className="App-container">
        {!gameStarted ? (
          <StartScreen startGame={startGame} />
        ) : (
          <div className="game-screen">
            <Header resetGame={resetGame} />
            {currentScene ? (
              <GameScene scene={currentScene} onOptionSelect={handleOptionSelect} />
            ) : (
              <div className="loading">로딩 중...</div>
            )}
            <div className="bottom-ui">
              <Stats character={character} />
              <Inventory items={items} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;