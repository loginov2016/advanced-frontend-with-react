import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { useTheme } from 'app/providers/ThemeProvider'; // useTheme находит в экспортах в файле index.js
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import log from 'shared/lib/log/log';
import 'app/styles/index.scss';
import { Suspense, useEffect } from 'react';

function App() {
    //log('import.meta.url: ', import.meta.url);
    const { theme } = useTheme();

    /* Пробрасывал ошибку для тестирования ErrorBoundary.
    useEffect(() => {
        if (Math.random() < 0.5) {
            throw new Error('Ошибка!');
        }
    }, []); */

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />

                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
