"use client";
import { useId, useContext } from "react";
import MenuItemWrapper from "./MenuItemWrapper";

import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensors,
  useSensor,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { defaultMenuItems } from "../DefaultItemsObject/defaultMenuItems";
import { ItemsContext } from "../Context/ItemsContext";

export default function DndContextWrapper() {
  const { menuItems, setMenuItems } = useContext(ItemsContext);
  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const keyboardSensor = useSensor(KeyboardSensor);

  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);

  const getMenuItemsPos = (id) => {
    let itemPos = -1;

    menuItems.some((menu) => {
      itemPos = menu.items.findIndex((item) => item.id === id);
      return itemPos !== -1;
    });
    return itemPos;
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const originalContainerIndex = menuItems.findIndex((menu) =>
      menu.items.some((item) => item.id === active.id)
    );
    const newContainerIndex = menuItems.findIndex((menu) =>
      menu.items.some((item) => item.id === over.id)
    );

    const originalPos = getMenuItemsPos(active.id);
    const newPos = getMenuItemsPos(over.id);

    setMenuItems((prevItems) => {
      if (originalContainerIndex === newContainerIndex) {
        const updatedItems = arrayMove(
          prevItems[originalContainerIndex].items,
          originalPos,
          newPos
        );

        return prevItems.map((menu, idx) => {
          if (idx === originalContainerIndex) {
            return {
              ...menu,
              items: updatedItems,
            };
          }
          return menu;
        });
      } else {
        const activeItem = prevItems[originalContainerIndex].items[originalPos];
        const updatedOriginalItems = prevItems[
          originalContainerIndex
        ].items.filter((item) => item.id !== activeItem.id);

        const updatedNewItems = [
          ...prevItems[newContainerIndex].items.slice(0, newPos),
          activeItem,
          ...prevItems[newContainerIndex].items.slice(newPos),
        ];

        return prevItems.map((menu, idx) => {
          if (idx === originalContainerIndex) {
            return {
              ...menu,
              items: updatedOriginalItems,
            };
          }
          if (idx === newContainerIndex) {
            return {
              ...menu,
              items: updatedNewItems,
            };
          }
          return menu;
        });
      }
    });
  };

  const id = useId();
  console.log("menuitems w dnt context");
  console.log(menuItems);

  return (
    <DndContext
      onDragEnd={handleDragEnd}
      collisionDetection={closestCenter}
      sensors={sensors}
      id={id}
    >
      <ul className="w-full">
        {menuItems.map((menu) => (
          <MenuItemWrapper menu={menu} key={menu.id} />
        ))}
      </ul>
    </DndContext>
  );
}
