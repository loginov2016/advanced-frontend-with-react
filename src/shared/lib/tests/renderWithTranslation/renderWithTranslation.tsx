import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18nForTests';
import MemoryRouter, { BrowserRouter } from 'react-router-dom';

export function renderWithTranslation(component: ReactNode) {
    /* 
      Переменную component нужно обязательно обернуть в BrowserRouter, потому что, если 
      внутри component есть компонент Link, то он требует обязательной обёртки BrowserRouter.
      Без компонента BrowserRouter будет ошибка:  
      TypeError: Cannot destructure property 'basename' of 'React__namespace.useContext(...)' as it is null.
    */

    return render(
        <I18nextProvider i18n={i18n}>
            <BrowserRouter>{component}</BrowserRouter>
        </I18nextProvider>,
    );
}
