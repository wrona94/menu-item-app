import ItemButton from "./ItemButton";
import ItemButtonRemove from "./ItemButtonRemove";
import ItemButtonEdit from "./ItemButtonEdit";
import Draggable from "./Draggable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import MenuItemData from "./MenuItemData";
import { useContext } from "react";
import { ItemsContext } from "../Context/ItemsContext";

export default function MenuItem({ menu }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: menu.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  const [isEditFieldShown, setisEditFieldShown] = useState(false);
  const { menuItems, setMenuItems } = useContext(ItemsContext);
  const [inputNameValue, setInputNameValue] = useState(menu.name);
  const [inputUrlValue, setInputUrlValue] = useState(menu.url);
  function onClickHandlerEditButton() {
    setisEditFieldShown((prev) => !prev);
    if (isEditFieldShown) {
      const newState = [...menuItems];
      newState[menu.id].name = inputNameValue;
      newState[menu.id].url = inputUrlValue;
      setMenuItems(newState);
    }
  }
  return (
    <li
      className="border b-color-[#D0D5DD] my-9 rounded-lg"
      style={style}
      {...attributes}
      ref={setNodeRef}
    >
      <div
        key={menu.id}
        className="bg-white py-4 px-6 flex items-center rounded-lg"
      >
        <Draggable menu={menu} listeners={{ ...listeners }} />

        <MenuItemData
          isEditFieldShown={isEditFieldShown}
          menu={menu}
          inputNameValue={inputNameValue}
          setInputNameValue={setInputNameValue}
          inputUrlValue={inputUrlValue}
          setInputUrlValue={setInputUrlValue}
        />
        <div className="border border-[#D0D5DD] rounded-lg ml-auto">
          <ItemButtonRemove menuId={menu.id}>Usuń</ItemButtonRemove>

          <ItemButtonEdit
            menuId={menu.id}
            onClickHandler={onClickHandlerEditButton}
          >
            {isEditFieldShown ? "Zapisz" : "Edytuj"}
          </ItemButtonEdit>

          <ItemButton>Dodaj pozycje menu</ItemButton>
        </div>
      </div>

      <div className="py-5 px-6">
        <ItemButton AdditionalClassName="border border-[#D0D5DD] rounded-lg px-3 py-4">
          Dodaj pozycje menu
        </ItemButton>
      </div>
    </li>
  );
}
