import { useState } from "react";
import FormToAddMenuItem from "./FormToAddMenuItem";
export default function AddMenuItemHeader() {
  const [formToAddItemIsOpen, setFormToAddItemIsOpen] = useState(false);

  function buttonHandler() {
    setFormToAddItemIsOpen((prev) => !prev);
  }

  return (
    <div className="w-full">
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
      {formToAddItemIsOpen && (
        <FormToAddMenuItem buttonHandler={buttonHandler} mode={"1"} />
      )}
    </div>
  );
}
