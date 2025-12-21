import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

const SignInPage = lazy(() => import("@/app/(auth)/sign-in/page"));
const HomePage = lazy(() => import("@/app/(home)/page"));

// Layouts
import AuthLayout from "@/app/(auth)/auth-layout";
import MainLayout from "@/app/main-layout";

export default function AppRouter() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <Suspense fallback={<h2 className="text-4xl font-bold">Loading...</h2>}>
      <Routes>
        {/* Auth routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInPage />} />
        </Route>

        {/* Main Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        {/* Not Found */}
        <Route
          path="*"
          element={<h2 className="text-4xl font-bold">Not Found 404</h2>}
        />
      </Routes>
    </Suspense>
  );
}
