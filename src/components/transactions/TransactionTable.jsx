

import { useState } from "react";


export default function TransactionTable({ role, transactions, setTransactions}) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const [form, setForm] = useState({
    date: "",
    amount: "",
    category: "",
    type: "expense",
  });

 
  console.log(form)
  const [editId, setEditId] = useState(null);

  const handleSubmit = () => {
  if (!form.amount || !form.category || !form.date) return;

  if (editId) {
    // EDIT
    const updated = transactions.map((t) =>
      t.id === editId ? { ...t, ...form, amount: Number(form.amount) } : t
    );
    setTransactions(updated);
    setEditId(null);
  } else {
    // ADD
    const newTransaction = {
      id: Date.now(),
      ...form,
      amount: Number(form.amount),
    };
    setTransactions([...transactions, newTransaction]);
  }

  setForm({
    date: "",
    amount: "",
    category: "",
    type: "expense",
  });
};

const handleEdit = (t) => {
  setForm(t);
  setEditId(t.id);
};

const filteredData = transactions.filter((t) => {
  const matchesSearch = t.category
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesFilter =
    filter === "all" ? true : t.type === filter;

  return matchesSearch && matchesFilter;
});
  
  return (
    <div className="bg-white p-4 rounded-xl shadow mt-6">

      {/* Search & Filter */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search category..."
          className="border px-3 py-1 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border px-3 py-1 rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      {/* Admin Form */}
      {role === "admin" && (
        <div className="bg-gray-100 p-4 rounded mb-4 grid grid-cols-2 md:grid-cols-4 gap-2">
          <input
            type="date"
            className="border p-1 rounded"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />

          <input
            type="number"
            placeholder="Amount"
            className="border p-1 rounded"
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
          />

          <input
            type="text"
            placeholder="Category"
            className="border p-1 rounded"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          />

          <select
            className="border p-1 rounded"
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <button
            onClick={handleSubmit}
            className="col-span-2 md:col-span-1 bg-blue-500 text-white rounded p-1"
          >
            {editId ? "Update" : "Add"}
          </button>
        </div>
      )}

      {/* Table */}
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th>Date</th>
            <th>Category</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.map((t) => (
            <tr key={t.id} className="border-b">
              <td>{t.date}</td>
              <td>{t.category}</td>
              <td>{t.type}</td>
              <td className={t.type === "income" ? "text-green-500" : "text-red-500"}>
                ₹{t.amount}
              </td>

              {role === "admin" && (
              <td>
    <button
      onClick={() => handleEdit(t)}
      className="text-blue-500"
    >
      Edit
    </button>
  </td>
)}
            </tr>
          ))}
        </tbody>
      </table>

      {filteredData.length === 0 && (
        <p className="text-center mt-4 text-gray-500">
          No transactions found
        </p>
      )}
    </div>
  );
}



// components/transactions/TransactionTable.jsx

// import { useState } from "react";



// export default function TransactionTable({role,transactions,setTransactions}) {
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("all");
//   const [from,setFrom] = useState({
//     date: "",
//   amount: "",
//   category: "",
//   type: "expense",
//   })

//   const filteredData = data.filter((t) => {
//     const matchesSearch = t.category
//       .toLowerCase()
//       .includes(search.toLowerCase());

//     const matchesFilter =
//       filter === "all" ? true : t.type === filter;

//     return matchesSearch && matchesFilter;
//   });

//   return (
//     // <div className="bg-white p-4 rounded-xl shadow mt-6">
//       <div className="bg-white p-4 rounded-xl shadow mt-6">
      
//       {/* Controls */}
//       {/* <div className="flex justify-between mb-4"> */}
//       <div className="overflow-x-auto">
//         <input
//           type="text"
//           placeholder="Search category..."
//           className="border px-3 py-1 rounded"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         <select
//           className="border px-3 py-1 rounded"
//           value={filter}
//           onChange={(e) => setFilter(e.target.value)}
//         >
//           <option value="all">All</option>
//           <option value="income">Income</option>
//           <option value="expense">Expense</option>
//         </select>
//       </div>
//       {/* {role === "admin" && (
//   <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition">
//     + Add Transaction
//   </button>
// )} */}


// {role === "admin" && (
//   <>
//   <div className="bg-gray-100 p-4 rounded mb-4 grid grid-cols-2 md:grid-cols-4 gap-2">

//     <input
//       type="date"
//       className="border p-1 rounded"
//       value={form.date}
//       onChange={(e) => setForm({ ...form, date: e.target.value })}
//     />

//     <input
//       type="number"
//       placeholder="Amount"
//       className="border p-1 rounded"
//       value={form.amount}
//       onChange={(e) => setForm({ ...form, amount: e.target.value })}
//     />

//     <input
//       type="text"
//       placeholder="Category"
//       className="border p-1 rounded"
//       value={form.category}
//       onChange={(e) => setForm({ ...form, category: e.target.value })}
//     />

//     <select
//       className="border p-1 rounded"
//       value={form.type}
//       onChange={(e) => setForm({ ...form, type: e.target.value })}
//     >
//       <option value="income">Income</option>
//       <option value="expense">Expense</option>
//     </select>

//     <button
//       onClick={handleSubmit}
//       className="col-span-2 md:col-span-1 bg-blue-500 text-white rounded p-1"
//     >
//       {editId ? "Update" : "Add"}
//     </button>

//    </div>
//     </>
    
     
//       <table className="w-full text-left">
//         <thead>
//           <tr className="border-b">
//             <th>Date</th>
//             <th>Category</th>
//             <th>Type</th>
//             <th>Amount</th>

//           </tr>
//         </thead>

//         <tbody>
//           {filteredData.map((t) => (
//             <tr key={t.id} className="border-b">
//               <td>{t.date}</td>
//               <td>{t.category}</td>
//               <td>{t.type}</td>
//               {/* <td>₹{t.amount}</td> */}
//               <td className={t.type === "income" ? "text-green-500" : "text-red-500"}>
//                    ₹{t.amount}
//              </td>
//              {/* {role === "admin" && <td>Edit</td>} */}
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Empty State */}
//       {filteredData.length === 0 && (
//         <p className="text-center mt-4 text-gray-500">
//           No transactions found
//         </p>
//       )}
     
//     </div>
//   );
// }


// change

// const handleSubmit = () => {
//     if (!form.date || !form.amount || !form.category) return;

//     const newTransaction = {
//       id: Date.now(),
//       ...form,
//       amount: Number(form.amount),
//     };

//     setTransactions([...transactions, newTransaction]);

//     setForm({
//       date: "",
//       amount: "",
//       category: "",
//       type: "expense",
//     });
//   };

//   const filteredData = transactions.filter((t) => {
//     const matchesSearch = t.category
//       .toLowerCase()
//       .includes(search.toLowerCase());

//     const matchesFilter =
//       filter === "all" ? true : t.type === filter;

//     return matchesSearch && matchesFilter;
//   });
