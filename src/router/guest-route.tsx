import useAuth from "@/hooks/shared/use-auth";
import { Navigate } from "react-router-dom";

type GuestRouteProps = {
  children: React.ReactNode;
  redirectTo?: string;
};

export default function GuestRoute({
  children,
  redirectTo = "/",
}: GuestRouteProps) {
  const { isAuth } = useAuth();

  if (isAuth) {
    return <Navigate to={redirectTo} replace />;
  }

  return <>{children}</>;
}
