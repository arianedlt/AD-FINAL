import { useState } from "react";

export default function ExpenseForm({ onAdd }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ date: "", description: "", category: "Inventory", amount: "" });

  const submit = (event) => {
    event.preventDefault();
    if (!form.description || !form.amount) return;
    onAdd({ ...form, amount: Number(form.amount), date: form.date || new Date().toISOString().slice(0, 10) });
    setForm({ date: "", description: "", category: "Inventory", amount: "" });
    setOpen(false);
  };

  return (
    <>
      <button className="primary-btn" onClick={() => setOpen(true)}>+ Add Expense</button>
      {open && (
        <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}>
          <form className="modal" onSubmit={submit}>
            <div className="modal-title"><div><p className="eyebrow">New entry</p><h2>Add Expense</h2></div><button type="button" className="icon-btn" onClick={() => setOpen(false)}>×</button></div>
            <label>Description<input required value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="What did you spend on?" /></label>
            <div className="form-row">
              <label>Date<input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} /></label>
              <label>Amount (₱)<input required type="number" min="0" step="0.01" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} placeholder="0.00" /></label>
            </div>
            <label>Category<select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}><option>Inventory</option><option>Utilities</option><option>Supplies</option><option>Payroll</option><option>Marketing</option></select></label>
            <div className="modal-actions"><button type="button" className="secondary-btn" onClick={() => setOpen(false)}>Cancel</button><button className="primary-btn" type="submit">Save Expense</button></div>
          </form>
        </div>
      )}
    </>
  );
}