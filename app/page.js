"use client";
import MenuItem from "./Components/MenuItem";
import ItemButton from "./Components/ItemButton";
import { useId, useState } from "react";
import { ItemsContext } from "./Context/ItemsContext";
import AddMenuItemHeader from "./Components/AddMenuItemHeader";
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensors,
  useSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

export default function Home() {
  const [menuItems, setMenuItems] = useState([
    { name: "Promocje", url: "https://rc32141.redcart.pl/promocje", id: "0" },
    {
      name: "Bestsellery",
      url: "https://rc32141.redcart.pl/Bestsellery",
      id: "1",
    },
    { name: "Nowości", url: "https://rc32141.redcart.pl/Nowości", id: "2" },
  ]);
  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const keyboardSensor = useSensor(KeyboardSensor);

  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);
  const getMenuItemsPos = (id) => menuItems.findIndex((item) => item.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setMenuItems((items) => {
      const originalPos = getMenuItemsPos(active.id);
      const newPos = getMenuItemsPos(over.id);

      return arrayMove(items, originalPos, newPos);
    });
  };
  const id = useId();
  return (
    <ItemsContext.Provider value={{ menuItems, setMenuItems }}>
      <div
        className="
    flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] w-[1208px]"
      >
        <AddMenuItemHeader />
        <DndContext
          onDragEnd={handleDragEnd}
          collisionDetection={closestCenter}
          sensors={sensors}
          id={id}
        >
          <ul className="w-full">
            <SortableContext
              items={menuItems}
              strategy={verticalListSortingStrategy}
            >
              {menuItems.map((menu) => (
                <MenuItem menu={menu} key={menu.id} />
              ))}
            </SortableContext>
          </ul>
        </DndContext>
      </div>
    </ItemsContext.Provider>
  );
}
