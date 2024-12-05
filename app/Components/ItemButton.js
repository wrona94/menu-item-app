export default function ItemButton({
  children,
  AdditionalClassName,
  type = "submit",
  onClickHandler = null,
}) {
  return (
    <button
      onClick={onClickHandler}
      className={`px-3.5 py-2.5 font-semibold ${
        AdditionalClassName ? AdditionalClassName : ""
      }`}
      type={type}
    >
      {children}
    </button>
  );
}
