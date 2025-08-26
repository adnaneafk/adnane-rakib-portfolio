import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  theme: string;
  onThemeSwitch: () => void;
}

const Navbar = ({ theme, onThemeSwitch }: NavbarProps) => {
  const navLinks = ['About', 'Education', 'Projects', 'Skills', 'Contact'];

  return (
    <nav className="sticky top-0 z-50 py-4 px-6 md:px-12 backdrop-blur-md bg-light-bg/70 dark:bg-dark-bg/70 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-light-primary dark:text-dark-accent">
          Adnane R.
        </a>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-medium text-gray-700 dark:text-gray-300 hover:text-light-accent dark:hover:text-dark-accent transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
        <ThemeToggle theme={theme} onToggle={onThemeSwitch} />
      </div>
    </nav>
  );
};

export default Navbar;