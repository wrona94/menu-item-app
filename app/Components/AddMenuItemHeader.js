import { useContext, useState } from "react";
import { ItemsContext } from "../Context/ItemsContext";
import FormToAddMenuItem from "./formToAddMenuItem";
export default function AddMenuItemHeader() {
  const { menuItems, setMenuItems } = useContext(ItemsContext);
  const [formToAddItemIsOpen, setformToAddItemIsOpen] = useState(false);

  function buttonHandler() {
    setformToAddItemIsOpen((prev) => !prev);
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full bg-[#F9FAFB] border border-color-[#EAECF0] px-6 py-4 rounded-lg">
        <span className="font-bold">Menu jest puste</span>
        <span className="mt-1 mb-6">
          W tym menu nie ma jeszcze żadnych linków
        </span>
        <button
          onClick={buttonHandler}
          className="bg-[#7F56D9] px-3 py-4 rounded-lg text-white font-semibold"
        >
          Dodaj pozycje menu
        </button>
      </div>
      {formToAddItemIsOpen && <FormToAddMenuItem />}
    </div>
  );
}
