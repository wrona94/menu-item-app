"use client";
import { useState } from "react";
import { ItemsContext } from "./Context/ItemsContext";
import AddMenuItemHeader from "./Components/AddMenuItemHeader";

import DndContextWrapper from "./Components/DndContextWrapper";
import { defaultMenuItems } from "./DefaultItemsObject/defaultMenuItems.js";

export default function Home() {
  const [menuItems, setMenuItems] = useState(defaultMenuItems);

  return (
    <ItemsContext.Provider value={{ menuItems, setMenuItems }}>
      <div
        className="
    flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] w-full"
      >
        <AddMenuItemHeader />
        <DndContextWrapper menuItems={menuItems} setMenuItems={setMenuItems} />
      </div>
    </ItemsContext.Provider>
  );
}
