const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 text-center text-gray-600 dark:text-gray-400">
      <p>&copy; {currentYear} Adnane Rakib. All rights reserved.</p>
    </footer>
  );
};

export default Footer;