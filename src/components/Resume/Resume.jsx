import { useState, useCallback, useMemo } from 'react'
import { FaDownload, FaEye, FaFilePdf, FaSpinner, FaGraduationCap, FaCertificate, FaAward, FaCode, FaBriefcase, FaLaptopCode, FaCheckCircle } from 'react-icons/fa'
import SEOHead from '../SEO/SEOHead'
import { SEO_CONFIGS } from '../SEO/seoConfigs'
import { motion, AnimatePresence } from 'framer-motion'

function Resume() {
  const [showPDF, setShowPDF] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [pdfError, setPdfError] = useState(false)

  // Use useCallback to prevent unnecessary re-renders
  const handleViewPDF = useCallback(() => {
    setIsLoading(true)
    setPdfError(false)
    // Reduced loading time for better UX
    setTimeout(() => {
      setIsLoading(false)
      setShowPDF(true)
    }, 500)
  }, [])

  const handleDownloadPDF = useCallback(() => {
    const link = document.createElement('a')
    link.href = '/documents/Shrishti_Resume.pdf'
    link.download = 'Shrishti_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [])

  // Education data - also memoized with real information
  const education = useMemo(() => [
    {
      degree: "Bachelor of Computer Science Engineering",
      institution: "Sharda University",
      period: "2023 - Present",
      location: "Noida, India",
      gpa: "8.2/10",
      details: "Final-year Computer Science Engineering student with a strong background in Java, Data Structures & Algorithms, and Full Stack Development. Passionate about building scalable web applications."
    }
  ], []);

  // Certifications - memoized with real project-based accomplishments
  const certifications = useMemo(() => [
    {
      name: "Web Development Bootcamp",
      issuer: "Udemy",
      year: "2024",
      details: "Comprehensive full-stack web development course covering HTML, CSS, JavaScript, React, Node.js and more."
    },
    {
      name: "Sustainable Development",
      issuer: "NPTEL",
      year: "2026",
      details: "Certified in Sustainable Development principles and practices through the National Programme on Technology Enhanced Learning."
    },
    {
      name: "Java Fundamentals",
      issuer: "Oracle Academy",
      year: "2025",
      details: "Certified in Java Fundamentals by Oracle Academy, covering core Java programming concepts and object-oriented design."
    }
  ], []);

  // Skills data
  const skills = useMemo(() => [
    { category: "Programming Languages", items: ["C", "Python", "Java", "SQL"] },
    { category: "Web Technologies", items: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"] },
    { category: "Backend Development", items: ["Node.js", "Express.js", "RESTful APIs", "MySQL", "MongoDB"] },
    { category: "Tools & Platforms", items: ["Git", "GitHub", "VSCode", "Docker", "MS Excel", "IntelliJ IDEA"] },
    { category: "Interpersonal Skills", items: ["Adaptability", "Leadership", "Problem-Solving", "Time Management", "Teamwork"] }
  ], []);

  // Internships data
  const internships = useMemo(() => [
    {
      role: "Web Development Intern",
      company: "GAO Tek Inc.",
      period: "May 2026 - July 2026",
      points: [
        "Built and enhanced reusable UI components using React.js, resulting in improved application scalability and maintainability.",
        "Collaborated with team members to troubleshoot UI issues, implement design improvements, and enhance website usability based on project requirements."
      ]
    }
  ], []);

  return (
    <>
      <SEOHead {...SEO_CONFIGS.resume} />
      <section className="section-padding pt-28">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.button
              onClick={handleDownloadPDF}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect border border-neutral-700/50 mb-8 hover:border-blue-500/50 hover:bg-neutral-800/50 transition-all cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <FaFilePdf className="w-6 h-6 text-blue-400" />
              <span className="text-lg font-semibold text-neutral-300">
                Professional Resume
              </span>
            </motion.button>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              My <span className="gradient-text">Resume</span>
            </motion.h1>

            <motion.div 
              className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-8 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />

            <motion.p 
              className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Download my complete resume or view it online to learn more about 
              my professional experience, skills, and achievements.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button
                onClick={handleViewPDF}
                disabled={isLoading}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-neutral-900 font-semibold rounded-lg transition-all duration-300 min-w-[160px] justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <FaSpinner className="w-5 h-5 animate-spin mx-auto" />
                ) : (
                  <>
                    <FaEye className="w-5 h-5" />
                    View PDF
                  </>
                )}
              </button>
              
              <button
                onClick={handleDownloadPDF}
                className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-600 hover:border-blue-500 hover:text-blue-500 text-neutral-300 font-semibold rounded-lg transition-all duration-300 min-w-[160px] justify-center"
              >
                <FaDownload className="w-5 h-5" />
                Download PDF
              </button>
            </motion.div>

          </div>

          {/* PDF Viewer */}
          <AnimatePresence>
            {showPDF && (
              <motion.div
                className="mb-16"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
              >
                <div className="glass-effect rounded-2xl p-8 border border-neutral-700/50">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-neutral-100">
                        Resume Preview
                      </h3>
                      <p className="text-neutral-400 text-sm mt-1">
                        Shrishti_Resume.pdf
                      </p>
                    </div>
                    <motion.button
                      onClick={() => setShowPDF(false)}
                      className="text-neutral-400 hover:text-neutral-200 text-2xl p-2 hover:bg-neutral-700/50 rounded-lg transition-all duration-300"
                      whileHover={{ rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      ×
                    </motion.button>
                  </div>
                  <div className="bg-neutral-800/50 rounded-xl p-4">
                    <iframe
                      src="/documents/Shrishti_Resume.pdf#toolbar=1&navpanes=1&scrollbar=1&page=1&view=FitH"
                      className="w-full h-[600px] rounded-lg border border-neutral-700/30"
                      title="Resume PDF"
                      loading="lazy"
                      onError={() => setPdfError(true)}
                      onLoad={() => setPdfError(false)}
                    />
                    
                    {/* Fallback for browsers that don't support PDF viewing */}
                    <div className={`text-center mt-4 p-4 bg-neutral-700/30 rounded-lg ${pdfError ? 'bg-red-900/20 border border-red-500/30' : ''}`}>
                      <p className="text-neutral-400 text-sm mb-3">
                        {pdfError ? 'PDF failed to load, but you can still access it!' : "Can't see the PDF? No problem!"}
                      </p>
                      <div className="flex gap-4 justify-center">
                        <a
                          href="/documents/Shrishti_Resume.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-neutral-900 font-medium px-4 py-2 rounded-lg text-sm transition-colors duration-300"
                        >
                          <FaEye className="text-sm" />
                          View in Browser
                        </a>
                        <button
                          onClick={handleDownloadPDF}
                          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300"
                        >
                          <FaDownload className="text-sm" />
                          Download PDF
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          {/* Internships */}
          <div className="mb-16">
            {/* Internships */}
            <div className="flex flex-col">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect border border-neutral-700/50 mb-4">
                  <FaBriefcase className="w-5 h-5 text-blue-400" />
                  <span className="text-lg font-semibold text-neutral-300">Experience</span>
                </div>
                <h2 className="text-2xl font-bold gradient-text">Internships</h2>
              </div>
              <div className="flex-1 space-y-4">
                {internships.map((internship, index) => (
                  <motion.div
                    key={index}
                    className="glass-effect rounded-2xl p-6 border border-neutral-700/50"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-bold text-neutral-100 mb-1">{internship.role}</h3>
                    <p className="text-blue-400 font-semibold mb-2">{internship.company}</p>
                    <p className="text-neutral-400 text-sm mb-4">{internship.period}</p>
                    <ul className="space-y-2">
                      {internship.points.map((point, i) => (
                        <li key={i} className="flex gap-3 text-neutral-300 text-sm leading-relaxed">
                          <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            {/* Education */}
            <div className="min-h-[600px] flex flex-col">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect border border-neutral-700/50 mb-4">
                  <FaGraduationCap className="w-5 h-5 text-blue-400" />
                  <span className="text-lg font-semibold text-neutral-300">
                    Education
                  </span>
                </div>
                <h2 className="text-2xl font-bold gradient-text">
                  Academic Background
                </h2>
              </div>

              <div className="flex-1">
                {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="glass-effect rounded-2xl p-6 border border-neutral-700/50"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <h3 className="text-lg font-bold text-neutral-100 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-blue-400 font-semibold mb-1">
                    {edu.institution}
                  </p>
                  <div className="flex justify-between items-center text-neutral-400 text-sm mb-2">
                    <span>{edu.period}</span>
                    <span>{edu.location}</span>
                  </div>
                  <p className="text-neutral-300 font-semibold mb-3">
                    GPA: {edu.gpa}
                  </p>
                  {edu.details && (
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </motion.div>
              ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="min-h-[600px] flex flex-col">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect border border-neutral-700/50 mb-4">
                  <FaCertificate className="w-5 h-5 text-blue-400" />
                  <span className="text-lg font-semibold text-neutral-300">
                    Certifications
                  </span>
                </div>
                <h2 className="text-2xl font-bold gradient-text">
                  Professional Certifications
                </h2>
              </div>

              <div className="flex-1">
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="glass-effect rounded-xl p-6 border border-neutral-700/50"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <FaAward className="text-blue-400" />
                      <h3 className="font-bold text-neutral-100">
                        {cert.name}
                      </h3>
                    </div>
                    <p className="text-neutral-400 text-sm mb-2">
                      {cert.issuer} • {cert.year}
                    </p>
                    {cert.details && (
                      <p className="text-neutral-300 text-sm leading-relaxed">
                        {cert.details}
                      </p>
                    )}
                  </motion.div>
                ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Resume
