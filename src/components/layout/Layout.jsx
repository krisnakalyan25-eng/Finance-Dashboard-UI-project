import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">
        <Topbar />

        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}