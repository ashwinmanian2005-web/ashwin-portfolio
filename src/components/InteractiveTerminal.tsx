/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { Terminal, Play, RotateCcw, ChevronRight } from "lucide-react";
import { ASHWIN_DATA } from "../types";

export function InteractiveTerminal() {
  const [terminalHistory, setTerminalHistory] = useState<Array<{ type: "input" | "output" | "error"; text: string }>>([
    { type: "output", text: "# Python 3.11.2 - Ashwin Personal Profiler (Initialized successfully)" },
    { type: "output", text: "# Type a command or click any of the preset chips below to invoke dynamic outputs:" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const presets = [
    { label: "Run ashwin.py", cmd: "python ashwin.py" },
    { label: "Check Skills", cmd: "python -m skills" },
    { label: "Get Academics", cmd: "cat education.json" },
    { label: "Goal & Objective", cmd: "career_objective.sh" },
  ];

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalHistory]);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    // Command Parser
    const commandLower = trimmed.toLowerCase();

    if (commandLower === "clear") {
      setTerminalHistory([]);
      return;
    }

    // Append raw input command immediately
    setTerminalHistory(prev => [...prev, { type: "input", text: trimmed }]);

    setTimeout(() => {
      let outputs: Array<{ type: "input" | "output" | "error"; text: string }> = [];

      if (commandLower.includes("ashwin.py") || commandLower === "run" || commandLower === "1") {
        outputs = [
          { type: "output", text: "[Loading main module ashwin.py...]" },
          { type: "output", text: "--------------------------------------------------------" },
          { type: "output", text: "🎓 NAME:         Ashwin" },
          { type: "output", text: "📅 DOB:          24 August 2005" },
          { type: "output", text: "📍 LOCATION:     Tirunelveli, TN" },
          { type: "output", text: "🏛️ INSTITUTION:  Narayanaguru College of Engineering" },
          { type: "output", text: "⚡ DEGREE:       B.E. Computer Science Engineering (4th Year)" },
          { type: "output", text: "🎯 DREAM ROLE:   Software Developer in IT Industry" },
          { type: "output", text: "🌟 OBJECTIVE:    Build a successful career through learning & problem solving" },
          { type: "output", text: "--------------------------------------------------------" },
          { type: "output", text: "🚀 Status: Active & Ready for immediate recruiter inquiries!" }
        ];
      } else if (commandLower.includes("skills") || commandLower.includes("tech") || commandLower === "2") {
        outputs = [
          { type: "output", text: ">>> Retrieving tech stack categories..." },
          { type: "output", text: "Python:                 ██████████████████░░ 85% - Advanced Scripting" },
          { type: "output", text: "Prog. Fundamentals:     ████████████████████ 90% - OOP, Patterns" },
          { type: "output", text: "Problem Solving:        ██████████████████░░ 88% - Logical Algorithms" },
          { type: "output", text: "Continuous Learning:    ████████████████████ 95% - High Adaptability" },
          { type: "output", text: "Soft Skills:            Problem Solving, Communication, Quick Learning" },
          { type: "output", text: "Strengths:              Self-Motivated, Hardworking, Highly Adaptable" }
        ];
      } else if (commandLower.includes("education") || commandLower.includes("academics") || commandLower === "3" || commandLower.includes("json")) {
        outputs = [
          { type: "output", text: ">>> Loading education.json..." },
          { type: "output", text: JSON.stringify(ASHWIN_DATA.education, null, 2)
            .split("\n")
            .map(line => "  " + line)
            .join("\n")
          }
        ];
      } else if (commandLower.includes("career") || commandLower.includes("objective") || commandLower === "4" || commandLower.includes("goal")) {
        outputs = [
          { type: "output", text: "[Executing career_objective.sh]" },
          { type: "output", text: `"${ASHWIN_DATA.personal.careerGoal}"` },
          { type: "output", text: "Dream Target: Join a reputed IT company, Master advanced cloud native platforms, and craft high-grade solutions." }
        ];
      } else if (commandLower === "help") {
        outputs = [
          { type: "output", text: "Available commands:" },
          { type: "output", text: "  python ashwin.py     - Check main student resume metrics" },
          { type: "output", text: "  python -m skills     - Fetch detail skills breakdown matrix" },
          { type: "output", text: "  cat education.json   - Output full JSON node of scholastic timeline" },
          { type: "output", text: "  career_objective.sh  - Prints professional industry objective" },
          { type: "output", text: "  clear                - Clear the console outputs" },
        ];
      } else {
        outputs = [
          { type: "error", text: `Command not found: '${trimmed}'.` },
          { type: "output", text: "Type 'help' to view the list of supported command parameters." }
        ];
      }

      setTerminalHistory(prev => [...prev, ...outputs]);
    }, 150);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputValue);
    setInputValue("");
  };

  const handleReset = () => {
    setTerminalHistory([
      { type: "output", text: "# Python environment reset successful." },
      { type: "output", text: "# Type 'help' or click presets below to populate telemetry dashboard:" }
    ]);
  };

  return (
    <div className="w-full bg-[#080d19]/80 border border-[#334155]/40 rounded-[24px] overflow-hidden shadow-2xl relative">
      {/* Terminal Title Bar */}
      <div className="bg-[#0b1324] px-5 py-3.5 border-b border-[#334155]/30 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Mac style control dots */}
          <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          <span className="text-xs text-gray-400 font-mono ml-2 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-blue-400" />
            ashwin_core@ubuntu: ~ (sandbox)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={handleReset}
            className="p-1 hover:bg-blue-950/40 rounded text-gray-450 hover:text-blue-400 transition"
            title="Reset Terminal"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <span className="text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-0.5 rounded font-mono font-semibold">
            LIVE PY-ENV
          </span>
        </div>
      </div>

      {/* Terminal Display Panel */}
      <div className="p-5 h-80 overflow-y-auto font-mono text-[13px] leading-relaxed text-zinc-300 space-y-2 select-text">
        {terminalHistory.map((log, index) => (
          <div key={index} className="whitespace-pre-wrap">
            {log.type === "input" ? (
              <div className="flex items-start text-blue-400">
                <span className="text-blue-500 mr-2 select-none">$</span>
                <span>{log.text}</span>
              </div>
            ) : log.type === "error" ? (
              <div className="text-rose-400 mr-2 flex">
                <span className="text-rose-500 mr-2 select-none">✕ ERROR:</span>
                <span>{log.text}</span>
              </div>
            ) : (
              <div className="text-emerald-400/90">{log.text}</div>
            )}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Preset Command Shortcuts */}
      <div className="p-4 bg-[#0a1222] border-t border-[#334155]/30">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-[11px] text-gray-400 font-mono font-semibold uppercase tracking-wider mr-1">Quick Actions:</span>
          {presets.map((preset) => (
            <button
              key={preset.label}
              onClick={() => executeCommand(preset.cmd)}
              className="px-3 py-1.5 text-xs font-mono bg-blue-950/40 hover:bg-blue-900/40 text-blue-300 rounded-lg border border-blue-900/40 hover:border-blue-400/30 transition-all flex items-center gap-1.5 active:scale-95"
            >
              <Play className="w-2.5 h-2.5 text-emerald-400 fill-emerald-400/20" />
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="flex border-t border-[#334155]/30 bg-[#050a14]">
        <div className="pl-5 flex items-center text-blue-500 font-mono select-none">
          <ChevronRight className="w-4 h-4" />
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type python command (e.g. 'help', 'python ashwin.py') and press enter..."
          className="w-full bg-transparent px-2 py-3.5 text-zinc-100 font-mono text-[13px] focus:outline-none placeholder:text-gray-600"
        />
        <button
          type="submit"
          className="bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 font-mono text-xs px-5 border-l border-[#334155]/30 transition flex items-center gap-1.5"
        >
          Execute
        </button>
      </form>
    </div>
  );
}
