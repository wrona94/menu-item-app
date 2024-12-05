export default function ItemButtonEdit({ children, menuId, onClickHandler }) {
  return (
    <button
      className={"px-3.5 py-2.5 font-semibold border-x border-[#D0D5DD]"}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}
