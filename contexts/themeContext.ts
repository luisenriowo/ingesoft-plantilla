'use client';

import { createContext, type Dispatch, type SetStateAction } from 'react';

export type ThemeMode = 'light' | 'dark';

export interface IThemeContext {
  theme: ThemeMode;
  setTheme: Dispatch<SetStateAction<ThemeMode>>;
  toggleTheme: () => void;
}

export const initialState: IThemeContext = {
  theme: 'light',
  setTheme: () => undefined,
  toggleTheme: () => undefined,
};

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);
