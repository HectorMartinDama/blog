import { Toaster, toast } from "sonner";
import { getLangFromUrl, useTranslations } from "../i18n/utils";

function App({ text, lang }) {
  const t = useTranslations(lang);
  const handleCopy = () => {
    navigator.clipboard
      .writeText("https://blog-hectormartindama.vercel.app/blog/" + text)
      .then(() => {
        toast.success(t("shareArticle.success.notification"));
      })
      .catch((err) => {
        toast.error(t("shareArticle.error.notification"));
      });
  };
  return (
    <div>
      <Toaster />
      <button
        className="w-[195px] h-[40px] border transition-colors duration-200 hover:border-[#3D4FF5] dark:hover:border-[#B2C6FE] dark:text-white text-sm rounded-full flex items-center justify-center"
        onClick={() => handleCopy()}
      >
        {t("shareArticle.button")}
      </button>
    </div>
  );
}

export default App;
