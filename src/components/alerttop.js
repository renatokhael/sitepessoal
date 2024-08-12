import { useTranslations } from "next-intl";

export function AlertTop() {
  const t = useTranslations("Hero");

  return (
    <div className="containenr hidden lg:flex justify-center my-10 ">
      <div class=" p-2 bg-[#003339] rounded-full items-center text-indigo-100 leading-none lg:rounded-full  lg:inline-flex">
        <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
          Freelancer
        </span>
        <span class="font-semibold mr-2 text-left flex-auto">
          {t("span-text")}
        </span>
        <svg
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          class="fill-current opacity-75 h-4 w-4"
        >
          <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"></path>
        </svg>
      </div>
    </div>
  );
}
