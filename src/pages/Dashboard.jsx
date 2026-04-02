import { useState, useEffect } from "react";
import Charts from "../components/dashboard/Charts";
import SummaryCards from "../components/dashboard/SummaryCards";
import Layout from "../components/layout/Layout";
import TransactionTable from "../components/transactions/TransactionTable";
import Insights from "../components/dashboard/Insights";
import { transactions as mockData } from "../data/mockData";

export default function Dashboard() {
  const [role, setRole] = useState("viewer");
 
  const [transactions, setTransactions] = useState(() => {
  const saved = localStorage.getItem("transactions");

  if (saved) {
    const parsed = JSON.parse(saved);
    return parsed.length > 0 ? parsed : mockData;
  }

  return mockData;
});


  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <Layout>
      <h1 className="text-2xl font-bold">Welcome 👋</h1>

      <div className="mb-4">
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border px-3 py-1 rounded"
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <SummaryCards transactions={transactions}/>
      <Charts />

      <TransactionTable
        role={role}
        transactions={transactions}
        setTransactions={setTransactions}
       
      />

      <Insights />
    </Layout>
  );
}