const SKILL_GROUPS = [
  {
    title: "Frontend & Mobile",
    items: ["Flutter — iOS, Android, Web", "Nuxt 3 / Vue.js", "React / Next.js", "Svelte"],
  },
  {
    title: "Backend & Architecture",
    items: [
      "Spring WebFlux (Kotlin)",
      "Nest.js / Express.js",
      "Gin (Go)",
      "REST APIs, Clean Architecture",
    ],
  },
  {
    title: "Data & Messaging",
    items: ["MongoDB", "PostgreSQL", "Kafka", "Redis"],
  },
  {
    title: "Tools & Cloud",
    items: ["Docker, Git", "Jenkins, GitHub Actions", "Google Cloud, AWS", "Firebase, Netlify"],
  },
];

export default function Skills() {
  return (
    <section id="skills" data-reveal className="section">
      <div>
        <h2 className="section-eyebrow">Stack</h2>
        <p className="section-sub">What I reach for, day to day.</p>
      </div>
      <div className="skills-grid">
        {SKILL_GROUPS.map((g) => (
          <div className="skill-col" key={g.title}>
            <h4>{g.title}</h4>
            <ul className="skill-list">
              {g.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
