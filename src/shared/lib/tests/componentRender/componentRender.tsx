import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18nForTests';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

export interface componentRenderOptions {
    route?: string;
}

export function componentRender(
    component: ReactNode,
    options: componentRenderOptions = {},
) {
    /* 
      Переменную component нужно обязательно обернуть в BrowserRouter, потому что, если 
      внутри component есть компонент Link, то он требует обязательной обёртки BrowserRouter.
      Без компонента BrowserRouter будет ошибка:  
      TypeError: Cannot destructure property 'basename' of 'React__namespace.useContext(...)' as it is null.
    */

    const { route = '/' } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18n}>
                {component}
            </I18nextProvider>
        </MemoryRouter>,
    );
}
