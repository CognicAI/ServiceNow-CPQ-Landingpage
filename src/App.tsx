import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/sections/Hero';
import { Problem } from './components/sections/Problem';
import { Solution } from './components/sections/Solution';
import { Features } from './components/sections/Features';
import { Workflow } from './components/sections/Workflow';
import { Demo } from './components/sections/Demo';
import { Architecture } from './components/sections/Architecture';
import { Technology } from './components/sections/Technology';
import { Team } from './components/sections/Team';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Workflow />
        <Demo />
        <Architecture />
        <Technology />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

export default App;