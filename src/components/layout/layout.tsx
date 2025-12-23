import { Outlet } from "react-router-dom";
import Header from "./header/header";

export default function Layout() {
  return (
    <section className=" font-baloo">
      {/* Header */}
      <Header />

      {/* Pages */}
      <Outlet />

      {/* Footer */}
    </section>
  );
}
