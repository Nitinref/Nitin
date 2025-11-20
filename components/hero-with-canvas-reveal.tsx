"use client"
import React from "react"
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"
import { Button } from "@/components/ui/button"

export default function HeroWithCanvasReveal() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-black">
      {/* Canvas Reveal Effect Background */}
      <div className="absolute inset-0 h-full w-full">
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-transparent"
          // CHANGED: Using much darker RGB green values here
          colors={[
            [0, 100, 0],    // Dark standard green
            [1, 50, 32],    // Very deep forest greenish/black
          ]}
          dotSize={2}
          showGradient={false}
          opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
        />
        
        {/* Custom Overlay gradient for text readability */}
        {/* CHANGED: dark:bg-black/60 to dark:bg-green-950/80 for a deep green tint */}
        <div className="absolute inset-0 bg-white/60 dark:bg-green-950/80 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black dark:text-white tracking-tight mb-4">
          Welcome to the Future
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-gray-800 dark:text-gray-300 max-w-3xl mx-auto">
          Experience the power of innovation with our cutting-edge solutions. Join us on a journey to transform your
          digital landscape.
        </p>
        <div className="mt-10">
          <Button
            size="lg"
            // CHANGED: bg-green-700 to darker bg-green-800
            className="bg-green-800 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  )
}