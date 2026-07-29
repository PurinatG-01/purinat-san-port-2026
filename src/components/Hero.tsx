export default function Hero() {
  return (
    <section id="top" data-reveal className="hero">
      <div>
        <div className="badge">
          <span className="badge-dot" />
          <span className="badge-text">Open to senior roles — Bangkok / Remote</span>
        </div>
        <h1>
          Purinat
          <br />
          Sanbundit
        </h1>
        <p className="hero-tagline">
          Full-Stack Software Engineer — mobile, web and event-driven systems.
        </p>
        <p className="hero-summary">
          Five-plus years shipping production software across banking, international web
          platforms and large-scale B2B MarTech. I work end to end: Flutter and Nuxt 3 on the
          front, reactive Kotlin services and Kafka on the back, CI/CD and clean architecture
          holding it together.
        </p>
        <div className="hero-ctas">
          <a href="mailto:purinat.san@gmail.com" className="btn btn-primary">
            Get in touch
          </a>
          <a href="#projects" className="btn btn-outline">
            See selected work
          </a>
        </div>
      </div>
      <figure className="portrait-frame">
        <img
          src="/portrait_1.jpeg"
          alt="Purinat Sanbundit"
          className="portrait-img"
        />
        <figcaption className="portrait-caption">
          Bangkok, Thailand · +66 97-227-1804 · purinat.san@gmail.com
        </figcaption>
      </figure>
    </section>
  );
}
