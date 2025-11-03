import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, Briefcase, FileText, Mail } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { accentColor } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const getAccentClasses = (isActive: boolean) => {
    const colorMap = {
      blue: isActive ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/30' : 'hover:text-blue-600',
      purple: isActive ? 'text-purple-600 bg-purple-50 dark:bg-purple-900/30' : 'hover:text-purple-600',
      green: isActive ? 'text-green-600 bg-green-50 dark:bg-green-900/30' : 'hover:text-green-600',
      pink: isActive ? 'text-pink-600 bg-pink-50 dark:bg-pink-900/30' : 'hover:text-pink-600',
      orange: isActive ? 'text-orange-600 bg-orange-50 dark:bg-orange-900/30' : 'hover:text-orange-600',
      teal: isActive ? 'text-teal-600 bg-teal-50 dark:bg-teal-900/30' : 'hover:text-teal-600',
    };
    return colorMap[accentColor as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 animate-slide-in-left">
            <div className="flex items-center space-x-3">
              <img 
                src="/images/logo.png" 
                alt="Abdul Basit Logo" 
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Abdul Basit
              </h1>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2 animate-slide-in-right">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeSection === item.id
                      ? getAccentClasses(true)
                      : `text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 ${getAccentClasses(false)}`
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 transform hover:scale-105"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-700`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsMenuOpen(false);
                }}
                className={`flex items-center space-x-3 w-full px-3 py-2 rounded-md text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeSection === item.id
                    ? getAccentClasses(true)
                    : `text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 ${getAccentClasses(false)}`
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;