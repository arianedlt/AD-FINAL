export default function SecuritySettings({ twoFactorEnabled, onTwoFactorChange }) {
  return (
    <section className="panel">
      <div className="panel-heading"><div><p className="eyebrow">Protection</p><h2>Security Settings</h2></div></div>
      <div className="security-status"><span className="status-icon">✓</span><div><strong>Account protection active</strong><p>Your account has a secure password and verified email.</p></div></div>
      <div className="toggle-row"><div><strong>Two-factor authentication</strong><span>Add an extra verification step at sign-in</span></div><button type="button" className={twoFactorEnabled ? "toggle on" : "toggle"} aria-pressed={twoFactorEnabled} onClick={() => onTwoFactorChange(!twoFactorEnabled)} aria-label="Two-factor authentication"><span /></button></div>
    </section>
  );
}
