import { Toaster } from "@/components/ui/sonner";

export default function ToasterProvider() {
  return (
    <Toaster
      duration={1000}
      position="top-left"
      richColors
      expand
      closeButton
      theme="system"
    />
  );
}
