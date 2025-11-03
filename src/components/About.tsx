import React, { useState, useEffect } from "react";
import { Award, Heart, Coffee, Users, Sparkles } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { accentColor } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("about-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

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

  const stats = [
    {
      icon: Award,
      label: "Years Experience",
      value: "3.5+",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Heart,
      label: "Projects Completed",
      value: "15+",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: Coffee,
      label: "Technologies",
      value: "20+",
      color: "from-yellow-500 to-orange-600",
    },
    {
      icon: Users,
      label: "AI/LLM Projects",
      value: "5+",
      color: "from-green-500 to-emerald-600",
    },
  ];

  return (
    <section
      id="about-section"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-r from-pink-400/20 to-yellow-400/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="animate-slide-in-left">
            <div className="flex items-center mb-6">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                About Me
              </h2>
              <Sparkles className="ml-3 w-8 h-8 text-yellow-400 animate-pulse" />
            </div>

            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p className="animate-fade-in-up animation-delay-200">
                I'm Abdul Basit, a Software Engineer with 3.5+ years of
                experience in full-stack development, specializing in MERN stack
                architecture and AI/LLM integrations. I build scalable,
                production-ready web applications that solve real-world problems
                with modern technologies.
              </p>
              <p className="animate-fade-in-up animation-delay-400">
                My expertise spans frontend development with React and
                TypeScript, backend development with Node.js and Express,
                database design with MongoDB and PostgreSQL, and cloud
                deployment on AWS. I specialize in AI/LLM integration, RAG
                systems, Vector databases, and automation. I'm passionate about
                writing clean, maintainable code and delivering exceptional user
                experiences.
              </p>
              <p className="animate-fade-in-up animation-delay-600">
                Pursuing my Master's in Computer Science from ITU, I combine
                academic knowledge with 3.5+ years of industry experience. I
                have hands-on experience building SaaS platforms, real-time
                dashboards, and AI-powered applications. Always eager to learn
                and take on challenging projects that push technological
                boundaries.
              </p>
            </div>

            <div className="mt-8 animate-fade-in-up animation-delay-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Core Expertise
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "MERN Stack Development",
                  "AI/LLM Integration",
                  "React & TypeScript",
                  "Node.js & Express",
                  "MongoDB & PostgreSQL",
                  "AWS & Cloud Deployment",
                  "RAG Systems & Vector DB",
                  "RESTful APIs & WebSockets",
                  "Real-time Applications",
                  "Payment Integration",
                  // 'DevOps & CI/CD',
                  "SaaS Architecture",
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 group animate-slide-in-right"
                    style={{ animationDelay: `${800 + index * 100}ms` }}
                  >
                    <div
                      className={`w-2 h-2 bg-gradient-to-r ${getAccentClasses()} rounded-full group-hover:scale-150 transition-transform duration-300`}
                    ></div>
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative w-full max-w-lg mx-auto">
              <div
                className={`aspect-square bg-gradient-to-br ${getAccentClasses()} rounded-2xl transform hover:scale-105 transition-all duration-500 shadow-2xl`}
              >
                <img
                  src="/images/profile.jpg"
                  alt="Abdul Basit - Software Engineer"
                  className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white dark:bg-gray-800 rounded-full shadow-xl flex items-center justify-center animate-float">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${getAccentClasses()} rounded-full flex items-center justify-center`}
                >
                  <span className="text-white font-bold text-lg">💻</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group animate-fade-in-up hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${1000 + index * 200}ms` }}
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 animate-float`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div
                  className={`text-3xl font-bold bg-gradient-to-r ${getAccentClasses()} bg-clip-text text-transparent mb-2 ${
                    isVisible ? "animate-pulse" : ""
                  }`}
                >
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
