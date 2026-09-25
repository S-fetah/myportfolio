/* Central content source — update copy/data here instead of hunting through JSX. */

export const PROFILE = {
  name: "Safiddine Abdelfetah",
  firstName: "Safiddine",
  lastName: "Abdelfetah",
  aka: "Fettah Safi",
  title: "Full-Stack Developer",
  location: "Médéa, Algeria",
  phone: "+213 659 235 442",
  email: "fettahsafi.6@gmail.com",
  valueProp:
    "Production Full-Stack Developer leading the backend of a travel commerce platform serving 10,000+ users — from UI to APIs to deployment.",
  about: [
    "I'm a Full-Stack Developer with production experience across both backend and frontend, currently leading backend development for Fennec Booking — a multi-vertical travel commerce platform serving 10,000+ active users across flights, hotels, transfers, packages, e-visa, eSIM, insurance, and ferries.",
    "I build with React, Next.js, Node.js, NestJS, and React Native, backed by PostgreSQL, Prisma, and Redis — and I'm comfortable across the full lifecycle, from UI to APIs to deployment with Docker, PM2, Nginx, and GitHub Actions CI/CD.",
  ],
};

export const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/abdelfetah-safiddine-46582b263/",
  github: "https://github.com/S-fetah",
  twitter: "https://x.com/abdelfetah78",
};

export const SKILL_GROUPS = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Redux",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Golang",
      "REST APIs",
      "Socket.IO",
    ],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "Prisma ORM", "Supabase", "MongoDB", "Redis", "SQL"],
  },
  {
    title: "Architecture & Infra",
    skills: [
      "Layered Architecture",
      "API Aggregation",
      "Idempotency",
      "Docker",
      "Docker Compose",
      "PM2",
      "Nginx",
      "Ubuntu VPS",
      "GitHub Actions CI/CD",
    ],
  },
  {
    title: "Security & Integrations",
    skills: [
      "JWT",
      "OAuth 2.0",
      "HMAC",
      "AES-256-GCM",
      "bcrypt",
      "Helmet",
      "CORS",
      "Rate Limiting",
      "SATIM",
      "AI Vision APIs",
      "Firebase Admin",
      "SendGrid",
      "Google Maps API",
      "Bull",
      "Joi",
      "Swagger/OpenAPI",
    ],
  },
];

export const LANGUAGES = ["Arabic", "French", "English"];

export const EXPERIENCE = [
  {
    role: "Backend Developer",
    company: "Fennec Booking",
    period: "Oct 2025 – Present",
    bullets: [
      "Designed, built, and operate the production backend for a multi-vertical travel platform serving 10,000+ active users across flights, hotels, transfers, packages, e-visa, eSIM, insurance, and ferries.",
      "Architected a layered backend with unified booking and payment flows that normalize multiple third-party travel providers for web and mobile clients.",
      "Integrated SATIM payments and built pricing, commission, reconciliation, wallet, and queued mobile top-up workflows.",
      "Built scalable real-time customer support using Socket.IO, Redis Pub/Sub, PM2 clustering, presence tracking, and Postgres LISTEN/NOTIFY fallback.",
      "Implemented Bull/Redis background jobs with retries, delayed processing, and crash/deployment recovery for transient operations.",
      "Implemented production security: JWT/OAuth, HMAC request signing, AES-256-GCM encrypted handoffs, strict CORS, Helmet, rate limiting, and server-side price validation.",
      "Integrated an AI-powered vision API for structured passport data extraction; deployed via Docker, PM2, Nginx, Ubuntu, and self-hosted GitHub Actions CI/CD.",
    ],
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    period: "2022 – 2023",
    bullets: [
      "Built fast, dynamic websites for independent clients using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Delivered end-to-end projects including a book printing shop website, a library management website, and a clothing e-commerce site — covering UI, backend APIs, and database design.",
    ],
  },
  {
    role: "Backend Developer — Driver Mobile App",
    company: "Academic Project",
    period: "2021 – 2022",
    bullets: [
      "Built the backend and server/client logic (CRUD processes) for a mobile app helping drivers locate exact places, plus supporting front-end pages.",
      "Used Node.js/Express for the server, MongoDB for data, and React Native for the mobile front-end, integrating Google Maps and other APIs for location accuracy.",
    ],
  },
];

export const EDUCATION = [
  {
    school: "Yahia Fares University of Médéa",
    degree: "Master 1/2, Systems Engineering and Web Technologies",
    period: "2023 – 2025",
    detail:
      "Advanced coursework in distributed systems, software architecture, and web technologies.",
  },
  {
    school: "Yahia Fares University of Médéa",
    degree: "Bachelor's Degree (Licence), Computer Systems",
    period: "2023",
    detail:
      "Core foundation in programming, databases, and computer systems.",
  },
];

/* image: key resolved to an imported asset in Projects.jsx; null = text-only card. */
export const PROJECTS = [
  {
    id: "printing-workshop",
    title: "Book Printing Shop Website",
    description:
      "End-to-end MERN website for a book printing shop — storefront UI, backend APIs, and database design delivered for an independent client.",
    image: "printerLibrary",
    alt: "Book printing shop website preview",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    id: "library-site",
    title: "Library Management Website",
    description:
      "Full-stack library management website covering catalog UI, backend APIs, and database design for an independent client.",
    image: "library",
    alt: "Library management website preview",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    id: "driver-app",
    title: "Driver Mobile App (Backend)",
    description:
      "Backend and server/client CRUD logic for a mobile app helping drivers locate exact places, with supporting front-end pages.",
    image: "driver",
    alt: "Driver mobile app preview",
    tags: ["Node.js", "Express.js", "MongoDB", "React Native", "Google Maps API"],
  },
  {
    id: "offline-maps",
    title: "Algerian Offline Maps Application",
    description:
      "JavaScript mapping app for Algeria with location discovery and offline-oriented access to hotels and parking.",
    image: null,
    alt: null,
    tags: ["JavaScript", "Mapping", "Offline-first"],
  },
  {
    id: "travel-saas",
    title: "Travel Agency SaaS / ERP & CRM",
    description:
      "SaaS architecture for Algerian travel agencies, including booking, CRM/ERP workflows, dashboards, and service integrations.",
    image: null,
    alt: null,
    tags: ["SaaS", "Booking", "CRM/ERP", "Dashboards"],
  },
];

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
