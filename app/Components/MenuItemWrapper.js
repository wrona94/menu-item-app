import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import ItemButton from "./ItemButton";

import MenuItem from "./MenuItem";

export default function MenuItemWrapper({ menu }) {
  return (
    <SortableContext items={menu.items} strategy={verticalListSortingStrategy}>
      {console.log("menu itemsssssssssss")}
      {console.log(menu.items)}
      {menu.items.length > 0 && (
        <li className="border b-color-[#D0D5DD] my-9 rounded-lg">
          {menu.items.map((menuItem) => (
            <MenuItem key={menuItem.id} item={menuItem} />
          ))}

          <div className="py-5 px-6">
            <ItemButton AdditionalClassName="border border-[#D0D5DD] rounded-lg px-3 py-4">
              Dodaj pozycje menu
            </ItemButton>
          </div>
        </li>
      )}
    </SortableContext>
  );
}
