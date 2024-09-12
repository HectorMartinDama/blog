import { Toaster, toast } from "sonner";
import { getLangFromUrl, useTranslations } from "../i18n/utils";

function App({ text, lang }) {
  const t = useTranslations(lang);
  const handleCopy = () => {
    navigator.clipboard
      .writeText(
        `https://blog-hectormartindama.vercel.app/${lang}/blog/` + text
      )
      .then(() => {
        toast.success(t("shareArticle.success.notification"));
      })
      .catch((err) => {
        toast.error(t("shareArticle.error.notification"));
      });
  };
  return (
    <div>
      <Toaster position="bottom-left" />
      <button
        className="px-4 py-2 border dark:border-[#424347] transition-colors duration-200 hover:bg-[#EDEEF2] dark:hover:bg-[#5B5E64] dark:text-white text-sm rounded-[6px] flex items-center justify-center gap-1"
        onClick={() => handleCopy()}
      >
        {t("shareArticle.button")}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-share-2"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8 9h-1a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-8a2 2 0 0 0 -2 -2h-1" />
          <path d="M12 14v-11" />

          <path d="M9 6l3 -3l3 3" />
        </svg>
      </button>
    </div>
  );
}

export default App;
