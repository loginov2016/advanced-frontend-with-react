import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from "./themeContext";
import { Theme, UseThemeResult } from "../../config/build/types/config";


export function useTheme(): UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    return {theme, toggleTheme};
}