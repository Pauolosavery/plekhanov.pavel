import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Привет, я Frontend Developer</h1>
        <p className="hero-subtitle">
          Этот сайт-визитка был создан при помощи AI.
          Время разработки составило 15 минут включая деплой.
            Промт состоял из 3х строк.
          </p>
            <p className="hero-subtitle">
            Результат оставляет желать лучшего. 
            Поэтому хорошее ТЗ - это 90% успеха.
          </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">Связаться</a>
          <a href="#projects" className="btn btn-secondary">Мои работы</a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 