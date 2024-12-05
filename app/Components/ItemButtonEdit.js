import { useContext } from "react";
import { ItemsContext } from "../Context/ItemsContext";

export default function ItemButtonEdit({ children, menuId, onClickHandler }) {
  const { menuItems, setMenuItems } = useContext(ItemsContext);
  function editItem() {
    setMenuItems((prev) => {
      console.log("prev");
      console.log(prev);
    });
  }
  return (
    <button
      className={"px-3.5 py-2.5 font-semibold border-x border-[#D0D5DD]"}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}
