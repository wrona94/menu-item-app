import ItemButton from "./ItemButton";
import ItemButtonEdit from "./ItemButtonEdit";
import ItemButtonRemove from "./ItemButtonRemove";

export default function ItemButtonsWrapper({
  isEditFieldShown,
  menu,
  onClickHandlerEditButton,
  onClickOpenFormHandler,
}) {
  return (
    <div className="border border-[#D0D5DD] rounded-lg md:ml-auto">
      <ItemButtonRemove menuId={menu.id}>Usuń</ItemButtonRemove>

      <ItemButtonEdit
        menuId={menu.id}
        onClickHandler={onClickHandlerEditButton}
      >
        {isEditFieldShown ? "Zapisz" : "Edytuj"}
      </ItemButtonEdit>

      <ItemButton onClickHandler={onClickOpenFormHandler}>
        Dodaj pozycje menu
      </ItemButton>
    </div>
  );
}
