import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <main
      className="grid min-h-screen grid-cols-1 md:grid-cols-2"
      style={{
        background:
          "linear-gradient(135deg, rgba(20,20,20,0.85), rgba(10,10,10,0.9))",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
      }}
    >
      {/* Sidebar */}
      <aside className="items-center justify-center hidden text-4xl text-white border-r md:flex border-orange-primary">
        SideBar
      </aside>

      {/* Main content */}
      <section className="grid p-4 place-items-center place-content-center">
        <Outlet />
      </section>
    </main>
  );
}
