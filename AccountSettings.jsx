export default function AccountSettings({ value, onChange }) {
  return (
    <section className="panel">
      <div className="panel-heading"><div><p className="eyebrow">Preferences</p><h2>Account Settings</h2></div></div>
      <div className="toggle-list">
        {[
          ["reports", "Weekly reports", "Receive a weekly business summary"],
          ["alerts", "Expense alerts", "Get notified about unusually large expenses"],
          ["marketing", "Product updates", "Receive product news and announcements"],
        ].map(([key, title, copy]) => (
          <div className="toggle-row" key={key}><div><strong>{title}</strong><span>{copy}</span></div><button type="button" className={value[key] ? "toggle on" : "toggle"} aria-label={title} aria-pressed={value[key]} onClick={() => onChange({ ...value, [key]: !value[key] })}><span /></button></div>
        ))}
      </div>
    </section>
  );
}
