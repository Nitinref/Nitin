"use client"

import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function NitinPortfolio() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = theme === "dark"

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <div className="relative w-full">
        <div className="relative h-[35vh] w-full overflow-hidden">
          <CanvasRevealEffect
            animationSpeed={0.3}
            colors={
              isDark
                ? [[255, 255, 255]]
                : [
                    [34, 197, 94],
                    [255, 255, 255],
                  ]
            }
            opacities={isDark ? [0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] : [0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 1]}
            dotSize={2}
            showGradient={false}
            containerClassName="absolute inset-0"
          />

          <div
            className={`absolute inset-0 ${
              isDark
                ? "bg-gradient-to-b from-transparent via-transparent to-black"
                : "bg-gradient-to-b from-transparent via-transparent to-white"
            }`}
          />

          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`absolute top-6 right-6 z-30 p-3 rounded-full backdrop-blur-2xl border transition-all shadow-lg ${
              isDark
                ? "bg-white/10 border-white/30 hover:bg-white/20 text-white"
                : "bg-black/10 border-gray-300 hover:bg-black/15 text-gray-800"
            }`}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Top Navigation */}
          <nav className="absolute top-6 right-24 flex gap-6 z-30">
            {["About", "Career", "Projects", "Skills", "Edu"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-all backdrop-blur-sm px-3 py-1.5 rounded-lg ${
                  isDark
                    ? "text-gray-300 hover:text-white hover:bg-white/10"
                    : "text-gray-700 hover:text-gray-900 hover:bg-black/5"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="max-w-6xl mx-auto px-6 -mt-20 relative z-20">
          <div className="flex items-start gap-8">
            <img
              src="/professional-portrait.png"
              alt="Nitin Yadav"
              className={`w-40 h-40 rounded-full border-4 shadow-2xl flex-shrink-0 ${
                isDark ? "border-white/20 bg-black/40" : "border-gray-300/60 bg-white/60"
              }`}
              style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
            />

            {/* Name and Bio */}
            <div className="flex-1 pt-4 space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground">Nitin Yadav</h1>
              <p className="text-lg text-muted-foreground">Software Engineer with an eye for design.</p>
              <p className="text-base text-muted-foreground">
                I build clean, simple, and impactful digital experiences.
              </p>
              <p className="text-sm text-muted-foreground pt-1">Pune, Maharashtra, India</p>

              <div className="flex gap-3 pt-4">
                {[Twitter, Github, Linkedin, Mail].map((Icon, idx) => (
                  <button
                    key={idx}
                    className={`p-3 rounded-xl backdrop-blur-2xl transition-all shadow-lg border ${
                      isDark
                        ? "bg-white/10 border-white/20 hover:bg-white/20 text-gray-300 hover:text-white"
                        : "bg-black/10 border-gray-300 hover:bg-black/15 text-gray-700 hover:text-gray-900"
                    }`}
                    style={{ backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
                  >
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        {/* About Me Section */}
        <section id="about" className="space-y-6">
          <h2 className="text-4xl font-bold text-foreground">About Me</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            I follow simplicity, pay attention to details, and trust my intuition to structure things in a way that just
            feels right. I think differently, and that's my strength. I move Fast.
          </p>
          <Button
            className={`mt-4 backdrop-blur-2xl shadow-lg border ${
              isDark
                ? "bg-white/10 border-white/20 hover:bg-white/20 text-white"
                : "bg-black/10 border-gray-300 hover:bg-black/15 text-gray-900"
            }`}
            style={{ backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
          >
            Connect with Me!
          </Button>
        </section>

        {/* Experience Section */}
        <section id="career" className="space-y-8">
          <h2 className="text-4xl font-bold text-foreground">Experience</h2>

          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-foreground">Government of India.</h3>
            <p className="text-sm text-muted-foreground">Research Thesis | Aug 2024 to Dec 2024</p>
            <p className="text-muted-foreground">
              Worked on Improving 5G Network Coverage at Mormugao Port and Indian Naval Vessel.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-foreground">Greateway Pvt Ltd.</h3>
            <p className="text-sm text-muted-foreground">Software Developer | Jan 2023 to Jul 2024</p>
            <p className="text-muted-foreground">
              Built scalable web applications and led frontend development for multiple client projects.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-8">
          <h2 className="text-4xl font-bold text-foreground">Skills</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Frontend Development</h3>
              <div className="flex flex-wrap gap-3">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"].map((skill) => (
                  <span
                    key={skill}
                    className={`px-5 py-2.5 rounded-xl text-sm backdrop-blur-xl shadow-sm border ${
                      isDark ? "bg-white/10 border-white/20 text-gray-300" : "bg-black/10 border-gray-300 text-gray-800"
                    }`}
                    style={{ backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Backend & Database</h3>
              <div className="flex flex-wrap gap-3">
                {["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"].map((skill) => (
                  <span
                    key={skill}
                    className={`px-5 py-2.5 rounded-xl text-sm backdrop-blur-xl shadow-sm border ${
                      isDark ? "bg-white/10 border-white/20 text-gray-300" : "bg-black/10 border-gray-300 text-gray-800"
                    }`}
                    style={{ backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Design & Tools</h3>
              <div className="flex flex-wrap gap-3">
                {["Figma", "Adobe Creative Suite", "Git", "VS Code", "Framer Motion"].map((skill) => (
                  <span
                    key={skill}
                    className={`px-5 py-2.5 rounded-xl text-sm backdrop-blur-xl shadow-sm border ${
                      isDark ? "bg-white/10 border-white/20 text-gray-300" : "bg-black/10 border-gray-300 text-gray-800"
                    }`}
                    style={{ backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="edu" className="space-y-6">
          <h2 className="text-4xl font-bold text-foreground">Education</h2>

          <div className="flex items-start justify-between gap-8">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">
                Birla Institute of Technology and Sciences, Pilani
              </h3>
              <p className="text-muted-foreground">B.Tech in Electronics and Electrical Engineering</p>
              <p className="text-muted-foreground">Masters Of Sciences Chemistry</p>
              <p className="text-sm text-muted-foreground">2020-2025</p>
            </div>
            <img src="/images/image.png" alt="BITS Pilani Logo" className="w-24 h-24 object-contain flex-shrink-0" />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-8">
          <h2 className="text-4xl font-bold text-foreground">I love to build stuff.</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "getRepo.dev",
                description: "Making a dent in Open Source world",
                image: "/placeholder.svg?height=300&width=600",
              },
              {
                title: "Freelance Project",
                description: "A modern dietician app for a client",
                image: "/placeholder.svg?height=300&width=600",
              },
              {
                title: "Radial – SaaS Landing Experience",
                description: "Collaborative project management tool template",
                image: "/placeholder.svg?height=300&width=600",
              },
              {
                title: "Portfolio",
                description: "Personal portfolio website showcasing my work and skills",
                image: "/placeholder.svg?height=300&width=600",
              },
            ].map((project, idx) => (
              <div key={idx} className="group cursor-pointer max-w-md">
                <div
                  className={`backdrop-blur-xl rounded-2xl p-6 shadow-xl border transition-all ${
                    isDark
                      ? "bg-white/5 border-white/10 hover:bg-white/10"
                      : "bg-black/5 border-gray-200 hover:bg-black/10"
                  }`}
                  style={{ backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
                >
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold group-hover:underline text-foreground">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                    </div>
                    <svg
                      className="w-5 h-5 text-gray-400 flex-shrink-0 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Navigation */}
        <nav className="flex justify-center gap-2 py-12">
          <div
            className={`flex gap-2 px-6 py-4 rounded-full backdrop-blur-2xl shadow-lg border ${
              isDark ? "bg-white/10 border-white/20" : "bg-black/10 border-gray-300"
            }`}
            style={{ backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
          >
            {["About", "Career", "Projects", "Skills", "Edu"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`px-5 py-2 rounded-full transition-all text-sm font-medium ${
                  isDark
                    ? "hover:bg-white/10 text-gray-300 hover:text-white"
                    : "hover:bg-black/10 text-gray-700 hover:text-gray-900"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  )
}
