
import React, { useState } from 'react';
import './Menu.css';

function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <a href="javascript:void(0);" className="icon" onClick={toggleMenu}>
        <i className={`fa fa-bars ${isOpen ? 'active' : ''}`}></i>
      </a>
  
  );
}

export default Burger;