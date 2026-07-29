import { useState } from "react";

interface ProjectData {
  label: string;
  duration: string;
  title: string;
  bullets: string[];
  moreBullets: string[];
  tags: string[];
}

const PROJECTS: ProjectData[] = [
  {
    label: "Enterprise B2B MarTech Platform",
    duration: "Major Thai enterprise group · Ongoing",
    title: "Distributed multi-domain system at 1K–50K+ daily transactions",
    bullets: [
      "Led development of a distributed system spanning Gamification, Commerce and Messaging domains, improving scalability and domain decoupling.",
      "Built and maintained the frontend and BFF layer with Nuxt 3, improving modularity and cutting feature delivery time by 50%.",
      "Implemented cross-domain integration over REST and Kafka event-driven messaging for asynchronous data flow between services.",
    ],
    moreBullets: [
      "Contributed reactive backend services in Spring WebFlux (Kotlin) following Clean Architecture, supporting non-blocking, scalable processing — including campaign features running 1,000–100,000 concurrent participants.",
      "Shipped features across Gamification (missions, ballots, challenges) and Commerce (campaigns, orders, packages), supporting complex large-scale workflows.",
      "Designed domain-specific data models and flows on MongoDB and PostgreSQL, optimising read/write performance by 25% across services.",
      "Reduced production incidents by 10% through improved error handling, retry mechanisms and async processing strategies.",
    ],
    tags: ["Nuxt 3", "Kotlin · Spring WebFlux", "Kafka", "MongoDB", "PostgreSQL"],
  },
  {
    label: "Flutter Web One-Stop Service Platform",
    duration: "Singapore-based client · 1 yr 3 mo",
    title: "One enterprise platform, five SEA regions",
    bullets: [
      "Developed an enterprise Flutter Web platform serving a one-stop service system used across multiple SEA regions.",
      "Built the BFF layer with Nest.js to aggregate and streamline backend communication for frontend consumption.",
      "Drove cross-team alignment across 5 regions — clarifying requirements and keeping delivery on track.",
    ],
    moreBullets: [
      "Collaborated with distributed teams across Asia-Pacific and Europe on cross-regional feature delivery.",
      "Helped shape project structure and architecture, introducing clearer module boundaries for better scalability and team collaboration.",
    ],
    tags: ["Flutter Web", "Nest.js", "BFF architecture"],
  },
  {
    label: "Mobile Banking Revamp",
    duration: "Thai banking client · 1 yr",
    title: "Legacy banking app rebuilt cross-platform in Flutter",
    bullets: [
      "Revamped a legacy mobile banking application with Flutter, unifying iOS and Android and reducing platform fragmentation.",
      "Drove the re-architecture, improving scalability and maintainability and enabling faster team delivery.",
      "Implemented CI/CD pipelines with Docker and Jenkins, cutting manual deployment effort and improving release consistency.",
    ],
    moreBullets: [
      "Automated end-to-end testing with a Given–When–Then approach, improving test reliability and regression coverage.",
      "Practised trunk-based development inside an Agile (Scrum) workflow to support continuous integration and delivery.",
      "Integrated Firebase services and secure backend APIs for real-time features and user data handling.",
    ],
    tags: ["Flutter", "Docker · Jenkins", "Firebase", "E2E automation"],
  },
];

function ProjectCard({ project }: { project: ProjectData }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="project-card">
      <div className="project-meta">
        <div className="project-label">{project.label}</div>
        <div className="project-duration">{project.duration}</div>
      </div>
      <h3>{project.title}</h3>
      <ul className="bullet-list">
        {project.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
        {open && project.moreBullets.map((b) => <li key={b}>{b}</li>)}
      </ul>
      <div className="tags">
        {project.tags.map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>
      <button
        type="button"
        className="toggle-btn"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? "— Show less" : "+ Full detail"}
      </button>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" data-reveal className="section">
      <div>
        <h2 className="section-eyebrow">Selected work</h2>
        <p className="section-sub">Three engagements at PALO IT, 2023 — present.</p>
      </div>
      <div>
        {PROJECTS.map((p) => (
          <ProjectCard project={p} key={p.label} />
        ))}
      </div>
    </section>
  );
}
