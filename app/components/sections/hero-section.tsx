"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Spotlight effect */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] blur-[100px] rounded-full opacity-50"
        style={{
          background: "radial-gradient(ellipse at center, rgba(168,85,247,0.5) 0%, rgba(56,189,248,0.3) 40%, transparent 70%)"
        }}
      />

      
      <div className="container px-4 md:px-6 max-w-3xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        > 
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter "
          >
          Fazal Singh
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl  max-w-2xl mx-auto"
          >
            Full Stack Developer who loves to build some cool stuff
          </motion.p>
          
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
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex justify-center items-center gap-6"
          >
            <Link
              href="https://github.com/fazal-bhinder"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-red-200 transition-colors duration-200"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://x.com/bhinder__fazal"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-red-200 transition-colors duration-200"
            >
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/fazal-bhinder/"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-red-200 transition-colors duration-200"
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