import ItemButton from "./ItemButton";
import Draggable from "./Draggable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
export default function MenuItem({ menu }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: menu.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div
      className="border b-color-[#D0D5DD] my-9 rounded-lg"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <li
        key={menu.id}
        className="bg-white py-4 px-6 flex items-center rounded-lg"
      >
        <Draggable menu={menu} />

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

      <div className="py-5 px-6">
        <ItemButton AdditionalClassName="border border-[#D0D5DD] rounded-lg px-3 py-4">
          Dodaj pozycje menu
        </ItemButton>
      </div>
    </div>
  );
}
