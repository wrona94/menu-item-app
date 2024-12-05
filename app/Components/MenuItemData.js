export default function MenuItemData({
  isEditFieldShown,
  menu,
  inputNameValue,
  setInputNameValue,
  inputUrlValue,
  setInputUrlValue,
}) {
  return (
    <div className="flex flex-col gap-1.5 grow">
      {isEditFieldShown ? (
        <>
          <input
            className="border border-black px-2 w-6/12"
            value={inputNameValue}
            onChange={(e) => setInputNameValue(e.target.value)}
          ></input>
          <input
            className="border border-black px-2 w-6/12"
            value={inputUrlValue}
            onChange={(e) => setInputUrlValue(e.target.value)}
          ></input>
        </>
      ) : (
        <>
          <span className="font-bold border border-transparent">
            {menu.name}
          </span>
          <a
            className="text-[#475467] border border-transparent"
            href={menu.url}
          >
            {menu.url}
          </a>
        </>
      )}
    </div>
  );
}
