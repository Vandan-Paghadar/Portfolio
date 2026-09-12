export const site = {
  name: "Vandan Paghadar",
  firstName: "Vandan",
  lastName: "Paghadar",
  roleLine: "Student • Developer • AI Enthusiast",
  tagline:
    "Learning by building, experimenting, and exploring what technology can do.",
  statusLine: "Class 11 • Currently learning",
  title: "Vandan Paghadar — Student Developer",
  description:
    "Personal portfolio of Vandan Paghadar, a Class 11 student exploring programming, AI, web development, and emerging technologies.",
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Learning", href: "#learning" },
  { label: "Early Work", href: "#early-work" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const about = {
  paragraphs: [
    "I’m a Class 11 student interested in programming, AI, web development, and how technology actually works.",
    "That interest started during COVID, when I first enrolled in WhiteHat Jr. One of my earliest memories from that time is an Hour of Code activity — I didn’t have a big plan. I was just curious.",
    "Since then I’ve been learning by experimenting: programming, Python, web development, the fundamentals of cybersecurity and ethical hacking, and more recently AI, LLMs, and agentic coding.",
    "I enjoy understanding how things work and trying to build something small to see if I got it. I’m still exploring different areas and figuring out where I want to take these skills.",
  ],
};

export const learning = [
  {
    category: "Programming",
    items: ["Python", "Node.js"],
  },
  {
    category: "Web",
    items: ["HTML", "CSS", "JavaScript", "Web Development"],
  },
  {
    category: "AI",
    items: ["AI / LLMs", "Agentic Coding", "AI-assisted Development"],
  },
  {
    category: "Exploring",
    items: ["Cybersecurity", "Ethical Hacking", "Emerging Technologies"],
  },
] as const;

export const journey = [
  {
    label: "COVID period",
    title: "Curiosity starts",
    body: "This is when I first got interested in technology — not with a career plan, just with questions.",
  },
  {
    label: "WhiteHat Jr",
    title: "First structured lessons",
    body: "I enrolled in WhiteHat Jr and started seeing programming as something I could actually try.",
  },
  {
    label: "Hour of Code",
    title: "An early coding experience",
    body: "One of my first hands-on coding activities, from the same early period.",
  },
  {
    label: "Early experiment",
    title: "Water Level Rising Indicator",
    body: "I experimented with electronics and programming by building a simple real-world indicator.",
  },
  {
    label: "2023",
    title: "Udemy",
    body: "I continued learning through Udemy and kept exploring programming on my own.",
  },
  {
    label: "2024",
    title: "Python",
    body: "I started learning Python more seriously and spending more time writing code.",
  },
  {
    label: "Along the way",
    title: "Cybersecurity & ethical hacking",
    body: "I became interested in the fundamentals of cybersecurity and ethical hacking — exploring, not claiming expertise.",
  },
  {
    label: "Continuing",
    title: "Web development",
    body: "I began learning how websites are built — HTML, CSS, JavaScript, and the surrounding tools.",
  },
  {
    label: "Now",
    title: "AI + agentic coding",
    body: "I’m currently exploring AI, LLMs, and coding with agents — still figuring out the landscape.",
  },
  {
    label: "Today",
    title: "Still learning and building",
    body: "I’m still exploring different areas and building as I go.",
  },
] as const;

export const earlyWork = {
  quote:
    "Before I knew what I wanted to build, I was already trying to build things.",
  certificate: {
    title: "My First Steps Into Coding",
    subtitle: "Hour of Code — WhiteHat Jr",
    description:
      "One of my earliest experiences with programming, during the COVID period.",
    imageSrc: "/certificate/hour-of-code.png",
    imageAlt: "WhiteHat Jr Hour of Code certificate",
  },
  video: {
    title: "Water Level Rising Indicator",
    description:
      "One of my early experiments with electronics and programming — building a simple indicator that responds as the water level rises.",
    src: "/videos/water-level-indicator.mp4",
    poster: "/videos/water-level-indicator-poster.jpg",
  },
};

export type Project = {
  name: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  media?: {
    type: "image" | "video";
    src: string;
    alt?: string;
  };
  status: "in-progress" | "learning" | "experiment" | "paused";
};

export const projects: Project[] = [];

export const exploring = [
  "Artificial Intelligence",
  "Web Development",
  "Developer Tools",
  "Automation",
  "AI Agents",
  "Programming",
  "Cybersecurity",
  "Emerging Technologies",
] as const;

export const socials: {
  github: { label: string; href: string };
  linkedin: { label: string; href: string };
  email: { label: string; href: string };
} = {
  github: {
    label: "GitHub",
    href: "https://github.com/vandan-paghadar",
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vandan-paghadar",
  },
  email: {
    label: "Email",
    href: "mailto:vandanpaghadar@gmail.com",
  },
};
