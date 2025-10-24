'use client';

import { createContext } from 'react';

export type ThemeMode = 'light' | 'dark';

export interface IThemeContext {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
}

export const initialState: IThemeContext = {
  theme: 'light',
  setTheme: () => {},
  toggleTheme: () => {},
};

export const ThemeContext = createContext<IThemeContext>(initialState);
