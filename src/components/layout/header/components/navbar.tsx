import { NAV_LINKS } from "@/lib/constants/header.constant";
import { cn } from "@/lib/utils/tailwind-merge";
import { TextAlignEnd } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  // State
  const [toggle, setToggle] = useState<boolean>(false);

  // Functions
  function handelToggle() {
    setToggle(!toggle);
  }

  if (toggle) {
  }

  return (
    <div className=" order-3 md:order-2 ">
      <div
        className=" md:hidden flex justify-center items-center size-10 md:size-12 bg-orange-primary text-white rounded-full "
        onClick={handelToggle}
      >
        <TextAlignEnd />
      </div>
      <nav
        className={cn(
          "md:flex justify-center items-center gap-6 font-bold text-xl",
          toggle
            ? "absolute top-0 left-0 bg-dark w-full flex flex-col justify-center pl-4 py-4 items-start text-white md:hidden"
            : "hidden",
          toggle && "after:"
        )}
      >
        <div
          className="md:hidden absolute bottom-0 left-0 translate-y-full  w-full h-screen  bg-black/50"
          onClick={handelToggle}
        ></div>
        {NAV_LINKS.map((item) => (
          <NavLink
            to={item.link}
            key={item.label}
            className="first-letter:uppercase"
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
