

import { transactions } from "../../data/mockData";

export default function Insights() {

  // total income
  const income = transactions
    .filter(t => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  // total expense
  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  // category spending
  const categoryMap = {};

  transactions.forEach(t => {
    if (t.type === "expense") {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  const highestCategory = Object.keys(categoryMap).reduce((a, b) =>
    categoryMap[a] > categoryMap[b] ? a : b
  );

  return (
    <div className="bg-white p-5 rounded-xl shadow mt-6">
      <h3 className="text-lg font-semibold mb-4">Insights</h3>

      <div className="space-y-2">
        <p>💡 Highest Spending Category: <b>{highestCategory}</b></p>
        <p>📊 Total Expenses: ₹{expense}</p>
        <p>📈 Income vs Expense: ₹{income - expense}</p>
      
      </div>
          
     
    </div>
  );
}