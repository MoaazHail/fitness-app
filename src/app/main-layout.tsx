import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-svh">
      <h1 className="p-4 mb-2 text-3xl font-bold text-center bg-slate-200 text-slate-900">
        Nav bar
      </h1>
      <main className="flex-grow">
        <Outlet />
      </main>
      <h3 className="p-4 mt-2 text-3xl font-bold text-center bg-slate-200 text-slate-900">
        Footer
      </h3>
    </div>
  );
}
