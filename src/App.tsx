import React from 'react';
import { Header, Sidebar, Main, Footer } from './components/layout';
import {
  HeroSection,
  AboutSection,
  ExperienceSection,
} from './components/sections';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="App min-h-screen bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 focus:z-50"
      >
        Skip to main content
      </a>
      <Header />
      <Sidebar />
      <Main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
      </Main>
      <Footer />
    </div>
  );
};

export default App;
