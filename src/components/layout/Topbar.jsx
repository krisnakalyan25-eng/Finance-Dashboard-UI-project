export default function Topbar() {
  return (
    <div className="h-16 bg-white shadow flex items-center justify-between px-6">
      <h2 className="text-xl font-semibold">Dashboard</h2>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="border px-3 py-1 rounded"
        />
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
}