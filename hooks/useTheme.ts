import { useContext } from 'react';

import { ThemeContext, type IThemeContext } from '@contexts/themeContext';

const useTheme = (): IThemeContext => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};

export default useTheme;
