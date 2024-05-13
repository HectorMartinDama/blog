export const extractRelativePathFromSrc = (fullPath: string): string => {
  const srcIndex = fullPath.indexOf("/src");

  if (srcIndex !== -1) {
    return fullPath.slice(srcIndex);
  } else {
    return ""; // Manejar el caso cuando '/src' no se encuentra
  }
};
