export default function WasteSummary({ entries }) {
  const total = entries.reduce((sum, entry) => sum + Number(entry.quantity), 0);
  const categories = new Set(entries.map((entry) => entry.category)).size;
  const topReason = entries.length ? entries.reduce((a, b) => a.quantity >= b.quantity ? a : b).reason : "No data";
  return (
    <section className="stats-grid">
      <article className="stat-card"><span className="stat-icon green">♻</span><div><p>Total Waste</p><h3>{total.toFixed(1)} kg</h3></div></article>
      <article className="stat-card"><span className="stat-icon blue">#</span><div><p>Entries</p><h3>{entries.length}</h3></div></article>
      <article className="stat-card"><span className="stat-icon amber">◫</span><div><p>Categories</p><h3>{categories}</h3></div></article>
      <article className="stat-card"><span className="stat-icon coral">!</span><div><p>Main Reason</p><h3>{topReason}</h3></div></article>
    </section>
  );
}
