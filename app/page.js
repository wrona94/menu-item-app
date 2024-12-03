"use client";
import MenuItem from "./Components/MenuItem";
import ItemButton from "./Components/ItemButton";
import { useState } from "react";
import { ItemsContext } from "./Context/ItemsContext";
import AddMenuItemHeader from "./Components/AddMenuItemHeader";

export default function Home() {
  const [menuItems, setMenuItems] = useState([
    { name: "Promocje", url: "https://rc32141.redcart.pl/promocje", id: "1" },
    {
      name: "Bestsellery",
      url: "https://rc32141.redcart.pl/Bestsellery",
      id: "2",
    },
    { name: "Nowości", url: "https://rc32141.redcart.pl/Nowości", id: "3" },
  ]);
  return (
    <ItemsContext.Provider value={{ menuItems, setMenuItems }}>
      <div
        className="
    flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] w-[1208px]"
      >
        <AddMenuItemHeader />
        <ul className="w-full">
          {menuItems.map((menu) => (
            <div
              key={menu.id}
              className="border b-color-[#D0D5DD] my-9 rounded-lg"
            >
              <MenuItem menu={menu} />
              <div className="py-5 px-6">
                <ItemButton AdditionalClassName="border border-[#D0D5DD] rounded-lg px-3 py-4">
                  Dodaj pozycje menu
                </ItemButton>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </ItemsContext.Provider>
  );
}
