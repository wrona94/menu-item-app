export default function ItemButtonAddElement({ children, onClickHandler }) {
  return (
    <button
      onClick={onClickHandler}
      className="px-3.5 py-2.5 font-semibold border border-[#D0D5DD] rounded-lg px-3 py-4"
      type="button"
    >
      {children}
    </button>
  );
}
