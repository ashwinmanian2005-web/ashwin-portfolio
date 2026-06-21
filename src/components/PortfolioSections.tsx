/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  User, MapPin, Calendar, Languages, Mail, Phone, 
  BookOpen, Award, Code, CheckCircle, Copy, Cpu, 
  Gamepad2, Coins, Briefcase, GraduationCap, ArrowRight,
  Brain, Zap, Trophy, ShieldCheck, HeartPulse, Sparkles
} from "lucide-react";
import { motion } from "motion/react";
import { ASHWIN_DATA } from "../types";

// Dynamic Icon Mapper for Hobbies
function getInterestIcon(iconName: string) {
  switch (iconName) {
    case "Gamepad2": return <Gamepad2 className="w-5 h-5 text-emerald-400" />;
    case "Coins": return <Coins className="w-5 h-5 text-amber-400" />;
    case "Cpu": return <Cpu className="w-5 h-5 text-blue-400" />;
    default: return <Cpu className="w-5 h-5 text-blue-400" />;
  }
}

// Custom visual wrapper for sections
export function SectionWrapper({ children, id, className = "" }: { children: React.ReactNode; id?: string; className?: string }) {
  return (
    <section id={id} className={`py-16 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-16 ${className}`}>
      {children}
    </section>
  );
}

// ----------------------------------------------------
// HERO SECTION (Bento Hero Layout)
// ----------------------------------------------------
export function HeroSection() {
  const p = ASHWIN_DATA.personal;

  const scrollToSection = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-[90vh] pt-28 pb-12 px-4 md:px-8 max-w-7xl mx-auto flex flex-col justify-center bg-grid-pattern">
      {/* Glow Backdrops */}
      <div className="absolute top-12 right-[10%] w-[380px] h-[380px] bg-blue-600/10 rounded-full blur-[110px] pointer-events-none"></div>
      <div className="absolute bottom-12 left-[5%] w-[280px] h-[280px] bg-indigo-600/10 rounded-full blur-[90px] pointer-events-none"></div>

      {/* Main Grid Wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch z-10 w-full">
        
        {/* HERO BIO BENTO CARD (Span 8) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-8 bento-card bento-hero-gradient flex flex-col justify-between"
        >
          {/* Top Tag & Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/40 border border-blue-500/30 text-blue-400 rounded-full text-[11px] font-mono">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              PORTFOLIO PROFILE • ME_STATUS: ACTIVE
            </div>

            <div className="space-y-1">
              <span className="text-gray-400 font-mono text-sm tracking-wider uppercase">Greetings</span>
              <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
                Ashwin
              </h1>
              <p className="text-lg md:text-xl font-sans font-medium text-blue-400 mt-1">
                Computer Science Engineering Student
              </p>
            </div>

            <p className="text-gray-300 font-sans text-sm md:text-base leading-relaxed max-w-2xl">
              {p.tagline}. Based in Tirunelveli, focusing on Python developments, logic-oriented algorithms, and building a high-grade career in the IT industry.
            </p>
          </div>

          {/* CTA Group at the bottom */}
          <div className="flex flex-wrap gap-3 pt-8">
            <button
              onClick={() => scrollToSection("#contact")}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-sans font-bold text-xs transition-all text-center glow-blue flex items-center gap-1.5 cursor-pointer active:scale-95 duration-150"
            >
              <span>Contact Me</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => scrollToSection("#about")}
              className="px-5 py-2.5 rounded-xl border border-slate-700/80 hover:border-blue-500/50 bg-slate-950/40 hover:bg-slate-900 text-gray-300 hover:text-white font-sans font-semibold text-xs transition-all cursor-pointer active:scale-95 duration-150 text-center"
            >
              Examine Profile
            </button>
          </div>
        </motion.div>

        {/* HERO IMAGE BENTO CARD (Span 4) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4 bento-card p-3 relative flex items-center justify-center overflow-hidden group min-h-[320px]"
        >
          {/* Tech overlay glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-indigo-500/15 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500"></div>
          
          <div className="relative w-full h-full min-h-[280px] rounded-2xl overflow-hidden flex items-center justify-center border border-blue-900/40 bg-slate-950">
            <img 
              src="/src/assets/images/ashwin_avatar_1782049973359.jpg" 
              alt="Ashwin Avatar portrait" 
              className="w-full h-full object-cover rounded-xl transition duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            
            {/* Status indicators */}
            <div className="absolute top-3 left-3 bg-[#020617]/80 border border-slate-800 backdrop-blur px-2.5 py-1 rounded-lg text-[9px] font-mono text-gray-300 flex items-center gap-1.5 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              FINAL YEAR CO-OP
            </div>

            <div className="absolute bottom-3 inset-x-3 py-2 px-3 bg-[#020617]/90 backdrop-blur-md rounded-xl border border-blue-900/50 text-center font-mono text-[10px]">
              <span className="text-gray-400 block pb-0.5">COLLEGE RESIDENCE</span>
              <span className="text-blue-400 uppercase tracking-widest font-semibold text-[11px] block">{p.college}</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

