import GuestRoute from "./guest-route";

import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// Layouts
import AuthLayout from "@/app/(auth)/auth-layout";
import MainLayout from "@/app/main-layout";
import About from "@/app/about/page";

// Pages (Lazy Loaded)
const LoginPage = lazy(() => import("@/app/(auth)/login/page"));
const ForgotPasswordPage = lazy(
  () => import("@/app/(auth)/forgot-password/page")
);

const HomePage = lazy(() => import("@/app/(home)/page"));

export default function AppRouter() {
  return (
    <Suspense fallback={<h2 className="text-4xl font-bold">Loading...</h2>}>
      <Routes>
        <Route
          element={
            <GuestRoute>
              <AuthLayout />
            </GuestRoute>
          }
        >
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<h2>register</h2>} />
          <Route path="/forget-password" element={<ForgotPasswordPage />} />
        </Route>

        {/* Main Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        {/* About Page */}
        <Route element={<MainLayout />}>
          <Route path="/about" element={<About IsPage={true} />} />
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
