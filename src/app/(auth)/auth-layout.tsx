import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="flex items-center justify-center p-4 min-h-svh">
      <Outlet />
    </div>
  );
}
