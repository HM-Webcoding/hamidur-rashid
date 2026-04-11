export const personal = {
  name: "Hamidur Rashid",
  title: "Front-End Engineer",
  specialization: "Next.js & React Specialist",
  profileUrl: "/assets/profile.png",
  location: "Bangladesh 🇧🇩",
  email: "Hamidmonju1@gmail.com",
  phone: "+8801867707517",
  github: "HM-Webcoding",
  linkedin: "hamidur-rashid",
  bio: "Passionate Front-End Engineer crafting pixel-perfect, high-performance web experiences with Next.js and React. I bridge the gap between design and code — turning Figma files into living, breathing interfaces.",
  available: true,
  stats: [
    { value: "2+", label: "Years Exp." },
    { value: "5+", label: "Projects" },
    { value: "1", label: "Company" },
  ],
};

export const projects = [
  {
    id: 1,
    slug: "finflow",
    title: "FinFlow",
    subtitle: "Financial Dashboard",
    description:
      "A full-featured financial dashboard with interactive charts, transaction tracking, budget management, and real-time data visualizations. Built for performance and usability.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
    liveLink: "https://fin-flow-virid-seven.vercel.app/",
    codeLink: "https://github.com/HM-Webcoding/FinFlow",
    featured: true,
    color: "#0d9488",
    gradient: "from-teal-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    slug: "online-assessment-platform",
    title: "Online Assessment Platform",
    subtitle: "Educational Tool",
    description:
      "A scalable online exam system built with Next.js and TypeScript, featuring dynamic question types (MCQ, Text, Mixed), role-based validation, and a seamless experience for both admins and candidates.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React Hook Form", "Zod"],
    liveLink: "https://online-assessment-platform-rose.vercel.app/",
    codeLink: "https://github.com/HM-Webcoding/Online-Assessment-Platform",
    featured: false,
    color: "#0d9488",
    gradient: "from-teal-500/20 to-cyan-500/20",
  },
  {
    id: 3,
    slug: "chatting-application",
    title: "Chatting Application",
    subtitle: "Real-time Chat App",
    description:
      "Real-time chat app with Authentication, Friend Requests, Group Chats, Notifications, and Profile Settings — powered by Firebase.",
    tech: ["React", "Redux", "Material UI", "Firebase"],
    liveLink: "https://chat-app-eight-pied-57.vercel.app",
    codeLink: "https://github.com/HM-Webcoding/chat-app",
    featured: false,
    color: "#6366f1",
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
  {
    id: 4,
    slug: "crud-application",
    title: "CRUD Application",
    subtitle: "Data Management",
    description:
      "Full-featured CRUD web app with insert, update, delete operations and a powerful search feature for a smooth user experience.",
    tech: ["React", "React Router"],
    liveLink: "https://react-router-dom-smoky.vercel.app",
    codeLink: "https://github.com/HM-Webcoding/react-router-dom",
    featured: false,
    color: "#f59e0b",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    id: 5,
    slug: "figma-pixel-perfect-agency",
    title: "Figma → Pixel Perfect",
    subtitle: "Agency Website",
    description:
      "A website built directly from Figma with flawless pixel-perfect accuracy and color fidelity — showcasing the design-to-code pipeline.",
    tech: ["HTML5", "CSS3", "Figma"],
    liveLink: "https://hm-webcoding.github.io/innovate-two",
    codeLink: "https://github.com/HM-Webcoding/innovate-two",
    featured: false,
    color: "#f24e1e",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    id: 6,
    slug: "agency-portfolio",
    title: "Agency Portfolio",
    subtitle: "Responsive Website",
    description:
      "A fully responsive portfolio website for agencies, built with Next.js and SCSS for a clean, professional look across all devices.",
    tech: ["Next.js", "SCSS", "Bootstrap"],
    liveLink: "https://natto-portfolio.vercel.app",
    codeLink: "https://github.com/HM-Webcoding/natto-portfolio",
    featured: false,
    color: "#8b5cf6",
    gradient: "from-violet-500/20 to-purple-500/20",
  },
];

export const experience = [
  {
    role: "Front-End Developer",
    company: "Appifylab",
    product: "EzyCourse LMS",
    productUrl: "https://ezycourse.com",
    period: "2024 — Present",
    current: true,
    description:
      "Working on the EzyCourse LMS platform — a powerful learning management system used by thousands of creators worldwide.",
    responsibilities: [
      "Collaborate with the frontend team to design and develop user-friendly interfaces for the EzyCourse LMS.",
      "Utilize Next.js to create responsive and dynamic elements for the builder, dashboard, & landing pages.",
      "Assist clients with onboarding, providing support to resolve platform-related issues.",
      "Work closely with team members to enhance product features and improve overall user experience.",
    ],
  },
];

export const skillCategories = [
  {
    label: "Frontend",
    color: "#0d9488",
    skills: [
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Redux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      },
      {
        name: "SCSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      },
    ],
  },
  {
    label: "UI Libraries",
    color: "#6366f1",
    skills: [
      {
        name: "Tailwind",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      },
      {
        name: "Shadcn UI",
        icon: "https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/www/public/favicon.ico",
      },
      {
        name: "Material UI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      },
      {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
    ],
  },
  {
    label: "Backend & DB",
    color: "#8b5cf6",
    skills: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
    ],
  },
  {
    label: "Tools",
    color: "#f59e0b",
    skills: [
      {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "Photoshop",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
      },
      {
        name: "npm",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
      },
    ],
  },
];
