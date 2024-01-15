import { lazy } from 'react';

export const MainPageAsync = lazy( () => new Promise( resolve => {
    // @ts-ignore
    // Так в реальных проектах не делать!!! Делаем для курса!!!
    setTimeout( () => resolve( import('./MainPage') ), 1500 )
}) );