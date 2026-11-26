const peso = (value) => `₱${Number(value).toLocaleString("en-PH", { minimumFractionDigits: 2 })}`;

export default function ExpenseSummary({ expenses }) {
  const total = expenses.reduce((sum, expense) => sum + Number(expense.amount), 0);
  const average = expenses.length ? total / expenses.length : 0;
  const largest = expenses.length ? Math.max(...expenses.map((expense) => Number(expense.amount))) : 0;
  return (
    <section className="stats-grid">
      <article className="stat-card"><span className="stat-icon green">₱</span><div><p>Total Expenses</p><h3>{peso(total)}</h3></div></article>
      <article className="stat-card"><span className="stat-icon blue">#</span><div><p>Transactions</p><h3>{expenses.length}</h3></div></article>
      <article className="stat-card"><span className="stat-icon amber">≈</span><div><p>Average Expense</p><h3>{peso(average)}</h3></div></article>
      <article className="stat-card"><span className="stat-icon coral">↑</span><div><p>Largest Expense</p><h3>{peso(largest)}</h3></div></article>
    </section>
  );
}