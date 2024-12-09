import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import ItemButton from "./ItemButton";

import MenuItem from "./MenuItem";
import FormToAddMenuItem from "./FormToAddMenuItem";
import ItemButtonAddElement from "./ItemButtonAddElement";
import { useState } from "react";

export default function MenuItemWrapper({ menu }) {
  const [isFormShown, setIsFormShown] = useState(false);
  function formShowClickHandler() {
    setIsFormShown((prev) => !prev);
  }
  function buttonHandler() {
    setIsFormShown((prev) => !prev);
  }
  return (
    <SortableContext items={menu.items} strategy={verticalListSortingStrategy}>
      {menu.items.length > 0 && (
        <li className="border b-color-[#D0D5DD] my-9 rounded-lg">
          {menu.items.map((menuItem) => (
            <MenuItem
              key={menuItem.id}
              item={menuItem}
              openFormHandler={formShowClickHandler}
            />
          ))}

          <div className="py-5 px-6">
            <ItemButtonAddElement onClickHandler={formShowClickHandler}>
              Dodaj pozycje menu
            </ItemButtonAddElement>
          </div>
          {isFormShown && (
            <FormToAddMenuItem
              mode={"2"}
              menuItemId={menu.id}
              buttonHandler={buttonHandler}
            />
          )}
        </li>
      )}
    </SortableContext>
  );
}
