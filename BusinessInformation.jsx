import { useState } from "react";

export default function BusinessInformation({ value, onChange }) {
  const [saved, setSaved] = useState(false);
  const submit = (event) => { event.preventDefault(); setSaved(true); setTimeout(() => setSaved(false), 2000); };
  const updateField = (field, fieldValue) => {
    onChange({ ...value, [field]: fieldValue });
    setSaved(false);
  };
  return (
    <section className="panel">
      <div className="panel-heading"><div><p className="eyebrow">Organization</p><h2>Business Information</h2></div></div>
      <form className="settings-form" onSubmit={submit}>
        <label>Business name<input value={value.name} onChange={(e) => updateField("name", e.target.value)} /></label>
        <label>Address<textarea value={value.address} onChange={(e) => updateField("address", e.target.value)} /></label>
        <label>Currency<select value={value.currency} onChange={(e) => updateField("currency", e.target.value)}><option value="PHP">Philippine Peso (₱)</option><option value="USD">US Dollar ($)</option></select></label>
        {saved && <p className="success">Business details saved.</p>}
        <div><button className="primary-btn" type="submit">Save Business</button></div>
      </form>
    </section>
  );
}
