import React, { useState } from 'react';
import '../styles/Contact.css';
import telegramQR from '../assets/telegram_qr.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Контакты</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>Gmail</h3>
              <a href="mailto:plekhanov.pavel.job@gmail.com" className="email-link">plekhanov.pavel.job@gmail.com</a>
            </div>
            <div className="contact-item">
              <h3>Социальные сети</h3>
              <div className="social-links">
                <a href="https://github.com/Pauolosavery" className="social-link">GitHub</a>
                <a href="https://tenchat.ru/pavel_plekhanov" className="social-link">TenChat</a>
                <a href="https://t.me/pavel_trader" className="social-link">Telegram</a>
              </div>
            </div>
            <div className="contact-item">
              <h3>Telegram</h3>
              <div className="telegram-qr">
                <a href="https://t.me/pavel_trader" target="_blank" rel="noopener noreferrer">
                  <img src={telegramQR} alt="Telegram QR Code" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 