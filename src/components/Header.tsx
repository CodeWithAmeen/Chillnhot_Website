import { useState, useEffect } from 'react';
import { Menu, ShoppingCart, User } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold text-red-600">Chill n Hot</div>
          
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Menu', 'About', 'Gallery', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-800 hover:text-red-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:text-red-600 transition-colors">
              <ShoppingCart className="w-6 h-6" />
            </button>
            <button className="p-2 hover:text-red-600 transition-colors">
              <User className="w-6 h-6" />
            </button>
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="py-4 space-y-2">
            {['Home', 'Menu', 'About', 'Gallery', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-2 text-gray-800 hover:bg-red-50 hover:text-red-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;