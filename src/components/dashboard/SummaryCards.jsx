import Card from "./Card";
// import { transactions } from "../../data/mockData";

export default function SummaryCards({transactions}) {
  console.log(transactions)
  const income = transactions
    .filter(t => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expense;

  if (transactions.length === 0) {
  return <p>No data available</p>;
}

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card title="Total Balance" value={`₹${balance}`} />
      <Card title="Income" value={`₹${income}`} />
      <Card title="Expenses" value={`₹${expense}`} />
    </div>
  );
}