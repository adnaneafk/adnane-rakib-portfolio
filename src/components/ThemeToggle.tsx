import { FaSun, FaMoon } from 'react-icons/fa';

interface ThemeToggleProps {
  theme: string;
  onToggle: () => void;
}

const ThemeToggle = ({ theme, onToggle }: ThemeToggleProps) => {
  return (
    <button
      onClick={onToggle}
      className="p-2 rounded-full bg-gray-200 dark:bg-dark-primary text-gray-800 dark:text-white transition-transform duration-300 hover:scale-110"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeToggle;