import React, { useState } from "react";
import { Upload, Download, FileText, Eye, X, Sparkles } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const Resume: React.FC = () => {
  const [uploadedCV, setUploadedCV] = useState<File | null>(null);
  const [showPreview, setShowPreview] = useState(false);
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

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setUploadedCV(file);
    } else {
      alert("Please upload a PDF file");
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/AbdulBasit AI M.pdf";
    link.download = "Abdul_Basit_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Resume
            </h2>
            <Sparkles className="ml-3 w-8 h-8 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Download my latest resume or upload a new version
          </p>
        </div>

        <div>
          {/* Current Resume */}
          <div className="bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-8 text-center border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-slide-in-left">
            <div className="mb-6">
              <div
                className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${getAccentClasses()} rounded-full flex items-center justify-center shadow-lg animate-float`}
              >
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Current Resume
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Abdul Basit Resume.pdf
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleDownload}
                className={`w-full flex items-center justify-center space-x-2 px-4 py-3 ${getButtonClasses()} text-white rounded-lg transition-all duration-300 transform hover:scale-105 relative overflow-hidden group`}
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <span>Download Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>

              <button
                onClick={() => setShowPreview(true)}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
              >
                <Eye className="w-5 h-5" />
                <span>Preview</span>
              </button>
            </div>
          </div>
          {/* Upload New Resume
          <div className="bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-slide-in-right">
            <div className="mb-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg animate-float animation-delay-2000">
                <Upload className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Upload New Resume
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Upload a PDF file to replace your current resume
              </p>
            </div>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center hover:border-gray-400 dark:hover:border-gray-500 transition-colors group">
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileUpload}
                className="hidden"
                id="cv-upload"
              />
              <label
                htmlFor="cv-upload"
                className="cursor-pointer flex flex-col items-center space-y-2 group-hover:scale-105 transition-transform duration-200"
              >
                <Upload className="w-8 h-8 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Click to upload or drag and drop
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-500">
                  PDF files only
                </span>
              </label>
            </div>

            {uploadedCV && (
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg animate-fade-in">
                <p className="text-sm text-green-800 dark:text-green-300">
                  ✓ Successfully uploaded: {uploadedCV.name}
                </p>
              </div>
            )}
          </div> */}
        </div>

        {/* Experience Timeline */}
        <div className="mt-16 animate-fade-in-up animation-delay-600">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Experience
          </h3>
          <div className="relative">
            <div
              className={`absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b ${getAccentClasses()}`}
            ></div>

            <div className="space-y-8">
              {[
                {
                  date: "May 2022 - Present",
                  title: "Executive Software Engineer",
                  company: "SEEBIZ",
                  description:
                    "Developed and maintained MERN/MEAN stack applications. Collaborated with product managers and designers on UI/UX enhancements. Implemented RESTful APIs, integrated third-party services, and ensured code quality through reviews and testing.",
                },
                {
                  date: "2022",
                  title: "Web Developer Associate",
                  company: "THE YOU Company",
                  description:
                    "Internship role focused on web development. Proficient in MERN technologies and full-stack development. Collaborated within team environment on real-world projects.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative pl-10 animate-slide-in-right"
                  style={{ animationDelay: `${600 + index * 200}ms` }}
                >
                  <div
                    className={`absolute left-0 top-1 w-8 h-8 bg-gradient-to-r ${getAccentClasses()} rounded-full flex items-center justify-center shadow-lg animate-pulse`}
                  >
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-gray-200 dark:border-gray-700 group">
                    <div
                      className={`text-sm bg-gradient-to-r ${getAccentClasses()} bg-clip-text text-transparent font-semibold mb-1`}
                    >
                      {item.date}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {item.title}
                    </h4>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {item.company}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 animate-fade-in-up animation-delay-600">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Education
          </h3>
          <div className="relative">
            <div
              className={`absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b ${getAccentClasses()}`}
            ></div>

            <div className="space-y-8">
              {[
                {
                  date: "Present",
                  title: "Master's in Computer Science",
                  company: "Information Technology University of Punjab",
                  description:
                    "Pursuing advanced studies in Computer Science with focus on software architecture, AI/ML integration, and advanced web technologies.",
                },

                {
                  date: "2022",
                  title: "Bachelor in Computer Science",
                  company: "Government College University",
                  description:
                    "Completed Bachelor's degree in Computer Science with comprehensive understanding of software engineering, algorithms, and system design principles.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative pl-10 animate-slide-in-right"
                  style={{ animationDelay: `${600 + index * 200}ms` }}
                >
                  <div
                    className={`absolute left-0 top-1 w-8 h-8 bg-gradient-to-r ${getAccentClasses()} rounded-full flex items-center justify-center shadow-lg animate-pulse`}
                  >
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-gray-200 dark:border-gray-700 group">
                    <div
                      className={`text-sm bg-gradient-to-r ${getAccentClasses()} bg-clip-text text-transparent font-semibold mb-1`}
                    >
                      {item.date}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {item.title}
                    </h4>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {item.company}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-gray-200 dark:border-gray-700 animate-slide-in-up">
            <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Resume Preview
              </h3>
              <button
                onClick={() => setShowPreview(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors transform hover:scale-110 duration-200"
              >
                <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
            <div className="p-4 h-96 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <iframe
                src="/AbdulBasit AI M.pdf"
                className="w-full h-full border-0 rounded"
                title="Resume Preview"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Resume;
