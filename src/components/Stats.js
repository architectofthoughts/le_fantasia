// src/components/Stats.js

import React from 'react';
import './Stats.css';

const Stats = ({ character }) => {
  return (
    <div className="stats">
      <h3>캐릭터 정보</h3>
      <p>나이: {character.age}</p>
      <p>성별: {character.gender}</p>
      <p>공격력: {character.attack}</p>
      <p>방어력: {character.defense}</p>
    </div>
  );
};

export default Stats;