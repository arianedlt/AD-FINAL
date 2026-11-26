import { useState } from "react";

export default function EditProfileForm({ profile, onCancel, onSave }) {
  const [form, setForm] = useState(profile);
  const submit = (event) => { event.preventDefault(); onSave(form); };
  return (
    <section className="panel">
      <div className="panel-heading"><div><p className="eyebrow">Personal details</p><h2>Edit Profile</h2></div></div>
      <form className="settings-form" onSubmit={submit}>
        <label>Full name<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label>
        <label>Email address<input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></label>
        <label>Phone number<input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></label>
        <div className="modal-actions"><button type="button" className="secondary-btn" onClick={onCancel}>Cancel</button><button className="primary-btn" type="submit">Save Changes</button></div>
      </form>
    </section>
  );
}
