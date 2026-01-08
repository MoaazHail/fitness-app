import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-svh font-baloo text-dark dark:text-white">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
