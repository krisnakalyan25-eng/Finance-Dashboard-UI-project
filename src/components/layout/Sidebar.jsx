export default function Sidebar() {
  return (
  //  <div className="w-64 bg-gray-900 text-white p-5">
  <div className="w-64 bg-gray-900 text-white p-5 flex flex-col">
      <h1 className="text-2xl font-bold mb-8">Finance</h1>



      <ul className="space-y-4">
        {/* <li className="hover:text-blue-400 cursor-pointer">Dashboard</li> */}
        <li className="text-blue-400 font-semibold">Dashboard</li>
        <li className="hover:text-blue-400 cursor-pointer">Transactions</li>
        <li className="hover:text-blue-400 cursor-pointer">Insights</li>
      </ul>
    </div>
  );
}
