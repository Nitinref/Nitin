"use client"

import type React from "react"

import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Canvas Reveal Effect Background - White dots on black */}
      <div className="fixed inset-0 z-0">
        <CanvasRevealEffect
          animationSpeed={1.5}
          containerClassName="bg-black"
          colors={[
            [255, 255, 255], // White
            [240, 240, 240], // Light gray
            [220, 220, 220], // Lighter gray
          ]}
          dotSize={2}
          opacities={[0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.6]}
          showGradient={false}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl w-full">
            {/* Glassmorphic Card */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Profile Image */}
                <div className="relative">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
                    <img src="/professional-portrait.png" alt="Nitin Yadav" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  </div>
                </div>

                {/* Hero Text */}
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                    Nitin Yadav
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 mb-2 font-light">Full Stack Developer & Designer</p>
                  <p className="text-base md:text-lg text-gray-400 max-w-2xl">
                    I build clean, simple, and impactful digital experiences. Passionate about creating innovative
                    solutions that make a difference.
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-4 mt-6 justify-center md:justify-start">
                    <SocialButton icon={<Github className="w-5 h-5" />} />
                    <SocialButton icon={<Linkedin className="w-5 h-5" />} />
                    <SocialButton icon={<Twitter className="w-5 h-5" />} />
                    <SocialButton icon={<Mail className="w-5 h-5" />} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I follow simplicity, pay attention to details, and trust my intuition to structure things in a way that
                just feels right. I think differently, and that's my strength. I move fast and deliver exceptional
                results.
              </p>
              <Button className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white">
                Connect with Me!
              </Button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Skills</h2>

              {/* Frontend Development */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4 text-gray-200">Frontend Development</h3>
                <div className="flex flex-wrap gap-3">
                  <SkillPill>React</SkillPill>
                  <SkillPill>Next.js</SkillPill>
                  <SkillPill>TypeScript</SkillPill>
                  <SkillPill>Tailwind CSS</SkillPill>
                  <SkillPill>JavaScript</SkillPill>
                </div>
              </div>

              {/* Backend & Database */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4 text-gray-200">Backend & Database</h3>
                <div className="flex flex-wrap gap-3">
                  <SkillPill>Node.js</SkillPill>
                  <SkillPill>Express</SkillPill>
                  <SkillPill>MongoDB</SkillPill>
                  <SkillPill>PostgreSQL</SkillPill>
                  <SkillPill>REST APIs</SkillPill>
                </div>
              </div>

              {/* Design & Tools */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-200">Design & Tools</h3>
                <div className="flex flex-wrap gap-3">
                  <SkillPill>Figma</SkillPill>
                  <SkillPill>Adobe Creative Suite</SkillPill>
                  <SkillPill>Git</SkillPill>
                  <SkillPill>VS Code</SkillPill>
                  <SkillPill>Framer Motion</SkillPill>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">I love to build stuff.</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <ProjectCard
                title="E-Commerce Platform"
                description="A modern e-commerce platform with real-time inventory management"
                imageQuery="modern+e-commerce+website"
              />
              <ProjectCard
                title="Social Media Dashboard"
                description="Analytics dashboard for social media management and insights"
                imageQuery="analytics+dashboard+dark"
              />
              <ProjectCard
                title="Task Management App"
                description="Collaborative project management tool with real-time updates"
                imageQuery="project+management+app"
              />
              <ProjectCard
                title="Portfolio Website"
                description="Personal portfolio showcasing creative work and skills"
                imageQuery="portfolio+website+design"
              />
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Education</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Birla Institute of Technology and Sciences, Pilani
                  </h3>
                  <p className="text-gray-300 mt-2">B.Tech in Computer Science Engineering</p>
                  <p className="text-gray-400 mt-1">2020-2025</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
              <p className="text-lg text-gray-300 mb-8">
                Have a project in mind? Let's create something amazing together.
              </p>
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-6 text-lg">
                Get in Touch
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 text-center text-gray-400 border-t border-white/10">
          <p>&copy; 2025 Nitin Yadav. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

function SocialButton({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="w-12 h-12 rounded-full backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110">
      {icon}
    </button>
  )
}

function SkillPill({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-5 py-2.5 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-sm font-medium hover:bg-white/15 transition-all duration-300 hover:scale-105 cursor-default">
      {children}
    </div>
  )
}

function ProjectCard({
  title,
  description,
  imageQuery,
}: {
  title: string
  description: string
  imageQuery: string
}) {
  return (
    <div className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] cursor-pointer">
      <div className="aspect-video overflow-hidden">
        <img
          src={`/.jpg?height=400&width=600&query=${imageQuery}`}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  )
}