// ----------------------------------------------------
// ABOUT ME & PERSONAL INFORMATION (Bento Grid Dashboard)
// ----------------------------------------------------
export function AboutMeSection() {
  const p = ASHWIN_DATA.personal;

  return (
    <SectionWrapper id="about" className="relative scroll-mt-24">
      {/* Section Header */}
      <div className="mb-10">
        <div className="flex items-center gap-1 text-xs font-mono text-blue-500 uppercase tracking-widest mb-1">
          <User className="w-3.5 h-3.5" />
          <span>01 // PROFILE OVERVIEW</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white">
          About Me & Identity
        </h2>
      </div>

      {/* Bento Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        
        {/* BIO CARD (Span 7) */}
        <div className="md:col-span-7 bento-card flex flex-col justify-between">
          <div>
            <div className="bento-title">Biography</div>
            <p className="text-gray-300 font-sans text-sm md:text-base leading-relaxed pt-2">
              I am a final-year Computer Science Engineering student at <strong className="text-blue-400 font-semibold">Narayanaguru College of Engineering</strong>. 
              I am passionate about technology, programming, and continuous learning. 
              I am focused on improving my technical skills and building a successful career as a software developer in the IT industry.
            </p>
          </div>
          
          <div className="mt-6 border-t border-slate-800/85 pt-4 flex items-center gap-3">
            <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
            <p className="text-xs text-slate-400 font-sans italic">
              Focused heavily on modern algorithms, scripting, and modular system solutions.
            </p>
          </div>
        </div>

        {/* CAREER GOAL CARD (Span 5 - Accent Style) */}
        <div className="md:col-span-5 bento-card bento-accent-card flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="bento-title !mb-0">Career Goal & Vision</div>
              <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
            </div>
            
            <div className="space-y-3.5 pt-1">
              <div className="text-base font-sans font-semibold text-gray-100 leading-relaxed">
                &ldquo;{p.careerGoal}&rdquo;
              </div>
              <div className="text-xs font-mono text-blue-400">
                // Target: Software Developer
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-blue-900/30 pt-4 flex items-center gap-3">
            <Briefcase className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-mono text-blue-300">DREAM ROLE: SOFTWARE DEVELOPER</span>
          </div>
        </div>

        {/* PERSONAL METRIC: DOB (Span 4) */}
        <div className="md:col-span-4 bento-card flex flex-col justify-between">
          <div>
            <div className="bento-title">Date of Birth</div>
            <div className="flex items-center gap-3 mt-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-lg font-display font-bold text-white leading-none">{p.dob}</p>
                <span className="text-[10px] font-mono text-gray-500 uppercase mt-1 inline-block">Born August 2005</span>
              </div>
            </div>
          </div>
          <p className="text-[11px] text-gray-400 font-sans mt-4">Calculated system eligibility: Active entry level candidate</p>
        </div>

        {/* PERSONAL METRIC: LOCATION (Span 4) */}
        <div className="md:col-span-4 bento-card flex flex-col justify-between">
          <div>
            <div className="bento-title">Location</div>
            <div className="flex items-center gap-3 mt-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-lg font-display font-bold text-white leading-none">{p.location}</p>
                <span className="text-[10px] font-mono text-gray-500 uppercase mt-1 inline-block">Tamil Nadu, India</span>
              </div>
            </div>
          </div>
          <p className="text-[11px] text-gray-400 font-sans mt-4">College Residence: Tirunelveli district timeline</p>
        </div>

        {/* PERSONAL METRIC: LANGUAGES (Span 4) */}
        <div className="md:col-span-4 bento-card flex flex-col justify-between">
          <div>
            <div className="bento-title">Languages Known</div>
            <div className="flex items-center gap-3 mt-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Languages className="w-5 h-5" />
              </div>
              <div>
                <p className="text-lg font-display font-bold text-white leading-none">
                  {p.languages.join(", ")}
                </p>
                <span className="text-[10px] font-mono text-gray-500 uppercase mt-1 inline-block">Bilingual Fluency</span>
              </div>
            </div>
          </div>
          <p className="text-[11px] text-gray-400 font-sans mt-4">Eligible for international & remote collaborative operations</p>
        </div>

      </div>
    </SectionWrapper>
  );
}

