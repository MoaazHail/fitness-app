import { Link } from "react-router-dom";
import { User } from "lucide-react";
import Navbar from "./components/navbar";
import { Image } from "@/components/shared";

export default function Header() {
  return (
    <header className=" fixed w-full flex justify-around items-center bg-transparent z-50 mt-5 md:mt-10 dark:text-white ">
      {/* Logo */}
      <Image
        src="/assets/images/logo.png"
        alt="Logo"
        className=" h-14 w-20 order-1"
      />

      {/* Navbar */}
      <Navbar />

      {/* User */}
      <Link
        to={"/login"}
        className=" flex justify-center items-center size-10 md:size-12 bg-orange-primary text-white rounded-full order-2 md:order-3  "
      >
        <User />
      </Link>
    </header>
  );
}
