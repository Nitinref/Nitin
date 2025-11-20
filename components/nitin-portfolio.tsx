"use client"

import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter, Moon, Sun, ExternalLink, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { TbBrandLeetcode } from 'react-icons/tb';

export default function NitinPortfolio() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = theme === "dark"

  // SOCIAL LINKS DATA
  const socialLinks = [
    { icon: Twitter, link: "https://x.com/NitinYa41170815" },
    { icon: Github, link: "https://github.com/Nitinref" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/nitin-yadav-8979b12aa/" },
    { icon: Mail, link: "mailto:nitinyadav484220@gmail.com" },
    { icon: TbBrandLeetcode, link: "https://leetcode.com/nitinref" }
  ]

  const projects = [
    {
      title: "getRepo.dev",
      description: "Making a dent in Open Source world",
      image: "/project-getrepo.png",
      link: "#"
    },
    {
      title: "Freelance Project",
      description: "A modern dietician app for a client",
      image: "/project-freelance.png",
      link: "#"
    },
    {
      title: "Radial – SaaS Landing Experience",
      description: "Collaborative project management tool template",
      image: "/project-radial.png",
      link: "#"
    },
    {
      title: "Portfolio",
      description: "Personal portfolio website showcasing my work and skills",
      image: "/project-portfolio.png",
      link: "#"
    },
    {
      title: "Zapier Clone",
      description: "Workflow webhook automation tool",
      image: "/project-zapier.png",
      link: "#"
    },
    {
      title: "R8R - Rapid Rag Runtime",
      description: "AI-powered RAG generation tool",
      image: "/3.png",
      link: "#"
    },
  ]

  const navItems = ["About", "Skills", "Contributions", "Projects", "Education"]

  return (
    <div className="min-h-screen bg-background transition-colors duration-300 relative overflow-x-hidden pb-32 md:pb-40">
      
      {/* --- HEADER AREA - RESPONSIVE --- */}
      <div className="relative w-full z-10">
        <div className="relative h-[30vh] sm:h-[35vh] w-full overflow-hidden">
          <CanvasRevealEffect
            animationSpeed={0.3}
            colors={isDark ? [[255, 255, 255]] : [[34, 197, 94], [255, 255, 255]]}
            opacities={isDark ? [0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] : [0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 1]}
            dotSize={2}
            showGradient={false}
            containerClassName="absolute inset-0"
          />
          <div className={`absolute inset-0 ${
            isDark ? "bg-gradient-to-b from-transparent via-transparent to-black" : "bg-gradient-to-b from-transparent via-transparent to-white"
          }`} />

          {/* Theme Toggle - Responsive */}
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`absolute top-4 right-4 md:top-6 md:right-6 z-30 p-2 md:p-3 rounded-full backdrop-blur-2xl border transition-all shadow-lg ${
              isDark ? "bg-white/10 border-white/30 hover:bg-white/20 text-white" : "bg-black/10 border-gray-300 hover:bg-black/15 text-gray-800"
            }`}
          >
            {isDark ? <Sun className="w-4 h-4 md:w-5 md:h-5" /> : <Moon className="w-4 h-4 md:w-5 md:h-5" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`absolute top-4 left-4 md:hidden z-40 p-2 rounded-lg backdrop-blur-2xl border transition-all ${
              isDark ? "bg-white/10 border-white/30 text-white" : "bg-black/10 border-gray-300 text-gray-800"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-16 left-4 right-4 z-40 md:hidden">
              <div className={`rounded-2xl p-4 backdrop-blur-2xl border shadow-2xl ${
                isDark ? "bg-black/80 border-white/20" : "bg-white/80 border-gray-200"
              }`}>
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        isDark 
                          ? "text-gray-300 hover:text-white hover:bg-white/10" 
                          : "text-gray-700 hover:text-gray-900 hover:bg-black/5"
                      }`}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* PROFILE HERO - RESPONSIVE */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6 -mt-16 md:-mt-20 relative z-20">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
            {/* Profile Image - Responsive */}
            <div className="relative">
              <img
                src="/download.jpg"
                alt="Nitin Yadav"
                className={`w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-4 shadow-2xl flex-shrink-0 ${
                  isDark ? "border-white/20 bg-black/40" : "border-gray-300/60 bg-white/60"
                }`}
                style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
              />
            </div>
            
            {/* Text Content - Responsive */}
            <div className="flex-1 text-center sm:text-left space-y-2 sm:space-y-3 pt-2 sm:pt-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Nitin Yadav
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground">Software Developer</p>
              <p className="text-sm sm:text-base text-muted-foreground">
                I build clean, simple, and impactful digital experiences.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground pt-1">Jabalpur, MP, India</p>

              {/* Social Icons - Responsive */}
              <div className="flex justify-center sm:justify-start gap-2 sm:gap-3 pt-3 sm:pt-4">
                {socialLinks.map((item, idx) => (
                  <a 
                    key={idx} 
                    href={item.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-2 sm:p-3 rounded-xl backdrop-blur-2xl transition-all shadow-lg border ${
                      isDark ? "bg-white/10 border-white/20 hover:bg-white/20 text-gray-300 hover:text-white" : "bg-black/10 border-gray-300 hover:bg-black/15 text-gray-700 hover:text-gray-900"
                    }`} 
                    style={{ backdropFilter: "blur(20px)" }}
                  >
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT - RESPONSIVE WITH NARROWER WIDTH */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16 md:space-y-24">
        
        {/* ABOUT & SKILLS */}
        <div className="space-y-16 md:space-y-24">
            {/* About Section */}
            <section id="about" className="space-y-4 md:space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                    I follow simplicity, pay attention to details, and trust my intuition to structure things in a way that just feels right. I think differently, and that's my strength. I move Fast.
                </p>
                <Button className={`mt-4 backdrop-blur-2xl shadow-lg border ${
                  isDark ? "bg-white/10 border-white/20 hover:bg-white/20 text-white" : "bg-black/10 border-gray-300 hover:bg-black/15 text-gray-900"
                }`} style={{ backdropFilter: "blur(20px)" }}>
                    Connect with Me!
                </Button>
            </section>

            {/* Skills Section */}
            <section id="skills" className="space-y-8 md:space-y-10">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Skills</h2>
                <div className="space-y-6 md:space-y-8">
                    {/* Frontend */}
                    <div>
                        <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-foreground">Frontend Development</h3>
                        <div className="flex flex-wrap gap-2 md:gap-3">
                            {["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"].map((skill) => (
                            <span key={skill} className={`px-3 py-2 md:px-4 md:py-2.5 rounded-lg text-xs md:text-sm backdrop-blur-xl shadow-sm border ${
                              isDark ? "bg-white/10 border-white/20 text-gray-300" : "bg-black/10 border-gray-300 text-gray-800"
                            }`}>
                                {skill}
                            </span>
                            ))}
                        </div>
                    </div>
                    
                    {/* Backend */}
                    <div>
                        <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-foreground">Backend & Database</h3>
                        <div className="flex flex-wrap gap-2 md:gap-3">
                            {["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "Prisma", "Monorepos", "Zod"].map((skill) => (
                            <span key={skill} className={`px-3 py-2 md:px-4 md:py-2.5 rounded-lg text-xs md:text-sm backdrop-blur-xl shadow-sm border ${
                              isDark ? "bg-white/10 border-white/20 text-gray-300" : "bg-black/10 border-gray-300 text-gray-800"
                            }`}>
                                {skill}
                            </span>
                            ))}
                        </div>
                    </div>
                    
                    {/* Deployment */}
                    <div>
                        <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-foreground">Deployment</h3>
                        <div className="flex flex-wrap gap-2 md:gap-3">
                            {["Git", "VS Code", "CiCd", "Docker", "Kubernetes"].map((skill) => (
                            <span key={skill} className={`px-3 py-2 md:px-4 md:py-2.5 rounded-lg text-xs md:text-sm backdrop-blur-xl shadow-sm border ${
                              isDark ? "bg-white/10 border-white/20 text-gray-300" : "bg-black/10 border-gray-300 text-gray-800"
                            }`}>
                                {skill}
                            </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>

        {/* OPEN SOURCE CONTRIBUTIONS */}
        <section id="contributions" className="space-y-6 md:space-y-8 pt-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Open Source Contributions</h2>
          
          <a 
            href="https://github.com/Nitinref" 
            target="_blank"
            rel="noopener noreferrer"
            className={`
              block p-4 md:p-6 rounded-2xl border shadow-sm overflow-hidden hover:opacity-95 transition-opacity
              ${isDark ? "border-white/10 bg-white/5" : "border-gray-200 bg-gray-50"}
            `}
          >
             <img 
               src={`https://ghchart.rshah.org/${isDark ? "4ade80" : "22c55e"}/Nitinref`} 
               alt="Nitin's Github Chart" 
               className="w-full h-auto"
             />
          </a>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="space-y-8 md:space-y-12 pt-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">I love to build stuff.</h2>
          
          <div className="grid grid-cols-1 gap-6 md:gap-8">
            {projects.map((project, idx) => (
              <a 
                key={idx} 
                href={project.link || "#"} 
                className="group block cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:underline underline-offset-4 decoration-2">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
                </div>

                <p className="text-muted-foreground mb-3 md:mb-4 text-xs md:text-sm">
                  {project.description}
                </p>

                <div 
                  className={`
                    overflow-hidden rounded-lg md:rounded-xl border shadow-sm transition-all
                    ${isDark ? "border-white/10 bg-white/5 shadow-black/20" : "border-gray-200 bg-gray-50/50 shadow-gray-200/50"}
                  `}
                >
                  <img
                    src={project.image || "/placeholder.svg?height=400&width=600"}
                    alt={project.title}
                    className="w-full h-40 md:h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="space-y-4 md:space-y-6 pt-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Education</h2>
            <div className="flex flex-col sm:flex-row items-start justify-between gap-4 md:gap-6">
              <div className="space-y-2 flex-1">
                <h3 className="text-lg md:text-xl font-semibold text-foreground">
                  Gyan Ganga Institute of Technology and Sciences, Jabalpur
                </h3>
                <p className="text-muted-foreground">B.Tech in Computer Science Engineering</p>
                <p className="text-xs md:text-sm text-muted-foreground">2023-2027</p>
              </div>
              <img 
                src="/1.jpg" 
                alt="GGITS Logo" 
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain flex-shrink-0" 
              />
            </div>
        </section>
      </div>

      {/* FLOATING DOCK - RESPONSIVE */}
      <div className="fixed bottom-4 md:bottom-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
        <nav 
          className={`
            pointer-events-auto
            flex gap-1 md:gap-2 px-3 md:px-4 py-2 md:py-3 rounded-full 
            border shadow-xl max-w-max
            transition-all duration-300
            ${isDark ? "bg-black/40 border-white/20 shadow-black/50 text-gray-300" : "bg-white/40 border-gray-300 shadow-gray-200/50 text-gray-700"}
          `}
          style={{ backdropFilter: "blur(20px) saturate(180%)", WebkitBackdropFilter: "blur(20px) saturate(180%)" }}
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`
                px-2 py-1 md:px-3 md:py-1.5 rounded-full text-xs font-medium transition-all
                hover:scale-105 active:scale-95 whitespace-nowrap
                ${isDark ? "hover:bg-white/20 hover:text-white" : "hover:bg-white/60 hover:text-black"}
              `}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

    </div>
  )
}