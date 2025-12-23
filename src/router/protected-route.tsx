import useAuth from "@/hooks/shared/use-auth";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: React.ReactNode;
  redirectTo?: string;
};

export default function ProtectedRoute({
  children,
  redirectTo = "/login",
}: ProtectedRouteProps) {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to={redirectTo} replace />;
  }

  return <>{children}</>;
}
