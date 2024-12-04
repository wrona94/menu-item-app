import { useContext } from "react";
import { ItemsContext } from "../Context/ItemsContext";

export default function ItemButtonRemove({ children, menuId }) {
  const { menuItems, setMenuItems } = useContext(ItemsContext);
  function removeItem() {
    setMenuItems((prev) => prev.filter((data) => data.id != menuId));
  }
  return (
    <button className={"px-3.5 py-2.5 font-semibold"} onClick={removeItem}>
      {children}
    </button>
  );
}
