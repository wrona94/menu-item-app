export default function ItemButton({ children, AdditionalClassName }) {
  return (
    <button
      className={`px-3.5 py-2.5 font-semibold ${
        AdditionalClassName ? AdditionalClassName : ""
      }`}
    >
      {children}
    </button>
  );
}
