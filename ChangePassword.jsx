import { useState } from "react";

export default function ChangePassword() {
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({ current: "", next: "", confirm: "" });
  const submit = (event) => {
    event.preventDefault();
    if (form.next && form.next === form.confirm) {
      setSaved(true);
      setForm({ current: "", next: "", confirm: "" });
      setTimeout(() => setSaved(false), 2500);
    }
  };
  return (
    <section className="panel">
      <div className="panel-heading"><div><p className="eyebrow">Security</p><h2>Change Password</h2></div></div>
      <form className="settings-form" onSubmit={submit}>
        <label>Current password<input type="password" required value={form.current} onChange={(e) => setForm({ ...form, current: e.target.value })} /></label>
        <div className="form-row"><label>New password<input type="password" required minLength="8" value={form.next} onChange={(e) => setForm({ ...form, next: e.target.value })} /></label><label>Confirm password<input type="password" required value={form.confirm} onChange={(e) => setForm({ ...form, confirm: e.target.value })} /></label></div>
        {saved && <p className="success">Password updated successfully.</p>}
        <div><button className="primary-btn" type="submit">Update Password</button></div>
      </form>
    </section>
  );
}
