import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">Frontend Developer</div>
        <ul className="nav-links">
          <li><a href="#about">Обо мне</a></li>
          <li><a href="#skills">Навыки</a></li>
          <li><a href="#projects">Проекты</a></li>
          <li><a href="#contact">Контакты</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 