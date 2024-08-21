import React, { Suspense, useContext, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'app/styles/index.scss';
//import AboutPage from '../pages/AboutPage/ui/AboutPage';
//import MainPage from '../pages/MainPage/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { useTheme } from 'app/providers/ThemeProvider'; // useTheme находит в экспортах в файле index.js
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';

function App() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
            <button onClick={toggleTheme}>Toggle</button><br />
        </div>
    );
}

export default App;
