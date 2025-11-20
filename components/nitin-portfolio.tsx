"use client"

import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter, Moon, Sun, ExternalLink  } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
       import { TbBrandLeetcode } from 'react-icons/tb';
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

export default function NitinPortfolio() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // --- SCROLL LOGIC ---
  const { scrollYProgress } = useScroll()
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const yPosition = useTransform(smoothProgress, [0, 1], ["0vh", "100vh"])

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

  return (
    <div className="min-h-screen bg-background transition-colors duration-300 relative overflow-x-hidden pb-40">
      
      {/* --- LEFT SIDE BEAM --- */}
      <div className="fixed left-6 md:left-12 top-0 bottom-0 z-40 flex flex-col items-center w-[2px]">
        <div className="absolute inset-0 w-[1px] bg-gradient-to-b from-transparent via-gray-300/50 dark:via-gray-700/50 to-transparent" />
        <motion.div
          style={{ y: yPosition }}
          className="absolute top-0 -ml-[1px]" 
        >
           <div className={`w-[3px] h-32 bg-gradient-to-b from-transparent ${isDark ? "via-white to-transparent" : "via-green-500 to-transparent"}`} />
           <div className={`absolute bottom-0 -left-[3px] w-2.5 h-8 rounded-full blur-[6px] ${isDark ? "bg-white shadow-[0_0_20px_white]" : "bg-green-400 shadow-[0_0_20px_#4ade80]"}`} />
           <div className={`absolute bottom-1 -left-[1px] w-1.5 h-6 rounded-full bg-white`} />
        </motion.div>
      </div>


      {/* --- HEADER AREA --- */}
      <div className="relative w-full z-10">
        <div className="relative h-[35vh] w-full overflow-hidden">
          <CanvasRevealEffect
            animationSpeed={0.3}
            colors={isDark ? [[255, 255, 255]] : [[34, 197, 94], [255, 255, 255]]}
            opacities={isDark ? [0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] : [0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 1]}
            dotSize={2}
            showGradient={false}
            containerClassName="absolute inset-0"
          />
          <div className={`absolute inset-0 ${isDark ? "bg-gradient-to-b from-transparent via-transparent to-black" : "bg-gradient-to-b from-transparent via-transparent to-white"}`} />

          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`absolute top-6 right-6 z-30 p-3 rounded-full backdrop-blur-2xl border transition-all shadow-lg ${isDark ? "bg-white/10 border-white/30 hover:bg-white/20 text-white" : "bg-black/10 border-gray-300 hover:bg-black/15 text-gray-800"}`}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        {/* PROFILE HERO */}
        <div className="max-w-4xl mx-auto px-8 md:px-12 -mt-20 relative z-20">
          <div className="flex items-start gap-8">
            <img
              src="/download.jpg"
              alt="Nitin Yadav"
              className={`w-40 h-40 rounded-full border-4 shadow-2xl flex-shrink-0 ${isDark ? "border-white/20 bg-black/40" : "border-gray-300/60 bg-white/60"}`}
              style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
            />
            <div className="flex-1 pt-4 space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground">Nitin Yadav</h1>
              <p className="text-lg text-muted-foreground">Software Developer.</p>
              <p className="text-base text-muted-foreground">I build clean, simple, and impactful digital experiences.</p>
              <p className="text-sm text-muted-foreground pt-1">Jabalpur, MP, India</p>

              {/* Social Icons */}
              <div className="flex gap-3 pt-4">
                {socialLinks.map((item, idx) => (
                  <a 
                    key={idx} 
                    href={item.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl backdrop-blur-2xl transition-all shadow-lg border ${isDark ? "bg-white/10 border-white/20 hover:bg-white/20 text-gray-300 hover:text-white" : "bg-black/10 border-gray-300 hover:bg-black/15 text-gray-700 hover:text-gray-900"}`} 
                    style={{ backdropFilter: "blur(20px)" }}
                  >
                    <item.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 md:px-12 py-16 space-y-24">
        
        {/* ABOUT & SKILLS */}
        <div className="max-w-4xl mx-auto space-y-24">
            <section id="about" className="space-y-6">
                <h2 className="text-4xl font-bold text-foreground">About Me</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                    I follow simplicity, pay attention to details, and trust my intuition to structure things in a way that just feels right. I think differently, and that's my strength. I move Fast.
                </p>
                <Button className={`mt-4 backdrop-blur-2xl shadow-lg border ${isDark ? "bg-white/10 border-white/20 hover:bg-white/20 text-white" : "bg-black/10 border-gray-300 hover:bg-black/15 text-gray-900"}`} style={{ backdropFilter: "blur(20px)" }}>
                    Connect with Me!
                </Button>
            </section>

            <section id="skills" className="space-y-10">
                <h2 className="text-4xl font-bold text-foreground">Skills</h2>
                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-foreground">Frontend Development</h3>
                        <div className="flex flex-wrap gap-3">
                            {["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"].map((skill) => (
                            <span key={skill} className={`px-5 py-2.5 rounded-xl text-sm backdrop-blur-xl shadow-sm border ${isDark ? "bg-white/10 border-white/20 text-gray-300" : "bg-black/10 border-gray-300 text-gray-800"}`}>
                                {skill}
                            </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-foreground">Backend & Database</h3>
                        <div className="flex flex-wrap gap-3">
                            {["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs" , "Prisma" , "Monorepos" , "Zod"].map((skill) => (
                            <span key={skill} className={`px-5 py-2.5 rounded-xl text-sm backdrop-blur-xl shadow-sm border ${isDark ? "bg-white/10 border-white/20 text-gray-300" : "bg-black/10 border-gray-300 text-gray-800"}`} style={{ backdropFilter: "blur(16px)" }}>
                                {skill}
                            </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-foreground">Deployment</h3>
                        <div className="flex flex-wrap gap-3">
                            {[ "Git", "VS Code","CiCd" , "Docker" , "Kuberneties" ].map((skill) => (
                            <span key={skill} className={`px-5 py-2.5 rounded-xl text-sm backdrop-blur-xl shadow-sm border ${isDark ? "bg-white/10 border-white/20 text-gray-300" : "bg-black/10 border-gray-300 text-gray-800"}`} style={{ backdropFilter: "blur(16px)" }}>
                                {skill}
                            </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>

        {/* OPEN SOURCE CONTRIBUTIONS SECTION (GITHUB ONLY) */}
        <section id="contributions" className="space-y-8 max-w-4xl mx-auto pt-8">
          <h2 className="text-4xl font-bold text-foreground">Open Source Contributions</h2>
          
          <a 
            href="https://github.com/Nitinref" 
            target="_blank"
            rel="noopener noreferrer"
            className={`
              block p-8 rounded-3xl border shadow-sm overflow-hidden hover:opacity-95 transition-opacity
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
        <section id="projects" className="space-y-12 max-w-3xl mx-auto pt-8">
          <h2 className="text-4xl font-bold text-foreground">I love to build stuff.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <a 
                key={idx} 
                href={project.link || "#"} 
                className="group block cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:underline underline-offset-4 decoration-2">{project.title}</h3>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>

                <p className="text-muted-foreground mb-4 text-sm line-clamp-2">{project.description}</p>

                <div 
                  className={`
                    overflow-hidden rounded-xl border shadow-sm transition-all
                    ${isDark ? "border-white/10 bg-white/5 shadow-black/20" : "border-gray-200 bg-gray-50/50 shadow-gray-200/50"}
                  `}
                >
                  <img
                    src={project.image || "/placeholder.svg?height=400&width=600"}
                    alt={project.title}
                    className="w-full h-40 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="edu" className="space-y-6 max-w-4xl mx-auto pt-8">
            <h2 className="text-4xl font-bold text-foreground">Education</h2>
            <div className="flex items-start justify-between gap-8">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">
                  Gyan Ganga Institute of Technology and Sciences, Jabalpur
                </h3>
                <p className="text-muted-foreground">B.Tech in Computer Science Engineering</p>
                <p className="text-sm text-muted-foreground">2023-2027</p>
              </div>
              <img src="/1.jpg" alt="GGITS Logo" className="w-24 h-24 object-contain flex-shrink-0" />
            </div>
        </section>

      </div>

      {/* FLOATING DOCK */}
      <div className="fixed bottom-10 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <nav 
          className={`
            pointer-events-auto
            flex gap-4 px-8 py-4 rounded-full 
            border shadow-2xl
            transition-all duration-300
            ${isDark ? "bg-black/30 border-white/15 shadow-black/50 text-gray-300" : "bg-white/30 border-white/40 shadow-gray-200/50 text-gray-700"}
          `}
          style={{ backdropFilter: "blur(24px) saturate(180%)", WebkitBackdropFilter: "blur(24px) saturate(180%)" }}
        >
          {["About", "Career", "Projects", "Skills", "Edu"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all
                hover:scale-105 active:scale-95
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