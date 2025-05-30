import React from 'react';
import { Sun, Moon } from 'lucide-react';

type Theme = 'light' | 'dark';

interface ThemeToggleProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const themeOrder: Theme[] = ['light', 'dark'];

const getNextTheme = (current: Theme): Theme => {
  const idx = themeOrder.indexOf(current);
  return themeOrder[(idx + 1) % themeOrder.length];
};

const getThemeIcon = (theme: Theme) => {
  switch (theme) {
    case 'light':
      return <Sun size={18} />;
    case 'dark':
      return <Moon size={18} />;
    default:
      return <Sun size={18} />;
  }
};

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, setTheme }) => {
  const nextTheme = getNextTheme(theme);
  return (
    <button
      onClick={() => setTheme(nextTheme)}
      className={`flex items-center gap-2 p-2 rounded-lg 
        bg-neutral-100 dark:bg-neutral-800 
        ${
          theme === 'light'
            ? 'text-primary-500'
            : 'text-yellow-400'
        }
      `}
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
    >
      {getThemeIcon(theme)}
    </button>
  );
};

export default ThemeToggle;
