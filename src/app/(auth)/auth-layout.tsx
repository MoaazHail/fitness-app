import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <main
      className="grid min-h-screen grid-cols-1 md:grid-cols-2"
      style={{
        background:
          "linear-gradient(135deg, rgba(20,20,20,0.85), rgba(10,10,10,0.9))",
        backdropFilter: "blur(100)",
        WebkitBackdropFilter: "blur(100)",
      }}
    >
      {/* Sidebar */}
      <aside className="flex-col items-center justify-center hidden text-4xl text-white border-r md:flex border-orange-primary/70">
        {/* Logo  */}
        <img src="/assets/images/logo.svg" className="size-40 object-fit" />

        {/* User */}
        <img src="/assets/images/user.svg" className="object-fit" />
      </aside>

      {/* Main content */}
      <section className="grid p-4 place-items-center place-content-center">
        <Outlet />
      </section>
    </main>
  );
}
