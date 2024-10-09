// src/components/Inventory.js

import React from 'react';
import './Inventory.css';

const Inventory = ({ items }) => {
  return (
    <div className="inventory">
      <h3>인벤토리</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name} x{item.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;