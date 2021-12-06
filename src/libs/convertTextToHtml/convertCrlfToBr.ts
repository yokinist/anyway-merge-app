export const convertCrlfToBr = (text: string): string =>
  text.replace(/(\r\n|\r|\n)/g, "<br />");
