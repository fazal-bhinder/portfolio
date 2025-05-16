"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
    >
      <div className="container px-4 md:px-6 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <p className="text-blue-400 text-lg">Hi, my name is</p>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-200 leading-tight">
              Fazal Singh.
            </h1>
            <h2 className="text-3xl md:text-6xl font-bold text-slate-400 leading-tight">
              I love building cool stuff.
            </h2>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
             I’m a full-stack developer from India who turns ideas into fast, functional, and beautiful web apps. From front to back, I build clean, scalable solutions that bring your vision to life..
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500/20 text-purple-100 hover:bg-purple-500/10 bg-black"
              asChild
            >
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500/20 text-purple-100 hover:bg-purple-500/10 bg-black"
              asChild
            >
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500/20 text-purple-100 hover:bg-purple-500/10 bg-black"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1_ITfTKwmWnvrQ8bDEC4a7ZFGr6TRRba2/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex justify-center items-center gap-6"
          >
            <Link
              href="https://github.com/fazal-bhinder"
              target="_blank"
              className="hover:text-red-200 transition-colors duration-200"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://x.com/bhinder__fazal"
              target="_blank"
              className="hover:text-red-200 transition-colors duration-200"
            >
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/fazal-bhinder/"
              target="_blank"
              className="hover:text-red-200 transition-colors duration-200"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
