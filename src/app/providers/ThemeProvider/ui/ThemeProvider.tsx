import React, { useState, useMemo, FC } from 'react';
import { ThemeContext, LOCAL_STORAGE_THEME_KEY } from '../lib/themeContext';
import { Theme } from '../../../../../config/build/types/config';

type ProviderProps = {
    children: React.ReactNode; // React.ReactElement
};
const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: FC<ProviderProps> = ({ children }: ProviderProps) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const memoProps = useMemo(() => ({ theme, setTheme }), [theme]);

    return (
        <ThemeContext.Provider value={memoProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
