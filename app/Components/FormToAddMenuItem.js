"use client";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import ItemButton from "./ItemButton";
import { ItemsContext } from "../Context/ItemsContext";

export default function FormToAddMenuItem({
  buttonHandler,
  mode = 1,
  menuItemId,
}) {
  const { menuItems, setMenuItems } = useContext(ItemsContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setMenuItems((prev) => {
      if (mode == "1") {
        const newObject = {
          id: prev.length,
          items: [{ name: data.name, url: data.link, id: prev.length }],
        };
        return [...prev, newObject];
      }
      if (mode == "2") {
        const newState = [...prev];
        const newObject = {
          name: data.name,
          url: data.link,
          id: newState[menuItemId].items.length,
        };
        newState[menuItemId] = {
          ...newState[menuItemId],
          items: [...newState[menuItemId].items, newObject],
        };
        return newState;
      }

      return [...prev];
    });
    reset();
    buttonHandler();
  };

  function onClickHandlerCancelButton() {
    buttonHandler();
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white border border-color-[#EAECF0] w-full rounded-lg mt-8 px-5 py-4"
    >
      <div className="flex flex-col gap-1.5 mb-2">
        <label className="font-medium">Nazwa</label>
        <input
          {...register("name", { required: true })}
          className="border border-color-[#EAECF0] rounded-lg h-10 py-2 px-3"
          type="text"
          placeholder="np. Promocje"
        />
        {errors.name?.type === "required" && (
          <p role="alert" className="error">
            Wpisz nazwe
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="font-medium flex flex-col">Link</label>
        <input
          {...register("link", { required: true })}
          className="border border-color-[#EAECF0] rounded-lg h-10 py-2 px-3"
          type="text"
          placeholder="Wklej lub wyszukaj"
        />
        {errors.link?.type === "required" && (
          <p className="error" role="alert">
            Wpisz adres url
          </p>
        )}
      </div>
      <div className="mt-5">
        <ItemButton
          type="button"
          onClickHandler={onClickHandlerCancelButton}
          AdditionalClassName="border border-color-[#EAECF0] rounded-lg mr-2"
        >
          Anuluj
        </ItemButton>
        <ItemButton AdditionalClassName="border border-color-[#EAECF0] rounded-lg">
          Dodaj
        </ItemButton>
      </div>
    </form>
  );
}
