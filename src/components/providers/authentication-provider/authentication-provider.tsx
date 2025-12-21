import { getItem, removeItem, setItem } from "@/lib/utils/secure-storage";
import { createContext, useState } from "react";

// Context type
export type AuthenticationProviderType = {
  isAuth: boolean;
  token: string | null;
  userData: UserType | null;
  saveUserData: (token: string, userData: UserType) => void;
  logout: () => void;
};

// Props
type ProviderPropsType = {
  children: React.ReactNode;
};

// Context
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<
  AuthenticationProviderType | undefined
>(undefined);

export default function AuthenticationProvider({
  children,
}: ProviderPropsType) {
  const [token, setToken] = useState<string | null>(
    () => getItem("token") as string | null
  );
  const [userData, setUserData] = useState<UserType | null>(
    () => getItem("userData") as UserType | null
  );

  const isAuth = !!token;

  const saveUserData = (newToken: string, newUserData: UserType) => {
    setToken(newToken);
    setUserData(newUserData);

    setItem("token", newToken);
    setItem("userData", newUserData);
  };

  const logout = () => {
    setToken(null);
    setUserData(null);
    removeItem("token");
    removeItem("userData");
  };

  return (
    <AuthContext.Provider
      value={{ isAuth, token, userData, saveUserData, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
