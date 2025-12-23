import AuthenticationProvider from "@/components/providers/authentication-provider/authentication-provider";
import ReactQueryProvider from "./query-client-provider/query-client-provider";
import ToasterProvider from "./toaster-provider/toaster-provider";

type ProviderPropsType = {
  children: React.ReactNode;
};

export default function AppProvider({ children }: ProviderPropsType) {
  return (
    <>
      {/* Toaster  */}
      <ToasterProvider />

      {/* Content */}
      <ReactQueryProvider>
        <AuthenticationProvider>{children}</AuthenticationProvider>
      </ReactQueryProvider>
    </>
  );
}
