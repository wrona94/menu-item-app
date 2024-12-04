import Image from "next/image";
import moveIcon from "../../public/images/move.svg";

export default function Draggable({ menu }) {
  return (
    <div className="w-10 h-10 flex justify-center items-center p-2.5">
      <Image priority src={moveIcon} alt="Przeciągnij" />
    </div>
  );
}