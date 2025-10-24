import { use } from 'react';

import { ThemeContext, type IThemeContext } from '@contexts/themeContext';

const useTheme = (): IThemeContext => {
  const { theme, setTheme, toggleTheme } = use(ThemeContext);

  return { theme, setTheme, toggleTheme };
};

export default useTheme;
