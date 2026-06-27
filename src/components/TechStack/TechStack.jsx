import { useMemo } from 'react'
import { motion } from 'framer-motion'
import SEOHead from '../SEO/SEOHead'
import { SEO_CONFIGS } from '../SEO/seoConfigs'
import { 
  SiReact, 
  SiTailwindcss, 
  SiHtml5,
  SiCss,
  SiJavascript,
  SiC,
  SiPython,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiDocker,
  SiIntellijidea
} from 'react-icons/si'
import { FaDatabase, FaRocket, FaJava, FaCode, FaTools, FaFileExcel, FaUsers, FaUserTie, FaPuzzlePiece, FaClock, FaSync } from 'react-icons/fa'

function TechStack() {
  // Tech Stack data organized by categories
  const techCategories = useMemo(() => [
    {
      id: 1,
      title: "Programming Languages",
      icon: FaCode,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      technologies: [
        { name: "C", icon: SiC, level: "Advanced", color: "#A8B9CC" },
        { name: "Python", icon: SiPython, level: "Advanced", color: "#3776AB" },
        { name: "Java", icon: FaJava, level: "Expert", color: "#ED8B00" },
        { name: "SQL", icon: FaDatabase, level: "Advanced", color: "#4479A1" }
      ]
    },
    {
      id: 2,
      title: "Web Technologies",
      icon: FaRocket,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      technologies: [
        { name: "React.js", icon: SiReact, level: "Advanced", color: "#61DAFB" },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: "Expert", color: "#06B6D4" },
        { name: "HTML5", icon: SiHtml5, level: "Expert", color: "#E34F26" },
        { name: "CSS3", icon: SiCss, level: "Expert", color: "#1572B6" },
        { name: "JavaScript", icon: SiJavascript, level: "Expert", color: "#F7DF1E" }
      ]
    },
    {
      id: 3,
      title: "Backend Development",
      icon: FaDatabase,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      technologies: [
        { name: "Node.js", icon: SiNodedotjs, level: "Advanced", color: "#339933" },
        { name: "Express.js", icon: SiExpress, level: "Advanced", color: "#000000" },
        { name: "RESTful APIs", icon: FaCode, level: "Advanced", color: "#FF6B6B" },
        { name: "MySQL", icon: SiMysql, level: "Advanced", color: "#4479A1" },
        { name: "MongoDB", icon: SiMongodb, level: "Intermediate", color: "#47A248" }
      ]
    },
    {
      id: 4,
      title: "Tools & Platforms",
      icon: FaTools,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      technologies: [
        { name: "Git", icon: SiGit, level: "Advanced", color: "#F05032" },
        { name: "GitHub", icon: SiGithub, level: "Advanced", color: "#181717" },
        { name: "VS Code", icon: FaCode, level: "Expert", color: "#007ACC" },
        { name: "Docker", icon: SiDocker, level: "Intermediate", color: "#2496ED" },
        { name: "MS Excel", icon: FaFileExcel, level: "Advanced", color: "#217346" },
        { name: "IntelliJ IDEA", icon: SiIntellijidea, level: "Expert", color: "#000000" }
      ]
    },
    {
      id: 5,
      title: "Interpersonal Skills",
      icon: FaUsers,
      color: "text-rose-400",
      bgColor: "bg-rose-500/10",
      borderColor: "border-rose-500/20",
      technologies: [
        { name: "Adaptability", icon: FaSync, level: "Expert", color: "#F43F5E" },
        { name: "Leadership", icon: FaUserTie, level: "Advanced", color: "#FB923C" },
        { name: "Problem-Solving", icon: FaPuzzlePiece, level: "Expert", color: "#A78BFA" },
        { name: "Time Management", icon: FaClock, level: "Expert", color: "#34D399" },
        { name: "Teamwork", icon: FaUsers, level: "Expert", color: "#60A5FA" }
      ]
    }
  ], [])



  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert': return 'text-blue-400'
      case 'Advanced': return 'text-blue-300'
      case 'Intermediate': return 'text-yellow-400'
      case 'Proficient': return 'text-blue-500'
      default: return 'text-neutral-400'
    }
  }

  return (
    <>
      <SEOHead {...SEO_CONFIGS.techStack} />
      <section className="section-padding pt-28">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect border border-neutral-700/50 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaCode className="w-6 h-6 text-blue-400" />
              <span className="text-lg font-semibold text-neutral-300">
                Technology Stack
              </span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="gradient-text">Technologies</span> & Tools
            </motion.h1>

            <motion.p 
              className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A comprehensive overview of the technologies, frameworks, and tools I use to build 
              modern, scalable applications. From backend development to cloud deployment.
            </motion.p>
          </div>

          {/* Tech Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {techCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon
              return (
                <motion.div
                  key={category.id}
                  className={`glass-effect rounded-2xl p-6 border ${category.borderColor} ${category.bgColor}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-100">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.technologies.map((tech, techIndex) => {
                      const TechIcon = tech.icon
                      return (
                        <motion.div
                          key={techIndex}
                          className="flex items-center justify-between p-3 bg-neutral-800/30 rounded-lg border border-neutral-700/30"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + techIndex * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ 
                            x: 5,
                            backgroundColor: "rgba(38, 38, 38, 0.5)"
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <TechIcon 
                              className="w-5 h-5" 
                              style={{ color: tech.color }}
                            />
                            <span className="font-medium text-neutral-200">
                              {tech.name}
                            </span>
                          </div>
                          <span className={`text-sm font-semibold ${getLevelColor(tech.level)}`}>
                            {tech.level}
                          </span>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              )
            })}
          </div>




        </div>
      </section>
    </>
  )
}

export default TechStack
