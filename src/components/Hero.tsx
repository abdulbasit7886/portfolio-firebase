import React from "react";
import { ChevronDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  const { accentColor } = useTheme();

  const getAccentClasses = () => {
    const colorMap = {
      blue: "from-blue-500 to-blue-600",
      purple: "from-purple-500 to-purple-600",
      green: "from-green-500 to-green-600",
      pink: "from-pink-500 to-pink-600",
      orange: "from-orange-500 to-orange-600",
      teal: "from-teal-500 to-teal-600",
    };
    return colorMap[accentColor as keyof typeof colorMap] || colorMap.blue;
  };

  const getButtonClasses = (isPrimary: boolean) => {
    if (isPrimary) {
      const colorMap = {
        blue: "bg-blue-600 hover:bg-blue-700",
        purple: "bg-purple-600 hover:bg-purple-700",
        green: "bg-green-600 hover:bg-green-700",
        pink: "bg-pink-600 hover:bg-pink-700",
        orange: "bg-orange-600 hover:bg-orange-700",
        teal: "bg-teal-600 hover:bg-teal-700",
      };
      return colorMap[accentColor as keyof typeof colorMap] || colorMap.blue;
    } else {
      const colorMap = {
        blue: "text-blue-600 border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20",
        purple:
          "text-purple-600 border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20",
        green:
          "text-green-600 border-green-600 hover:bg-green-50 dark:hover:bg-green-900/20",
        pink: "text-pink-600 border-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900/20",
        orange:
          "text-orange-600 border-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/20",
        teal: "text-teal-600 border-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20",
      };
      return colorMap[accentColor as keyof typeof colorMap] || colorMap.blue;
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-fade-in-up">
          <div
            className={`w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r ${getAccentClasses()} flex items-center justify-center shadow-2xl animate-float relative`}
          >
            <span className="text-4xl font-bold text-white">AB</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent animate-pulse"></div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-in-up">
            Hi, I'm{" "}
            <span
              className={`bg-gradient-to-r ${getAccentClasses()} bg-clip-text text-transparent animate-gradient`}
            >
              Abdul Basit
            </span>
          </h1>

          <div className="relative">
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-slide-in-up animation-delay-200">
              Software Engineer | Full Stack Developer | AI/LLM Integration
            </p>
            <Sparkles className="absolute -top-2 -right-8 w-6 h-6 text-yellow-400 animate-pulse" />
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-400 max-w-2xl mx-auto mb-8 animate-slide-in-up animation-delay-400">
            3.5+ years building scalable web applications with the MERN stack.
            Specialized in AI/LLM integration, RAG systems, and full-stack
            development. Proficient in React, Node.js, MongoDB, AWS, and modern
            cloud architecture.
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-12 animate-slide-in-up animation-delay-600">
          {[
            {
              icon: Github,
              color: "text-gray-700 dark:text-gray-300",
              href: "https://github.com/abdulbasit7886",
            },
            {
              icon: Linkedin,
              color: "text-blue-600",
              href: "https://www.linkedin.com/in/abdulbasit-dev/",
            },
            {
              icon: Mail,
              color: "text-red-500",
              href: "mailto:abdulbasit99786@gmail.com",
            },
          ].map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <Icon
                  className={`w-6 h-6 ${social.color} group-hover:scale-110 transition-transform duration-200`}
                />
              </a>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up animation-delay-800">
          <button
            onClick={() => setActiveSection("projects")}
            className={`px-8 py-3 ${getButtonClasses(
              true
            )} text-white rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group`}
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>

          <button
            onClick={() => setActiveSection("contact")}
            className={`px-8 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md ${getButtonClasses(
              false
            )} border-2 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group`}
          >
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-current/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <button
          onClick={() => setActiveSection("about")}
          className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-gray-200 dark:border-gray-700"
        >
          <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
