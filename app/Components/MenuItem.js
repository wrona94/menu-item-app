import { useState, useContext, useMemo } from "react";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import Draggable from "./Draggable";
import ItemButtonsWrapper from "./ItemButtonsWrapper";
import MenuItemData from "./MenuItemData";

import { ItemsContext } from "../Context/ItemsContext";

export default function MenuItem({ item }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  const [isEditFieldShown, setisEditFieldShown] = useState(false);
  const { menuItems, setMenuItems } = useContext(ItemsContext);
  const [inputNameValue, setInputNameValue] = useState(item.name);
  const [inputUrlValue, setInputUrlValue] = useState(item.url);
  function onClickHandlerEditButton() {
    setisEditFieldShown((prev) => !prev);
    if (isEditFieldShown) {
      const newState = [...menuItems];
      newState[item.id].name = inputNameValue;
      newState[item.id].url = inputUrlValue;
      setMenuItems(newState);
    }
  }
  return (
    <div
      key={item.id}
      className="bg-white py-4 px-6 flex items-center rounded-lg"
      style={style}
      {...attributes}
      ref={setNodeRef}
    >
      <Draggable menu={item} listeners={{ ...listeners }} />

      <MenuItemData
        isEditFieldShown={isEditFieldShown}
        menu={item}
        inputNameValue={inputNameValue}
        setInputNameValue={setInputNameValue}
        inputUrlValue={inputUrlValue}
        setInputUrlValue={setInputUrlValue}
      />
      <ItemButtonsWrapper
        isEditFieldShown={isEditFieldShown}
        menu={item}
        onClickHandlerEditButton={onClickHandlerEditButton}
      />
    </div>
  );
}
