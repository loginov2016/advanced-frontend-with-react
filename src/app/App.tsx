import React, { Suspense, useContext, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'app/styles/index.scss';
//import AboutPage from '../pages/AboutPage/ui/AboutPage';
//import MainPage from '../pages/MainPage/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { useTheme } from 'app/providers/ThemeProvider'; // useTheme находит в экспортах в файле index.js
import { classNames } from 'shared/lib/classNames/classNames';

function App() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <>
                New React Project!!!
                <br />
                <button onClick={toggleTheme}>Toggle</button>
                <br />
                <Link to={'/'}>Главная</Link>
                <br />
                <Link to={'/about'}>О сайте</Link>
            </>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/'} element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
