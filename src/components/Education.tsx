export default function Education() {
  return (
    <section data-reveal className="section">
      <div>
        <h2 className="section-eyebrow">Education &amp; Languages</h2>
      </div>
      <div className="edu-grid">
        <div>
          <div className="edu-head">
            <h3>Mahidol University</h3>
            <div className="project-duration">2018 — 2021</div>
          </div>
          <p className="edu-degree">
            BSc, Information and Communication Technology (MUICT)
          </p>
          <p className="edu-detail">
            Computer Software Engineering track. First Class Honours, GPA 3.51.
          </p>
          <div className="edu-project">
            <div className="edu-project-label">Final project · AiRadar, 2021</div>
            <p>
              Full-stack air quality monitoring platform — data ingestion and
              visualisation on Next.js, Express.js and MongoDB, IoT device integration,
              real-time tracking and notifications, deployed on DigitalOcean.
            </p>
          </div>
        </div>
        <div>
          <ul className="lang-list">
            <li>
              <strong>Thai</strong> — native speaker
            </li>
            <li>
              <strong>English</strong> — professional working proficiency; TOEIC 745
              (2020)
            </li>
          </ul>
          <p className="lang-note">
            Comfortable working in English across international teams — day-to-day
            collaboration with colleagues in Asia-Pacific and Europe.
          </p>
        </div>
      </div>
    </section>
  );
}
