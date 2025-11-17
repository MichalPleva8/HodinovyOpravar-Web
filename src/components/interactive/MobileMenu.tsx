import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
}

interface MobileMenuProps {
  navigation: NavigationItem[];
  phoneNumber?: string;
  currentPath?: string;
}

export default function MobileMenu({
  navigation,
  phoneNumber = '+421903566644',
  currentPath = '/'
}: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 -mr-2 text-neutral-700 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
        aria-label={isOpen ? 'Zavrieť menu' : 'Otvoriť menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-neutral-800/50 z-40 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`
          fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50
          transform transition-transform duration-300 ease-in-out
          md:hidden shadow-xl
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-300">
          <h2 className="text-h5 font-bold text-neutral-800">Menu</h2>
          <button
            onClick={closeMenu}
            className="p-2 -mr-2 text-neutral-700 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
            aria-label="Zavrieť menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-6">
          <ul className="space-y-1">
            {navigation.map((item) => {
              const isActive = currentPath === item.href;
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className={`
                      block px-4 py-3 rounded-lg font-medium transition-colors
                      ${isActive
                        ? 'bg-primary-light text-primary'
                        : 'text-neutral-700 hover:bg-neutral-200 hover:text-primary'
                      }
                    `}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Call to Action */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-neutral-300 bg-neutral-100">
          <a
            href={`tel:${phoneNumber}`}
            className="
              w-full inline-flex items-center justify-center gap-2
              bg-primary hover:bg-primary-hover text-white font-medium
              py-3 px-6 rounded-button transition-all duration-200
              shadow-button hover:shadow-button/60
            "
          >
            <Phone className="w-5 h-5" />
            Zavolať teraz
          </a>
          <p className="text-center text-sm text-neutral-600 mt-3">
            {phoneNumber.replace('+421', '0')}
          </p>
        </div>
      </div>
    </>
  );
}
