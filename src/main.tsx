import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from './config/emailjs';
import App from './App';
import './index.css';

// Initialize EmailJS with your public key
emailjs.init({
  publicKey: EMAILJS_CONFIG.publicKey,
  limitRate: true
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);