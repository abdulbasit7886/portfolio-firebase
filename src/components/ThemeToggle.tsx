import React from 'react';
import { Sun, Moon, Palette } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme, accentColor, setAccentColor } = useTheme();
  const [showColorPicker, setShowColorPicker] = React.useState(false);

  const colors = [
    { name: 'blue', class: 'from-blue-500 to-blue-600' },
    { name: 'purple', class: 'from-purple-500 to-purple-600' },
    { name: 'green', class: 'from-green-500 to-green-600' },
    { name: 'pink', class: 'from-pink-500 to-pink-600' },
    { name: 'orange', class: 'from-orange-500 to-orange-600' },
    { name: 'teal', class: 'from-teal-500 to-teal-600' },
  ];

  return (
    <div className="fixed top-20 right-4 z-50 flex flex-col space-y-2">
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 border border-gray-200 dark:border-gray-700"
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-yellow-500" />
        ) : (
          <Moon className="w-5 h-5 text-gray-700" />
        )}
      </button>

      {/* Color Picker Toggle */}
      <button
        onClick={() => setShowColorPicker(!showColorPicker)}
        className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 border border-gray-200 dark:border-gray-700"
      >
        <Palette className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      </button>

      {/* Color Picker */}
      {showColorPicker && (
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl p-3 shadow-xl border border-gray-200 dark:border-gray-700 animate-fade-in">
          <div className="grid grid-cols-2 gap-2">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => {
                  setAccentColor(color.name);
                  setShowColorPicker(false);
                }}
                className={`w-8 h-8 rounded-full bg-gradient-to-r ${color.class} hover:scale-110 transform transition-all duration-200 ${
                  accentColor === color.name ? 'ring-2 ring-offset-2 ring-gray-400' : ''
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;