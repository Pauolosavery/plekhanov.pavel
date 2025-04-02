import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">Обо мне</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Я фронтенд разработчик с опытом создания современных веб-приложений.
              Специализируюсь на React, JavaScript и современных инструментах разработки.
            </p>
            <p>
              Моя цель - создавать красивые, функциональные и удобные интерфейсы,
              которые решают реальные задачи пользователей.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>3+</h3>
                <p>Года опыта</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Завершенных проектов</p>
              </div>
              <div className="stat">
                <h3>100%</h3>
                <p>Довольных клиентов</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 