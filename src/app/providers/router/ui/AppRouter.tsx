import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig, AppRoutes } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader/>}>
            <Routes>
                {/* <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/'} element={<MainPage />} /> */}
                {Object.values(routeConfig).map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <div className='page-wrraper'>
                                {element}
                            </div>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
