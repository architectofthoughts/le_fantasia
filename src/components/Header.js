// src/components/Header.js

import React from 'react';
import './Header.css';

const Header = ({ resetGame }) => {
  return (
    <div className="header">
      <button className="header-button" onClick={resetGame}>게임 시작으로</button>
      <button className="header-button">옵션</button>
    </div>
  );
};

export default Header;