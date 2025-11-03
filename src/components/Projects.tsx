import { ExternalLink, Github, Sparkles, Upload, X } from "lucide-react";
import React, { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const Projects: React.FC = () => {
  const { accentColor } = useTheme();
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      title: "HRMS - Human Resource Management System",
      description:
        "Scalable production-ready HRMS built with React, Express.js, and MongoDB. Deployed on AWS EC2 with S3 storage. Features include payroll processing, attendance tracking, role-based access, and secure document management.",
      image: "/images/hrms-dashboard.jpg",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "JWT Auth"],
      liveUrl: "https://www.seebiz.com/login",
      githubUrl: "#",
    },
    {
      id: "2",
      title: "Krub.ai - Customer Feedback SaaS",
      description:
        "Multi-tenant SaaS platform with Next.js frontend and real-time dashboards powered by WebSockets. Implemented feedback capture, sentiment aggregation, and analytics for product teams.",
      image: "/images/krub.png",
      technologies: ["Next.js", "Node.js", "WebSockets", "MongoDB", "SaaS"],
      liveUrl: "https://krub.ai/",
      githubUrl: "#",
    },
    {
      id: "3",
      title: "AI Document Chatbot (RAG System)",
      description:
        "Intelligent Q&A system using OpenAI GPT, LangChain, and Qdrant vector database. Features PDF ingestion, semantic embeddings, and retrieval-augmented generation with Next.js UI.",
      image: "/images/chatbot.png",
      technologies: ["Next.js", "GPT", "LangChain", "Qdrant", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "4",
      title: "Point of Sale (POS) System",
      description:
        "Enterprise POS platform built with Angular, TypeScript, and Express.js. Features inventory control, billing, transaction reconciliation, and offline-capable UI patterns.",
      image: "/images/pos.png",
      technologies: [
        "Angular",
        "TypeScript",
        "Nest.js",
        "postgresql",
        "Firebase",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "5",
      title: "Image Search with CLIP + Vector DB",
      description:
        "Semantic image search engine using CLIP embeddings and Qdrant vector database. Implemented with FastAPI backend and Next.js frontend for real-time contextual media retrieval.",
      image: "/images/similarimage.png",
      technologies: ["Next.js", "CLIP", "Qdrant", "FastAPI", "Python"],
      liveUrl: "http://abdulbasitdev.tech/",
      githubUrl: "#",
    },
    {
      id: "6",
      title: "Travel Booking Portal (Beltravel.lv)",
      description:
        "Full-featured travel booking platform with dynamic inventory, geo-based search, and payment integration. Supports availability calendars, dynamic pricing, and Stripe/PayPal payments.",
      image: "/images/beltravel.png",
      technologies: ["Next.js", "Nest.js", "postgresql", "Stripe"],
      liveUrl: "https://beltravel.lv/",
      githubUrl: "#",
    },
    {
      id: "7",
      title: "Inventory Management Systems (IMS)",
      description:
        "Inventory tracking system for managing stock, orders, and reporting. Integrates Firebase authentication and provides real-time stock updates, low-stock alerts, and a cloud-hosted dashboard.",
      image: "/images/inventory.png",
      technologies: ["React (TypeScript)", "Firebase", "AWS EC2"],
      liveUrl: "https://inventory.seebiz.com/",
      githubUrl: "#",
    },
    {
      id: "8",
      title: " Refino.se - Loan Platform",
      description:
        "  Developed a high-performance property listing site using React and SEO-first rendering techniques (Storybook· Next.js). Implemented multi-faceted search, advanced filters, bookmarking, and agent contact workflows to drive lead capture and CRM integration.Delivered improved search relevance, faster page loads, and higher user engagement for property discovery.",
      image: "/images/refino.png",
      technologies: ["Next.js", "StoryBook", "postgresql", "Stripe"],
      liveUrl: "https://refino.se/",
      githubUrl: "#",
    },
    {
      id: "9",
      title: "Law Forma - Dynamic Form Builder",
      description:
        "Drag-and-drop dynamic form builder with conditional logic integrated into the Seebiz ecosystem. Built for form automation, reusability, and enterprise workflows.",
      image: "/images/forma.png",
      technologies: ["React (TypeScript)", "Formik", "Redux", "AWS"],
      liveUrl: "https://forma.seebiz.cloud/",
      githubUrl: "#",
    },

    {
      id: "10",
      title: "Books Management System (BMS)",
      description:
        "A book inventory system built for bookstores and institutions. Includes stock tracking, order logs, and user authentication.",
      image: "/images/books.png",
      technologies: [
        "React (TypeScript)",
        "Formik",
        "Redux",
        "Manage book inventory with search and filter",
        "Activity history and order logs",
      ],
      liveUrl: "https://books.seebiz.com/",
      githubUrl: "#",
    },
    {
      id: "11",
      title: " Marklabinc.com - Revenue Cycle Management (RCM) Portal",
      description:
        "Developed a healthcare billing and RCM portal using React, TypeScript, Node/Express and MongoDB with RBAC and secure APIs (Healthcare · RCM · RBAC).Implemented claim submission/tracking, denial analytics, and financial dashboards showing KPIs such as claims status and A/R trends.Streamlined billing workflows and increased visibility into revenue operations for healthcare providers.",
      image: "/images/marklab.png",
      technologies: ["Next (TypeScript)", "Formik", "Redux", "Firebase"],
      liveUrl: "https://marklabinc.com/",
      githubUrl: "#",
    },
    {
      id: "13",
      title: " Seebiz.com - Centralized Enterprise Portal",
      description:
        " Engineered a centralized enterprise portal using Angular ts-frontends, Node/Express and JWT-based authentication for large-scale internal systems (micro-frontend · RBAC · AWS).Integrated HRMS, Forma, and other internal tools under a single RBAC-secured hub with modular deployments.Improved employee experience and deployment velocity by enabling independent module releases and central access control",
      image: "/images/seebiz.png",
      technologies: [
        "Angular",
        "TypeScript",
        "Express.js",
        "MongoDB",
        "Firebase",
      ],
      liveUrl: "https://www.seebiz.com/",
      githubUrl: "#",
    },

    {
      id: "14",
      title: " Fidelen.sa - B2B Service Procurement Marketplace ",
      description:
        "Architected a two-sided marketplace (Next · Node · MongoDB) with RFQ bidding, vendor verification, milestone-based escrow payments and contract management.Built vendor portals, client RFQ flows, and dispute/escrow logic to secure payments and manage project milestones.Facilitated transparent procurement processes and lowered transaction friction across enterprise service contracts",
      image: "/images/fidelen.png",
      technologies: ["Next (TypeScript)", "Formik", "Redux"],
      liveUrl: "https://fidelen.sa/en",
      githubUrl: "#",
    },
    {
      id: "12",
      title: "Expense Management System (EMS)",
      description:
        "Expense Management System is a web-based platform designed to simplify and automate the process of managing employee trips, expenses, reports, and advances. It provides separate views for users based on their role — such as Submitter, Approver, and Admin — making the workflow smooth and efficient",
      image: "/images/expense.png",
      technologies: [
        "Next (TypeScript)",
        "Formik",
        "Redux",
        "MongoDB",
        "Firebase",
      ],
      liveUrl: "http://expense.seebiz.com/",
      githubUrl: "#",
    },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    image: "",
    technologies: "",
    liveUrl: "",
    githubUrl: "",
  });

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

  const getButtonClasses = () => {
    const colorMap = {
      blue: "bg-blue-600 hover:bg-blue-700",
      purple: "bg-purple-600 hover:bg-purple-700",
      green: "bg-green-600 hover:bg-green-700",
      pink: "bg-pink-600 hover:bg-pink-700",
      orange: "bg-orange-600 hover:bg-orange-700",
      teal: "bg-teal-600 hover:bg-teal-700",
    };
    return colorMap[accentColor as keyof typeof colorMap] || colorMap.blue;
  };

  const handleAddProject = () => {
    if (newProject.title && newProject.description) {
      const project: Project = {
        id: Date.now().toString(),
        title: newProject.title,
        description: newProject.description,
        image: newProject.image,
        technologies: newProject.technologies
          .split(",")
          .map((tech) => tech.trim()),
        liveUrl: newProject.liveUrl,
        githubUrl: newProject.githubUrl,
      };
      setProjects([...projects, project]);
      setNewProject({
        title: "",
        description: "",
        image: "",
        technologies: "",
        liveUrl: "",
        githubUrl: "",
      });
      setShowAddModal(false);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProject({ ...newProject, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-20 w-72 h-72 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              My Projects
            </h2>
            <Sparkles className="ml-3 w-8 h-8 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects I've worked on, showcasing my skills and
            experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:scale-105 animate-fade-in-up border border-gray-200 dark:border-gray-700"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (
                      project.id === "1" &&
                      target.src.includes("/images/hrms-dashboard.jpg")
                    ) {
                      target.src =
                        "https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg?auto=compress&cs=tinysrgb&w=800";
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className={`w-3 h-3 bg-gradient-to-r ${getAccentClasses()} rounded-full animate-pulse`}
                  ></div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 bg-gradient-to-r ${getAccentClasses()} text-white text-xs rounded-full transform hover:scale-110 transition-transform duration-200 animate-fade-in`}
                      style={{
                        animationDelay: `${index * 200 + techIndex * 100}ms`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium transform hover:scale-105 transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-sm font-medium transform hover:scale-105 transition-all duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center animate-fade-in-up animation-delay-600">
          <button
            onClick={() => setShowAddModal(true)}
            className={`inline-flex items-center space-x-2 px-6 py-3 ${getButtonClasses()} text-white rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group`}
          >
            <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            <span>Add New Project</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </div> */}
      </div>

      {/* Add Project Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700 animate-slide-in-up">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Add New Project
                </h3>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors transform hover:scale-110 duration-200"
                >
                  <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="animate-slide-in-left">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Title
                  </label>
                  <input
                    type="text"
                    value={newProject.title}
                    onChange={(e) =>
                      setNewProject({ ...newProject, title: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200"
                    placeholder="Enter project title"
                  />
                </div>

                <div className="animate-slide-in-right animation-delay-200">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Description
                  </label>
                  <textarea
                    value={newProject.description}
                    onChange={(e) =>
                      setNewProject({
                        ...newProject,
                        description: e.target.value,
                      })
                    }
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200"
                    placeholder="Describe your project"
                  />
                </div>

                <div className="animate-slide-in-left animation-delay-400">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Image
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg cursor-pointer transition-colors transform hover:scale-105 duration-200"
                    >
                      <Upload className="w-4 h-4" />
                      <span>Upload Image</span>
                    </label>
                    {newProject.image && (
                      <img
                        src={newProject.image}
                        alt="Preview"
                        className="w-16 h-16 object-cover rounded-lg border-2 border-gray-200 dark:border-gray-600"
                      />
                    )}
                  </div>
                </div>

                <div className="animate-slide-in-right animation-delay-600">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Technologies (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={newProject.technologies}
                    onChange={(e) =>
                      setNewProject({
                        ...newProject,
                        technologies: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200"
                    placeholder="React, Node.js, MongoDB"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="animate-slide-in-left animation-delay-800">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Live URL (optional)
                    </label>
                    <input
                      type="url"
                      value={newProject.liveUrl}
                      onChange={(e) =>
                        setNewProject({
                          ...newProject,
                          liveUrl: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200"
                      placeholder="https://example.com"
                    />
                  </div>

                  <div className="animate-slide-in-right animation-delay-800">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      GitHub URL (optional)
                    </label>
                    <input
                      type="url"
                      value={newProject.githubUrl}
                      onChange={(e) =>
                        setNewProject({
                          ...newProject,
                          githubUrl: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200"
                      placeholder="https://github.com/username/repo"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3 mt-6 animate-fade-in-up animation-delay-1000">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors transform hover:scale-105 duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddProject}
                  className={`px-4 py-2 ${getButtonClasses()} text-white rounded-lg transition-colors transform hover:scale-105 duration-200`}
                >
                  Add Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
