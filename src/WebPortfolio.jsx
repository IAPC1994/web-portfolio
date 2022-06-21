import React from 'react';
import { Navbar, Home, About, Skills, Portfolio, Contact, Footer } from './components';

export const WebPortfolio = () => {
  return (
    <div>
        <Navbar />
        <Home />
        <About /> 
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
    </div>
  )
}
