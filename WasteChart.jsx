export default function WasteChart({ entries }) {
  const totals = entries.reduce((result, entry) => {
    result[entry.category] = (result[entry.category] || 0) + Number(entry.quantity);
    return result;
  }, {});
  const items = Object.entries(totals);
  const max = Math.max(...items.map(([, value]) => value), 1);

  return (
    <section className="panel chart-panel">
      <div className="panel-heading"><div><p className="eyebrow">Overview</p><h2>Waste by Category</h2></div></div>
      <div className="bar-chart">
        {items.map(([category, value], index) => (
          <div className="bar-row" key={category}>
            <span>{category}</span>
            <div className="bar-track"><div className={`bar bar-${index % 4}`} style={{ width: `${Math.max((value / max) * 100, 8)}%` }} /></div>
            <strong>{value.toFixed(1)} kg</strong>
          </div>
        ))}
        {!items.length && <p className="empty">No chart data yet.</p>}
      </div>
    </section>
  );
}
