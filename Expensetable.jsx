const peso = (value) => `₱${Number(value).toLocaleString("en-PH", { minimumFractionDigits: 2 })}`;

export default function ExpenseTable({ expenses, onDelete }) {
  return (
    <section className="panel">
      <div className="panel-heading"><div><p className="eyebrow">Details</p><h2>Recent Expenses</h2></div></div>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Date</th><th>Description</th><th>Category</th><th className="right">Amount</th><th aria-label="Actions"></th></tr></thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.date}</td><td className="strong">{expense.description}</td><td><span className="tag">{expense.category}</span></td><td className="right strong">{peso(expense.amount)}</td>
                <td className="right"><button className="icon-btn danger" title="Delete expense" onClick={() => onDelete(expense.id)}>×</button></td>
              </tr>
            ))}
            {!expenses.length && <tr><td colSpan="5" className="empty">No expenses found for this filter.</td></tr>}
          </tbody>
        </table>
      </div>
    </section>
  );
}