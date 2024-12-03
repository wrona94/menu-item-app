"use client";
import ItemButton from "./ItemButton";
import { useForm } from "react-hook-form";

import { useContext, useState } from "react";
import { ItemsContext } from "../Context/ItemsContext";

export default function FormToAddMenuItem() {
  const { menuItems, setMenuItems } = useContext(ItemsContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setMenuItems((prev) => {
      return [...prev, { name: data.name, url: data.link, id: "8" }];
    });
  };
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
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="font-medium flex flex-col">Link</label>
        <input
          {...register("link", { required: true })}
          className="border border-color-[#EAECF0] rounded-lg h-10 py-2 px-3"
          type="text"
          placeholder="Wklej lub wyszukaj"
        />
      </div>
      <div className="mt-5">
        <ItemButton AdditionalClassName="border border-color-[#EAECF0] rounded-lg mr-2">
          Anuluj
        </ItemButton>
        <ItemButton AdditionalClassName="border border-color-[#EAECF0] rounded-lg">
          Dodaj
        </ItemButton>
      </div>
    </form>
  );
}
