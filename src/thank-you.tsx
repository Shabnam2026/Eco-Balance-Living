import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ThankYou from './ThankYou.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThankYou />
  </StrictMode>,
);
