/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Header } from "./components/Header";
import { 
  HeroSection, 
  AboutMeSection, 
  EducationSection, 
  SkillsSection, 
  ProjectsSection, 
  CertificationsSection, 
  InterestsSection, 
  ContactSection 
} from "./components/PortfolioSections";
import { InteractiveTerminal } from "./components/InteractiveTerminal";
import { Terminal, Laptop, ShieldAlert, Cpu } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans tracking-tight relative overflow-x-hidden selection:bg-blue-600/30 selection:text-white">
      {/* Dynamic Top Bar Navigation */}
      <Header />

      {/* Main Hero block */}
      <HeroSection />

      {/* Interactive Python Console Playground (Stands between Hero and About) */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-10">
        <div className="mb-8 max-w-2xl">
          <div className="flex items-center gap-1.5 text-xs font-mono text-blue-500 uppercase tracking-widest mb-1">
            <Terminal className="w-3.5 h-3.5" />
            <span>PLAYGROUND SANDBOX // RECRUITER VERIFICATION</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-extrabold text-white">
            Interactive Python Console
          </h2>
          <p className="text-gray-400 font-sans text-xs md:text-sm mt-1">
            Experience real-time profiles directly. Select a quick action command below to trigger dynamic metrics or write custom commands natively.
          </p>
        </div>
        
        <InteractiveTerminal />
      </div>

      {/* About Me Details Section */}
      <AboutMeSection />

      {/* Chronological Education History */}
      <EducationSection />

      {/* Technical, Soft Skills & Strengths Dashboard */}
      <SkillsSection />

      {/* Projects Timeline & Academic Practicums */}
      <ProjectsSection />

      {/* Verifiable Certifications and Badges */}
      <CertificationsSection />

      {/* Aesthetic Hobbies and Inherent Motivations */}
      <InterestsSection />

      {/* Modern Contact Form Grid and copy elements */}
      <ContactSection />

      {/* World-Class Footer */}
      <footer className="border-t border-[#334155]/20 bg-[#0b1324]/50 py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-mono">
              AP
            </div>
            <p className="text-xs text-gray-400 font-sans">
              &copy; {new Date().getFullYear()} Ashwin Portfolio. Designed with premium Bento Slate grids.
            </p>
          </div>

          <div className="flex items-center gap-6 font-mono text-[10px] text-gray-500">
            <div className="flex items-center gap-1.5">
              <Cpu className="w-3 h-3 text-blue-500" />
              <span>CORE_NODE: ACTIVE</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Laptop className="w-3 h-3 text-emerald-500" />
              <span>ENV: STABLE_BUILD</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

