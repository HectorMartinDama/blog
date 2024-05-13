export const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString("es-ES", {
    timeZone: "UTC",
  });
};
