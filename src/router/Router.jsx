import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, About, Skills, Portfolio, Contact, Navbar } from '../components';

export const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={ <Home /> } />
                    <Route path='/about' element={ <About /> } />
                    <Route path='/skills' element={ <Skills /> } />
                    <Route path='/portfolio' element={ <Portfolio /> } />
                    <Route path='/contact' element={ <Contact /> } />
                    <Route path='*' element={ <Home /> } />
                </Routes>
            </BrowserRouter>
        </>
    )
}
