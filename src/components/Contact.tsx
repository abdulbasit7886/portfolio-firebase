import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Sparkles,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
    alert("Thank you for your message! I'll get back to you soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-pink-400/20 to-yellow-400/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Get In Touch
            </h2>
            <Sparkles className="ml-3 w-8 h-8 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'd love to hear from you! Whether you have a project in mind or
            just want to say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                I'm always open to discussing new opportunities, creative
                projects, or potential collaborations.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  info: "abdulbasit99786@gmail.com",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  info: "+92 348-7827294",
                  color: "from-green-500 to-green-600",
                },
                {
                  icon: MapPin,
                  title: "Location",
                  info: "Lahore, Punjab, Pakistan",
                  color: "from-purple-500 to-purple-600",
                },
              ].map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-4 group animate-slide-in-right"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        {contact.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {contact.info}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-8 animate-fade-in-up animation-delay-600">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {[
                  {
                    icon: Github,
                    color: "bg-gray-900 hover:bg-gray-800",
                    link: "https://github.com/abdulbasit7886",
                  },
                  {
                    icon: Linkedin,
                    color: "bg-blue-600 hover:bg-blue-700",
                    link: "https://www.linkedin.com/in/abdulbasit-dev/",
                  },
                  {
                    icon: Mail,
                    color: "bg-red-500 hover:bg-blue-700",
                    link: "mailto:abdulbasit99786@gmail.com",
                  },
                  // { icon: Twitter, color: 'bg-sky-500 hover:bg-sky-600' },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 ${social.color} rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg animate-bounce-slow`}
                      style={{ animationDelay: `${600 + index * 200}ms` }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 animate-slide-in-right">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="animate-slide-in-left">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200 transform focus:scale-105"
                    placeholder="Your name"
                  />
                </div>

                <div className="animate-slide-in-right animation-delay-200">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200 transform focus:scale-105"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="animate-slide-in-left animation-delay-400">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200 transform focus:scale-105"
                  placeholder="What's this about?"
                />
              </div>

              <div className="animate-slide-in-right animation-delay-600">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200 transform focus:scale-105"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                className={`w-full flex items-center justify-center space-x-2 px-6 py-3 ${getButtonClasses()} text-white rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group animate-fade-in-up animation-delay-800`}
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                <span>Send Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
