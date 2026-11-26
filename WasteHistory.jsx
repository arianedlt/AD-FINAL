export default function WasteHistory({ entries, onDelete }) {
  return (
    <section className="panel">
      <div className="panel-heading"><div><p className="eyebrow">Log</p><h2>Waste History</h2></div></div>
      <div className="history-list">
        {entries.map((entry) => (
          <article className="history-item" key={entry.id}>
            <div className="history-dot">♻</div>
            <div className="history-copy"><strong>{entry.item}</strong><span>{entry.category} · {entry.reason}</span></div>
            <div className="history-meta"><strong>{entry.quantity} {entry.unit}</strong><span>{entry.date}</span></div>
            <button className="icon-btn danger" title="Delete entry" onClick={() => onDelete(entry.id)}>×</button>
          </article>
        ))}
        {!entries.length && <p className="empty">No waste entries yet.</p>}
      </div>
    </section>
  );
}
