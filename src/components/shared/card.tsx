import type { CardModel } from "@/lib/types/card";
import { ButtonIcon } from "../ui/button";
import Image from "./image";
import { useNavigate } from "react-router-dom";

type CardProps = {
  item: CardModel;
};
export default function Card({ item }: CardProps) {
  // useNavigate
  const navigate = useNavigate();
  // Function
  function handelButton() {
    if (item.href === undefined) {
      if (item.id === "1") alert("modal 1");
    } else {
      navigate(item.href);
    }
  }
  return (
    <div
      className="relative w-[400px] h-96 rounded-lg overflow-hidden"
      key={item.id}
    >
      {item.image && (
        <Image src={item.image} alt={item.title} className=" w-full h-96" />
      )}

      {/* Description */}
      <div className=" absolute bottom-0 flex flex-col justify-center items-start gap-2 p-4 w-full h-1/4 bg-gray/70 dark:bg-black/70   ">
        {/* Title */}
        <h3 className=" font-bold text-xl uppercase"> {item.title} </h3>

        {/* Button */}
        <ButtonIcon variant={"link"} onClick={handelButton}>
          explore
        </ButtonIcon>
      </div>
    </div>
  );
}
