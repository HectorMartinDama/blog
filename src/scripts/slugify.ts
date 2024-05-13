export const slugify = (text: string): string => {
  return text
    .toLowerCase() // Convertir todo a minúsculas
    .replace(/[^\w\s-]/g, "") // Eliminar caracteres especiales excepto guiones y espacios
    .replace(/\s+/g, "-") // Reemplazar espacios en blanco con guiones
    .replace(/^-+/g, "") // Eliminar guiones al principio
    .replace(/-+$/g, ""); // Eliminar guiones al final
};
