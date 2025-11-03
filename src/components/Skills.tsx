import { Code, Database, Globe, Zap } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { accentColor } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("skills-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const getAccentClasses = () => {
    const colorMap = {
      blue: "from-blue-500 to-cyan-500",
      purple: "from-purple-500 to-pink-500",
      green: "from-green-500 to-emerald-500",
      pink: "from-pink-500 to-rose-500",
      orange: "from-orange-500 to-red-500",
      teal: "from-teal-500 to-cyan-500",
    };
    return colorMap[accentColor as keyof typeof colorMap] || colorMap.blue;
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: getAccentClasses(),
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "Next.js", level: 88 },
        { name: "Angular", level: 60 },
        { name: "Tailwind CSS", level: 60 },
        { name: "Redux", level: 85 },
        { name: "Material UI & Ant Design", level: 85 },
      ],
    },
    {
      title: "Backend & Database",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js & Express", level: 95 },
        { name: "MongoDB", level: 88 },
        // { name: "Fast Api", level: 50 },
        { name: "Python", level: 60 },
        { name: "Firebase", level: 82 },
        { name: "RESTful APIs", level: 92 },
        { name: "WebSockets", level: 80 },
        { name: "Vector DB (Qdrant)", level: 85 },
      ],
    },
    {
      title: "AI/LLM & Cloud",
      icon: Globe,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "OpenAI API & GPT", level: 90 },
        { name: "LangChain", level: 85 },
        { name: "RAG Architecture", level: 85 },
        { name: "Prompt Engineering", level: 88 },
        { name: "AWS (EC2, S3, RDS)", level: 85 },
        { name: "Docker & Containerization", level: 82 },
        { name: "Git & GitHub", level: 90 },
        { name: "CI/CD Pipelines", level: 80 },
      ],
    },
    {
      title: "Tools & Integrations",
      icon: Zap,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Stripe Payment Integration", level: 88 },
        { name: "Postman", level: 90 },
        // { name: "Jest & Testing", level: 80 },
        { name: "SASS/SCSS", level: 85 },
        { name: "VS Code & DevTools", level: 95 },
        { name: "Build Tools", level: 85 },
        { name: "FastAPI", level: 60 },
        { name: "GraphQL", level: 60 },
      ],
    },
  ];

  return (
    <section
      id="skills-section"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transform hover:scale-105 animate-slide-in-up group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-r ${category.color} shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-4">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center justify-between group/skill"
                    >
                      <span className="text-gray-700 dark:text-gray-300 font-medium group-hover/skill:text-gray-900 dark:group-hover/skill:text-white transition-colors duration-200">
                        {skill.name}
                      </span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-2 rounded-full bg-gradient-to-r ${
                              category.color
                            } transition-all duration-1000 ease-out transform origin-left ${
                              isVisible ? "scale-x-100" : "scale-x-0"
                            }`}
                            style={{
                              width: `${skill.level}%`,
                              transitionDelay: `${
                                index * 200 + skillIndex * 100
                              }ms`,
                            }}
                          />
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400 min-w-[3rem] font-mono">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
