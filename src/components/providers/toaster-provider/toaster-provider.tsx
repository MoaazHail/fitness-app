import { Toaster } from "@/components/ui/sonner";

export default function ToasterProvider() {
  return (
    <Toaster
      duration={1000}
      position="top-right"
      richColors
      expand
      theme="system"
    />
  );
}
