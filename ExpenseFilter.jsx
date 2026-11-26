export default function ExpenseFilter({ value, onChange }) {
  const options = ["All", "Inventory", "Utilities", "Supplies", "Payroll", "Marketing"];
  return (
    <section className="filter-row">
      <div className="filter-chips">
        {options.map((option) => (
          <button key={option} className={value === option ? "chip active" : "chip"} onClick={() => onChange(option)}>{option}</button>
        ))}
      </div>
    </section>
  );
}