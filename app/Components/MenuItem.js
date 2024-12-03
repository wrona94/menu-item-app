import Image from "next/image";
import moveIcon from "../../public/images/move.svg";
import ItemButton from "./ItemButton";

export default function MenuItem({ menu }) {
  return (
    <li
      key={menu.id}
      className="bg-white py-4 px-6 flex items-center rounded-lg"
    >
      <div className="w-10 h-10 flex justify-center items-center p-2.5">
        <Image priority src={moveIcon} alt="Przeciągnij" />
      </div>

      <div className="flex flex-col gap-1.5">
        <span className="font-bold">{menu.name}</span>
        <a className="text-[#475467]" href={menu.url}>
          {menu.url}
        </a>
      </div>
      <div className="border border-[#D0D5DD] rounded-lg ml-auto">
        <ItemButton>Usuń</ItemButton>
        <ItemButton AdditionalClassName="border-x border-[#D0D5DD]">
          Edytuj
        </ItemButton>
        <ItemButton>Dodaj pozycje menu</ItemButton>
      </div>
    </li>
  );
}
