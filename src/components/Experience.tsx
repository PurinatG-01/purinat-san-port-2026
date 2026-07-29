export default function Experience() {
  return (
    <section id="experience" data-reveal className="section">
      <div>
        <h2 className="section-eyebrow">Experience</h2>
        <p className="section-sub">2021 — present.</p>
      </div>
      <div>
        <div className="exp-item">
          <div className="exp-head">
            <h3>PALO IT</h3>
            <div className="project-duration">Sep 2023 — Present</div>
          </div>
          <div className="exp-role">
            Software Engineer · Full-Stack Developer · IT Consultant
          </div>
          <p className="exp-desc">
            Delivering enterprise digital solutions across banking, international web
            platforms and large-scale B2B MarTech systems — three client engagements to
            date, detailed above.
          </p>
        </div>
        <div className="exp-item">
          <div className="exp-head">
            <h3>Dek-D Interactive Co., Ltd.</h3>
            <div className="project-duration">Mar 2021 — Aug 2023</div>
          </div>
          <div className="exp-role">Front-end Developer (full-time, from internship)</div>
          <ul className="bullet-list">
            <li>
              Developed and maintained a high-traffic web platform with Nuxt.js, React and
              Svelte, supporting large-scale user interaction.
            </li>
            <li>
              Implemented performance-optimised UI and WebView integration for the mobile
              app, improving rendering performance.
            </li>
            <li>
              Built responsive admin interfaces with React, Next.js and GraphQL for
              internal tooling and content management.
            </li>
            <li>
              Developed reusable components and internal tools that improved development
              efficiency across teams.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
