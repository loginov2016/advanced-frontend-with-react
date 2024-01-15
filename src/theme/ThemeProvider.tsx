import React, { FC, useState, useMemo } from 'react';
import { ThemeContext, LOCAL_STORAGE_THEME_KEY } from './themeContext';
import { Theme } from '../../config/build/types/config';

type ProviderProps = {
  children: React.ReactElement //React.ReactNode
}
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;


function ThemeProvider({ children }: ProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const memoProps = useMemo( () => ({theme, setTheme}), [theme] );

  return (
    <ThemeContext.Provider value={memoProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;