import React, { useState, useMemo, FC } from 'react';
import {
    ThemeContext,
    Theme,
    LOCAL_STORAGE_THEME_KEY,
} from '../lib/themeContext';

type ThemeProviderProps = {
    children?: React.ReactNode; // React.ReactElement
    initialTheme?: Theme;
};

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: FC<ThemeProviderProps> = (props: ThemeProviderProps) => {
    const { children, initialTheme } = props;
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const memoProps = useMemo(() => ({ theme, setTheme }), [theme]);

    return (
        <ThemeContext.Provider value={memoProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