// ----------------------------------------------------
// EDUCATION (Bento Grid Timeline)
// ----------------------------------------------------
export function EducationSection() {
  const timeline = ASHWIN_DATA.education;

  return (
    <SectionWrapper id="education" className="border-t border-slate-900/30">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-1 text-xs font-mono text-blue-500 uppercase tracking-widest mb-1">
          <BookOpen className="w-3.5 h-3.5" />
          <span>02 // SCHOLASTIC JOURNEY</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white">
          Education Profile
        </h2>
      </div>

      {/* Bento Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        
        {/* DEGREE BENTO CELL (Span 12 for emphasis) */}
        <div className="md:col-span-12 bento-card border-l-4 border-l-blue-500/80 bg-gradient-to-r from-blue-950/20 to-slate-900/30 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="px-2 py-0.5 rounded text-[10px] uppercase font-mono font-bold tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Current Studies (4th Year B.E.)
              </span>
              <span className="text-xs text-gray-400 font-mono">Narayanaguru Institution</span>
            </div>
            <h3 className="text-xl md:text-2xl font-display font-extrabold text-white">
              B.E. Computer Science Engineering
            </h3>
            <p className="text-sm text-gray-300 font-sans">
              Narayanaguru College of Engineering — Focus on Core Programming Fundamentals, Problem Solving, and Adaptability.
            </p>
          </div>

          <div className="shrink-0">
            <div className="px-4 py-3 bg-slate-900/70 border border-slate-800 rounded-2xl text-center">
              <p className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">ACADEMIC PERIOD</p>
              <p className="text-base font-display font-bold text-blue-400 mt-0.5">2022 — Present</p>
            </div>
          </div>
        </div>

        {/* HSC CELL (Span 6) */}
        <div className="md:col-span-6 bento-card flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="bento-title !mb-0">HSC (Higher Secondary)</div>
              <span className="px-2 py-0.5 rounded text-[9px] font-mono font-semibold tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                COMPLETED
              </span>
            </div>
            
            <h4 className="text-lg font-display font-bold text-white mb-1">
              Sankar Higher Secondary School
            </h4>
            <p className="text-xs text-gray-400 font-sans leading-relaxed">
              Acquired scientific foundations, analytical arithmetic methodologies, and physics frameworks.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
            <span className="text-xs text-gray-300 font-sans font-medium">Academic Score Detail:</span>
            <span className="text-sm font-mono font-bold text-emerald-400">427 Marks</span>
          </div>
        </div>

        {/* SSLC CELL (Span 6) */}
        <div className="md:col-span-6 bento-card flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="bento-title !mb-0">SSLC (Secondary Education)</div>
              <span className="px-2 py-0.5 rounded text-[9px] font-mono font-semibold tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                COMPLETED
              </span>
            </div>

            <h4 className="text-lg font-display font-bold text-white mb-1">
              Sankar Higher Secondary School
            </h4>
            <p className="text-xs text-gray-400 font-sans leading-relaxed">
              Completed core primary and high-school scientific and logical computer classes.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
            <span className="text-xs text-gray-300 font-sans font-medium">Secondary Matriculation:</span>
            <span className="text-xs font-mono font-bold text-gray-300">Outstanding State Foundations</span>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}

// ----------------------------------------------------
// TECHNICAL SKILLS & STRENGTHS (Bento Board Stack)
// ----------------------------------------------------
export function SkillsSection() {
  const skList = ASHWIN_DATA.skills;

  const techSkills = skList.filter(s => s.category === "Technical");
  const softSkills = skList.filter(s => s.category === "Soft Skill");
  const strengths = skList.filter(s => s.category === "Strength");

  return (
    <SectionWrapper id="skills" className="border-t border-slate-900/30">
      {/* Header */}
      <div className="mb-10 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs font-mono text-blue-500 uppercase tracking-widest mb-1">
          <Code className="w-3.5 h-3.5" />
          <span>03 // COMPUTING TOOLSETS</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white">
          Technical Stack & Soft Traits
        </h2>
      </div>

      {/* Bento Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        
        {/* Python and Technical Slider Cell (Span 7) */}
        <div className="md:col-span-7 bento-card flex flex-col justify-between">
          <div>
            <div className="bento-title">Core Programming Stack</div>
            <div className="space-y-5 pt-3">
              {techSkills.map((sk) => (
                <div key={sk.name} className="space-y-1">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="font-bold text-gray-200">{sk.name}</span>
                    <span className="text-blue-400 font-semibold">{sk.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-400"
                      style={{ width: `${sk.level}%` }}
                    />
                  </div>
                  {sk.description && (
                    <p className="text-[10px] text-gray-400 font-sans italic opacity-80">
                      {sk.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-800/70 text-[11px] font-mono text-blue-400 flex items-center gap-2">
            <Cpu className="w-4 h-4 animate-spin" style={{ animationDuration: "12s" }} />
            <span>Target: Multi-tier OOP logic development in server modules</span>
          </div>
        </div>

        {/* Trait 1: Soft Skills Bento Cell (Span 5) */}
        <div className="md:col-span-5 bento-card flex flex-col justify-between">
          <div>
            <div className="bento-title">Soft Skills Dashboard</div>
            <div className="space-y-3 pt-2">
              {softSkills.map((sk) => (
                <div key={sk.name} className="flex items-center gap-3 p-3 bg-slate-900/60 border border-slate-800 rounded-xl">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-sans font-bold text-white leading-none">{sk.name}</h4>
                    <span className="text-[9px] font-mono text-indigo-400 mt-1 inline-block uppercase">Recruiting Index: Advanced</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-[10.5px] text-gray-400 font-sans italic mt-4">
            Demonstrates proactive communication and efficient team-playing.
          </p>
        </div>

        {/* Trait 2: Core Personal Strengths (Span 12 bento footer card) */}
        <div className="md:col-span-12 bento-card bento-accent-card flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <div className="bento-title !mb-1">Core Personal Strengths</div>
            <p className="text-xs text-gray-300 font-sans">
              Inherent qualities that facilitate continuous software scaling, self-starting, hard labor timelines and high versatility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full md:max-w-2xl">
            {strengths.map((sk) => (
              <div 
                key={sk.name}
                className="p-3 bg-[#0a152d]/50 hover:bg-[#0d1c3a]/75 border border-blue-900/30 rounded-xl transition flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0 text-xs">
                  ★
                </div>
                <div>
                  <h4 className="text-xs font-sans font-bold text-white">{sk.name}</h4>
                  <span className="text-[8.5px] font-mono text-amber-300">Highly Attributed</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}

// ----------------------------------------------------
// PROJECTS (Bento Portfolio List)
// ----------------------------------------------------
export function ProjectsSection() {
  const projects = ASHWIN_DATA.projects;

  return (
    <SectionWrapper id="projects" className="border-t border-slate-900/30">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-1 text-xs font-mono text-blue-500 uppercase tracking-widest mb-1">
          <Briefcase className="w-3.5 h-3.5" />
          <span>04 // PRACTICE DIRECTORY</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white">
          Projects & Practicums
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* Focus Statement Bento Card (Span 4) */}
        <div className="lg:col-span-4 bento-card bento-hero-gradient flex flex-col justify-between min-h-[280px]">
          <div>
            <div className="bento-title !text-blue-400">Current Scope & Objective</div>
            <p className="text-sm text-gray-200 font-sans leading-relaxed pt-2">
              Currently focused on strengthening programming skills and building practical knowledge through academic learning, coding practice, and self-learning.
            </p>
          </div>

          <div className="p-3.5 bg-slate-950/60 border border-slate-800/80 rounded-xl space-y-1.5 text-[11.5px] font-mono text-gray-300">
            <span className="font-bold text-blue-400 text-xs block">✨ Active Targets:</span>
            Python Automation, Data Architectures, logic validation protocols.
          </div>
        </div>

        {/* Projects Cards List (Span 8) */}
        <div className="lg:col-span-8 space-y-5">
          {projects.map((proj) => (
            <div 
              key={proj.title} 
              className="bento-card hover:border-blue-500/40"
            >
              <div className="flex flex-wrap items-center justify-between gap-2.5 mb-2.5">
                <span className="px-2 py-0.5 rounded-md text-[9px] font-mono font-bold tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {proj.status}
                </span>
                <span className="text-[10px] font-mono text-slate-500">
                  CSE LABORATORY UNIT
                </span>
              </div>

              <h3 className="text-base font-display font-bold text-white mb-2">
                {proj.title}
              </h3>
              
              <p className="text-xs text-gray-300 font-sans leading-relaxed">
                {proj.description}
              </p>

              {/* Tags info */}
              <div className="flex flex-wrap gap-1 mt-4">
                {proj.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="bento-tag"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
}

// ----------------------------------------------------
// CERTIFICATIONS & BADGES
// ----------------------------------------------------
export function CertificationsSection() {
  const certifications = ASHWIN_DATA.certifications;

  return (
    <SectionWrapper id="certifications" className="border-t border-slate-900/30">
      <div className="text-center max-w-xl mx-auto space-y-2.5 mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-500 uppercase tracking-widest justify-center">
          <Award className="w-3.5 h-3.5" />
          <span>05 // VERIFIABLE TRAINING</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white">
          Certifications
        </h2>
      </div>

      <div className="flex justify-center">
        {certifications.map((cert) => (
          <div 
            key={cert.title}
            className="w-full max-w-lg bento-card bg-gradient-to-br from-[#0c1426] to-[#040810] flex items-start gap-4 relative overflow-hidden group"
          >
            {/* Background glowing shape */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.badgeColor} rounded-full blur-3xl opacity-15 group-hover:opacity-30 transition-all duration-500`}></div>

            <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 relative z-10">
              <Award className="w-5 h-5 animate-pulse" />
            </div>

            <div className="space-y-2 relative z-10">
              <span className="px-2 py-0.5 rounded text-[9px] font-mono tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 font-bold uppercase">
                Verifiable Badge
              </span>
              <h3 className="text-lg font-display font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
                {cert.title}
              </h3>
              <p className="text-xs font-sans font-medium text-gray-300">
                {cert.issuer}
              </p>
              <div className="flex items-center gap-4 text-[10px] font-mono text-gray-500 pt-1">
                <span>Active Status: Live</span>
                <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                <span>Year: {cert.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

// ----------------------------------------------------
// INTERESTS / HOBBIES (Bento Board Cells)
// ----------------------------------------------------
export function InterestsSection() {
  const hobbies = ASHWIN_DATA.interests;

  return (
    <SectionWrapper id="interests" className="border-t border-slate-900/30">
      {/* Header */}
      <div className="mb-10 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs font-mono text-blue-500 uppercase tracking-widest mb-1">
          <HeartPulse className="w-3.5 h-3.5 text-rose-500" />
          <span>06 // INHERENT PASSIONS</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white">
          Interests & Hobbies
        </h2>
      </div>

      {/* Grid Bento Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {hobbies.map((hob) => (
          <div 
            key={hob.name} 
            className="bento-card flex flex-col justify-between h-52 group cursor-pointer"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center border border-slate-800 mb-4 group-hover:scale-105 transition-all">
                {getInterestIcon(hob.iconName)}
              </div>
              <h3 className="text-base font-display font-extrabold text-white group-hover:text-blue-300 transition-colors">
                {hob.name}
              </h3>
              <p className="text-xs text-gray-400 mt-2 font-sans leading-relaxed">
                {hob.description}
              </p>
            </div>
            
            <span className="text-[9px] font-mono text-blue-400 uppercase font-medium flex items-center gap-1 mt-4">
              <span>EXPLORE</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            </span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

// ----------------------------------------------------
// CONTACT & SECURE DISPATCH
// ----------------------------------------------------
export function ContactSection() {
  const p = ASHWIN_DATA.personal;
  const [copiedText, setCopiedText] = useState("");

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(""), 2000);
  };

  return (
    <SectionWrapper id="contact" className="border-t border-slate-900/30">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Info Column (Span 5) */}
        <div className="lg:col-span-5 bento-card bento-hero-gradient flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-1 text-xs font-mono text-blue-500 uppercase tracking-widest">
              <Mail className="w-3.5 h-3.5" />
              <span>07 // INBOX GATEWAY</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white">
              Let&apos;s Connect
            </h2>
            <p className="text-xs md:text-sm text-gray-300 font-sans leading-relaxed">
              Interested in recruitment schedules, technical alignment, internship, or collaborative team practices? Connect anytime!
            </p>

            <div className="space-y-3 pt-4">
              {/* E-mail Card */}
              <div className="flex items-center justify-between p-3.5 bg-slate-950/80 border border-slate-800 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-gray-550 block">EMAIL DISPATCH</span>
                    <a href={`mailto:${p.email}`} className="text-xs font-mono font-bold text-gray-200 hover:text-blue-400 transition break-all">
                      {p.email}
                    </a>
                  </div>
                </div>
                <button 
                  onClick={() => handleCopy(p.email, "Email")}
                  className="p-1.5 bg-slate-900 hover:bg-blue-950/30 text-gray-400 hover:text-blue-400 rounded-lg border border-slate-800 flex items-center justify-center active:scale-95"
                  title="Copy Mail Address"
                >
                  {copiedText === "Email" ? <span className="text-[9px] font-mono text-emerald-400 px-1">Copied!</span> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="flex items-center justify-between p-3.5 bg-slate-950/80 border border-slate-800 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-gray-550 block">TELEPHONE GATEWAY</span>
                    <a href={`tel:${p.phone}`} className="text-xs font-mono font-bold text-gray-200 hover:text-indigo-400 transition">
                      {p.phone}
                    </a>
                  </div>
                </div>
                <button 
                  onClick={() => handleCopy(p.phone, "Phone")}
                  className="p-1.5 bg-slate-900 hover:bg-indigo-950/30 text-gray-400 hover:text-indigo-400 rounded-lg border border-slate-800 flex items-center justify-center active:scale-95"
                  title="Copy Phone Number"
                >
                  {copiedText === "Phone" ? <span className="text-[9px] font-mono text-emerald-400 px-1">Copied!</span> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>

          <div className="text-[10px] font-mono text-gray-400 pt-6">
            // Ashwin operates on Greenwich Mean Time context (+5.5 GMT Offset)
          </div>
        </div>

        {/* Form Column (Span 7) */}
        <div className="lg:col-span-7 bento-card flex flex-col justify-between relative bg-grid-pattern">
          <div>
            <h3 className="text-lg font-display font-extrabold text-white mb-1">
              Dynamic Incompatibility Check / Message Dispatch
            </h3>
            <p className="text-[11px] text-gray-450 font-sans mb-6">
              Write custom requirements or details here to schedule direct callback events instantly.
            </p>

            <form onSubmit={(e) => { e.preventDefault(); alert("Ashwin's inbox configured successfully! For production dispatch mail directly to " + p.email) }} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-slate-400 uppercase">Your Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Recruiter Lead" 
                    className="w-full bg-[#020617]/70 border border-slate-800 focus:border-blue-500/80 focus:outline-none rounded-xl px-3 py-2.5 text-xs text-zinc-100 placeholder:text-gray-650"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-slate-400 uppercase">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="e.g. lead@hr-dept.com" 
                    className="w-full bg-[#020617]/70 border border-slate-800 focus:border-blue-500/80 focus:outline-none rounded-xl px-3 py-2.5 text-xs text-zinc-100 placeholder:text-gray-650"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono text-slate-400 uppercase">Subject Details</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Software Developer Career Inquiries" 
                  className="w-full bg-[#020617]/70 border border-slate-800 focus:border-blue-500/80 focus:outline-none rounded-xl px-3 py-2.5 text-xs text-zinc-100 placeholder:text-gray-650"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono text-slate-400 uppercase">Requirements Briefing</label>
                <textarea 
                  rows={4}
                  required
                  placeholder="Please write interview requests, candidate checklists, or scheduling timelines directly here..." 
                  className="w-full bg-[#020617]/70 border border-slate-800 focus:border-blue-500/80 focus:outline-none rounded-xl px-3.5 py-2.5 text-xs text-zinc-100 placeholder:text-gray-650 resize-none"
                />
              </div>

              <button 
                type="submit" 
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 active:scale-[0.99] transition text-white font-sans font-bold text-xs rounded-xl shadow-md uppercase tracking-wider cursor-pointer"
              >
                Dispatch Signal Message
              </button>
            </form>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
