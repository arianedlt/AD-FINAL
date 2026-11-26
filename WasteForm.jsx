import { useState } from "react";

export default function WasteForm({ onAdd }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    date: "",
    item: "",
    category: "Raw ingredients",
    quantity: "",
    unit: "kg",
    reason: "Overproduction",
  });

  const submit = (event) => {
    event.preventDefault();
    if (!form.item || !form.quantity) return;

    onAdd({
      ...form,
      quantity: Number(form.quantity),
      date: form.date || new Date().toISOString().slice(0, 10),
    });
    setForm({
      date: "",
      item: "",
      category: "Raw ingredients",
      quantity: "",
      unit: "kg",
      reason: "Overproduction",
    });
    setOpen(false);
  };

  return (
    <>
      <button className="primary-btn" onClick={() => setOpen(true)}>+ Log Waste</button>
      {open && (
        <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}>
          <form className="modal" onSubmit={submit}>
            <div className="modal-title">
              <div><p className="eyebrow">New entry</p><h2>Log Food Waste</h2></div>
              <button type="button" className="icon-btn" aria-label="Close" onClick={() => setOpen(false)}>×</button>
            </div>
            <div className="form-row">
              <label>Item name<input required value={form.item} onChange={(event) => setForm({ ...form, item: event.target.value })} placeholder="e.g. Cooked rice" /></label>
              <label>Date<input type="date" value={form.date} onChange={(event) => setForm({ ...form, date: event.target.value })} /></label>
            </div>
            <div className="form-row">
              <label>Quantity<input required type="number" min="0" step="0.1" value={form.quantity} onChange={(event) => setForm({ ...form, quantity: event.target.value })} placeholder="0.0" /></label>
              <label>Unit<select value={form.unit} onChange={(event) => setForm({ ...form, unit: event.target.value })}><option>kg</option><option>g</option><option>liters</option><option>pieces</option></select></label>
            </div>
            <label>Category<select value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })}><option>Raw ingredients</option><option>Fresh produce</option><option>Prepared food</option><option>Beverages</option></select></label>
            <label>Reason<select value={form.reason} onChange={(event) => setForm({ ...form, reason: event.target.value })}><option>Overproduction</option><option>Spoilage</option><option>Customer return</option><option>Preparation loss</option></select></label>
            <div className="modal-actions">
              <button type="button" className="secondary-btn" onClick={() => setOpen(false)}>Cancel</button>
              <button className="primary-btn" type="submit">Save Entry</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
