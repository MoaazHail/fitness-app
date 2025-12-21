import {
  AuthContext,
  type AuthenticationProviderType,
} from "@/components/providers/authentication-provider/authentication-provider";
import { useContext } from "react";

const useAuth = (): AuthenticationProviderType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthenticationProvider");
  }
  return context;
};

export default useAuth;
