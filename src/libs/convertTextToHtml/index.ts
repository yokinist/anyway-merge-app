import { convertCrlfToBr } from "./convertCrlfToBr";
import { convertUrlToLink } from "./convertUrltToLink";

export const convertTextToHtml = (text?: string) => {
  if (!text) return "";
  return convertUrlToLink(convertCrlfToBr(text));
};
