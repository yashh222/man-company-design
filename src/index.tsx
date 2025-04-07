import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HeroSection from './_components/HeroSection';
import { SecondSection } from './_components/SecondSection';
import Slider from './_components/slider'; // ✅ Only this import needed
import reportWebVitals from './reportWebVitals';
import { SmoothScrollWrapper } from './_components/SmoothScrollWrapper';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <SmoothScrollWrapper>
      <HeroSection />
      <SecondSection />
      <Slider /> {/* ✅ Use uppercase for component */}
    </SmoothScrollWrapper>
  </React.StrictMode>
);

reportWebVitals();
