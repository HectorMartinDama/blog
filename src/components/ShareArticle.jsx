import { Toaster, toast } from "sonner";

function App({ text }) {
  const handleCopy = () => {
    navigator.clipboard
      .writeText("https://blog-hectormartindama.vercel.app/blog/" + text)
      .then(() => {
        toast.success("Enlace copiado correctamente");
      })
      .catch((err) => {
        toast.error("No se ha podido copiar el enlace");
      });
  };
  return (
    <div>
      <Toaster />
      <button
        class="w-[195px] h-[40px] border transition-colors duration-200 hover:border-[#3D4FF5] dark:hover:border-[#B2C6FE] dark:text-white text-sm rounded-full flex items-center justify-center"
        onClick={() => handleCopy()}
      >
        Compartir articulo
      </button>
    </div>
  );
}

export default App;
