import React, { Suspense, useContext, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Counter from './Counter';
import '../styles/index.scss';
import AboutPage from '../pages/AboutPage/AboutPage';
import MainPage from '../pages/MainPage/MainPage';
import { AboutPageAsync } from '../pages/AboutPage/AboutPage.async';
import { MainPageAsync } from '../pages/MainPage/MainPage.async';
import { useTheme } from '../theme/useTheme';
import { classNames } from '../helpers/classNames/classNames';


function App() {
  
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <>
        New React Project!!!<br />
        <button onClick={toggleTheme} >Toggle</button><br />
        <Link to={'/'}>Главная</Link><br />
        <Link to={'/about'}>О сайте</Link>
        <Counter />
      </>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />} />
          <Route path={'/'} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App