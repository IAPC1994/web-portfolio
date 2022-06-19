import React from 'react';
import { Navbar, Home, About, Skills, Portfolio, Contact } from './components';

export const WebPortfolio = () => {
  return (
    <div>
        <Navbar />
        <Home />
        <About /> 
        <Skills />
        <Portfolio />
        <Contact />
    </div>
  )
}
