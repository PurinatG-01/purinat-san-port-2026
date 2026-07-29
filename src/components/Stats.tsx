const STATS = [
  { num: "5+", label: "Years in production" },
  { num: "50K+", label: "Daily transactions handled" },
  { num: "50%", label: "Faster feature delivery" },
  { num: "5", label: "SEA regions served" },
];

export default function Stats() {
  return (
    <section data-reveal className="stats">
      {STATS.map((s) => (
        <div className="stat" key={s.label}>
          <div className="stat-num">{s.num}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </section>
  );
}
