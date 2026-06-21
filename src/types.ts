/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PersonalDetails {
  name: string;
  role: string;
  tagline: string;
  dob: string;
  location: string;
  languages: string[];
  college: string;
  degree: string;
  year: string;
  dreamRole: string;
  careerGoal: string;
  email: string;
  phone: string;
}

export interface EducationItem {
  stage: string;
  institution: string;
  details: string;
  status: string;
}

export interface SkillItem {
  name: string;
  category: "Technical" | "Soft Skill" | "Strength";
  level?: number; // percentage confidence / progress
  description?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  badgeColor: string;
}

export interface InterestItem {
  name: string;
  iconName: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  status: string;
  tags: string[];
}

export const ASHWIN_DATA = {
  personal: {
    name: "Ashwin",
    role: "Computer Science Engineering Student",
    tagline: "Passionate about learning technology and building a successful career in software development",
    dob: "24 August 2005",
    location: "Tirunelveli, Tamil Nadu",
    languages: ["Tamil", "English"],
    college: "Narayanaguru College of Engineering",
    degree: "B.E. Computer Science Engineering",
    year: "4th Year (Final Year)",
    dreamRole: "Software Developer",
    careerGoal: "To join a reputed IT company as a software developer, improve technical expertise, and contribute to innovative software solutions.",
    email: "ashwinmanian2005@gmail.com",
    phone: "+91 6383261631"
  } as PersonalDetails,

  education: [
    {
      stage: "B.E. Computer Science Engineering",
      institution: "Narayanaguru College of Engineering",
      details: "4th Year Undergraduate (Focusing on Core Computer Science Concepts)",
      status: "In Progress"
    },
    {
      stage: "Higher Secondary Certificate (HSC)",
      institution: "Sankar Higher Secondary School",
      details: "Completed | Score: 427 Marks",
      status: "Completed"
    },
    {
      stage: "Secondary School Leaving Certificate (SSLC)",
      institution: "Sankar Higher Secondary School",
      details: "Completed core secondary education with strong foundations",
      status: "Completed"
    }
  ] as EducationItem[],

  skills: [
    // Technical Skills
    { name: "Python", category: "Technical", level: 85, description: "Core programming, scripting, data automation" },
    { name: "Programming Fundamentals", category: "Technical", level: 90, description: "OOPs, variables, structures, logical flows" },
    { name: "Problem Solving", category: "Technical", level: 88, description: "Algorithmic thinking, structural breakdown of problems" },
    { name: "Continuous Learning", category: "Technical", level: 95, description: "Rapid adaptation and mastering new tech stacks" },
    
    // Soft Skills
    { name: "Problem Solving", category: "Soft Skill", level: 90 },
    { name: "Communication", category: "Soft Skill", level: 85 },
    { name: "Quick Learning", category: "Soft Skill", level: 92 },
    
    // Strengths
    { name: "Self Motivated", category: "Strength", level: 95 },
    { name: "Hardworking", category: "Strength", level: 92 },
    { name: "Adaptability", category: "Strength", level: 90 }
  ] as SkillItem[],

  certifications: [
    {
      title: "Python Certification",
      issuer: "Guvi / Academic Learning Partners",
      date: "2025",
      badgeColor: "from-blue-500 to-indigo-600"
    }
  ] as CertificationItem[],

  projects: [
    {
      title: "Self-Paced Coding Practice Modules",
      description: "A comprehensive personal repository of competitive programming challenges, algorithmic problems solved in Python, and data structures implementation.",
      status: "Ongoing Practice",
      tags: ["Python", "Algorithms", "Problem Solving"]
    },
    {
      title: "Academic Lab Projects",
      description: "Developing curriculum-based full-scope projects including Database Management, Network Socket Simulators, and Object-Oriented software architectures.",
      status: "Completed / Academic",
      tags: ["OOPs", "Relational Databases", "Computer Networking"]
    },
    {
      title: "IT Careers Research & Tech Stacks Drill-down",
      description: "An analytical project exploring IT roles, industry standards, modern software development lifecycles, and cloud fundamentals.",
      status: "Research Phase",
      tags: ["Software Engineering Ready", "Agile", "Modern Tech Stacks"]
    }
  ] as ProjectItem[],

  interests: [
    {
      name: "Gaming",
      iconName: "Gamepad2",
      description: "Strategic decision making, team coordination, and immersive gaming worlds."
    },
    {
      name: "Coin Collection",
      iconName: "Coins",
      description: "Preserving historical values, documenting timeline lineages, and numismatic indexing."
    },
    {
      name: "Learning New Technologies",
      iconName: "Cpu",
      description: "Reading forums, building sandboxed mini prototypes, and remaining at the cutting-edge."
    }
  ] as InterestItem[]
};
