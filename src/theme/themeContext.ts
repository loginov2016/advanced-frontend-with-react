import { createContext } from "react";
import { ThemeContextProps } from "../../config/build/types/config";

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
