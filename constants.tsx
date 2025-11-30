import { Project, Service, Skill, Testimonial, SocialLink, TimelineItem, EducationItem, CertificationItem } from './types';

export const PERSONAL_DETAILS = {
  name: "Christian Joshua Casin",
  brand: "Adaptica Tech Solutions",
  tagline: "CEO of Adaptica Tech Solutions | Integrating Machines to Software.",
  bio: "I am the CEO, CFO, and Founder of Adaptica Tech Solutions, and a seasoned software engineer with extensive experience in Oracle Middleware and Application Support. My expertise lies in bridging the gap between industrial machinery and modern software ecosystems, utilizing Oracle Integration Cloud (OIC), SCADA systems, and robust infrastructure.",
  email: "christianjoshuacasin@gmail.com",
  phone: "+63 919 003 6230",
  location: "Manila, Philippines",
  website: "https://adapticatechsolutions.com"
};

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export const EXPERIENCE: TimelineItem[] = [
  {
    year: "Feb 2025 - Present",
    role: "CEO, CFO and Founder",
    company: "Adaptica Tech Solutions",
    description: "Founder acting as CTO, handling all development projects with a focus on Web Application and Mobile Development. Specializing in integrating machines to software applications."
  },
  {
    year: "May 2024 - Present",
    role: "Application Support Generalist",
    company: "Fantastic Furniture",
    description: "Providing application support using Microsoft AX and Microsoft SQL Server Management Studio. Handling level 2 support tickets by investigating and fixing integration issues."
  },
  {
    year: "Feb 2024 - May 2024",
    role: "Oracle Middleware App Dev",
    company: "Accenture",
    description: "Oracle OIC Developer responsible for investigating level 2 tickets, planning deployments, and deploying integrations."
  },
  {
    year: "Sep 2022 - Feb 2024",
    role: "Team Lead Oracle Middleware",
    company: "Accenture",
    description: "Oracle OIC Developer leading development and enhancement of integrations. Ensured security and business requirements were met, monitored instance health, and implemented changes following best practices."
  },
  {
    year: "Nov 2019 - Sep 2022",
    role: "IT Service Desk Sub Lead",
    company: "Accenture",
    description: "Managed incident and problem management, reviewed report quality, and implemented best practices. Created schedules and capacity planning, ensuring SLAs were met. Daily use of SQL and Linux for system maintenance."
  },
  {
    year: "Feb 2018 - Nov 2019",
    role: "Freelance Programmer",
    company: "Self-Employed",
    description: "Engaged in client consultations for technical requirements. Created web, software, and mobile solutions based on client needs and limitations."
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Mapua University",
    year: "2019"
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: "Oracle Cloud Platform Application Integration 2022 Professional"
  },
  {
    name: "ITIL 4 Foundation"
  }
];

export const SERVICES: Service[] = [
  {
    title: "Custom SCADA Development",
    description: "Architecting and building SCADA systems from scratch to fully integrate physical machines with software for real-time monitoring and control.",
    icon: "Factory"
  },
  {
    title: "Oracle Integration Cloud",
    description: "Seamless enterprise connectivity using OIC to unify disparate applications, ERPs, and data sources into a cohesive ecosystem.",
    icon: "CloudCog"
  },
  {
    title: "NAS Infrastructure",
    description: "Expert design, deployment, and management of NAS server architectures for secure, high-availability data storage and backup solutions.",
    icon: "HardDrive"
  },
  {
    title: "Web & Mobile Development",
    description: "Building high-performance, scalable web and mobile applications tailored to specific business requirements using modern stacks.",
    icon: "Code2"
  }
];

export const SKILLS: Skill[] = [
  { name: "Oracle OIC", level: 95, category: "Backend" },
  { name: "Oracle SOA", level: 90, category: "Backend" },
  { name: "SCADA Systems", level: 98, category: "Industrial" },
  { name: "IT Service Management", level: 95, category: "Management" },
  { name: "SQL", level: 90, category: "Backend" },
  { name: "Linux & Unix", level: 85, category: "Infrastructure" },
  { name: "Java", level: 85, category: "Backend" },
  { name: "PHP", level: 80, category: "Backend" },
  { name: "HTML / CSS", level: 95, category: "Frontend" },
  { name: "Figma", level: 80, category: "Design" },
  { name: "React / Next.js", level: 90, category: "Frontend" },
];

export const PROJECTS: Project[] = [
  {
    id: "0",
    title: "Beat Audio",
    category: "Web",
    description: "A modern, responsive web application demonstrating advanced frontend development skills and UI/UX design capabilities.",
    image: "https://picsum.photos/600/400?random=10",
    technologies: ["React", "Tailwind CSS", "Vercel"],
    link: "https://beataudio.vercel.app/#",
    github: "#"
  },
  {
    id: "1",
    title: "Custom SCADA Platform",
    category: "Web",
    description: "A proprietary SCADA system built from the ground up, integrating legacy factory machinery with a modern web-based monitoring dashboard.",
    image: "https://picsum.photos/600/400?random=1",
    technologies: ["React", "Custom Protocols", "WebSocket", "Node.js"],
    link: "#",
    github: "#"
  },
  {
    id: "2",
    title: "Enterprise OIC Hub",
    category: "Web",
    description: "A centralized integration hub utilizing Oracle Integration Cloud to sync inventory data between SAP ERP and a headless e-commerce frontend.",
    image: "https://picsum.photos/600/400?random=2",
    technologies: ["Oracle Integration Cloud", "REST APIs", "Next.js"],
    link: "#",
    github: "#"
  },
  {
    id: "3",
    title: "Adaptica Brand Identity",
    category: "Design",
    description: "Complete corporate branding for Adaptica Tech Solutions, focusing on the synergy between industrial hardware and modern software.",
    image: "https://picsum.photos/600/400?random=3",
    technologies: ["Figma", "Illustrator", "Brand Strategy"],
    link: "#"
  },
  {
    id: "4",
    title: "Secure NAS Cloud Env",
    category: "Web",
    description: "Implementation of a private cloud infrastructure on custom NAS servers, providing encrypted remote access for sensitive client data.",
    image: "https://picsum.photos/600/400?random=4",
    technologies: ["Linux", "NAS", "Docker", "OpenVPN"],
    link: "#",
    github: "#"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Plant Manager",
    company: "Industrial Co.",
    content: "Christian built our SCADA system from scratch when off-the-shelf solutions failed. The integration with our older machines is seamless.",
    avatar: "https://picsum.photos/100/100?random=5"
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "CTO",
    company: "Logistics Flow",
    content: "Adaptica's expertise in Oracle Integration Cloud saved us months of development time. Our systems now communicate perfectly.",
    avatar: "https://picsum.photos/100/100?random=6"
  },
  {
    id: "3",
    name: "Jessica Williams",
    role: "Director",
    company: "Tech Start",
    content: "The NAS infrastructure set up by Adaptica is rock solid. We have complete peace of mind regarding our data security and backups.",
    avatar: "https://picsum.photos/100/100?random=7"
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: "Website", url: "https://adapticatechsolutions.com", icon: "Globe" },
  { platform: "GitHub", url: "https://github.com", icon: "Github" },
  { platform: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
  { platform: "Twitter", url: "https://twitter.com", icon: "Twitter" },
];