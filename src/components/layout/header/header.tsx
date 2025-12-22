import logo from "../../../../public/assets/images/logo.png";
import { Link } from "react-router-dom";
import { User } from "lucide-react";
import Navbar from "./components/navbar";

export default function Header() {
  return (
    <header className=" sticky flex justify-around items-center bg-transparent ">
      {/* Logo */}
      <div className=" flex justify-center items-center h-14 w-20 order-1">
        <img src={logo} alt="logo" className=" object-cover " />
      </div>

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
