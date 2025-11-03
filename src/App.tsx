import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Hero setActiveSection={setActiveSection} />;
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      case "resume":
        return <Resume />;
      case "contact":
        return <Contact />;
      default:
        return <Hero setActiveSection={setActiveSection} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
        <Header
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <ThemeToggle />
        <main className="pt-16">
          <div className="transition-all duration-500 ease-in-out">
            {renderSection()}
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-black text-white py-8 transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="animate-fade-in">
              &copy; 2025 Abdul Basit. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
