const URL_RGX =
  /((ftp|https?):\/\/([\w-]+(\:[\w-]+)?@)?(.+?\.)?([\w-]+\.[\w-]{2,4}(?:\:\d+)?|.+?)\/?[^\s{}<>()]+\b)/gi;

export const convertUrlToLink = (text?: string) => {
  if (!text) return "";
  return text.replace(URL_RGX, (url) => {
    const href = url.match(/^https?:\/\//i) ? url : "http://" + url;
    return `<a href="${href}" target="_blank" rel="noopener noreferrer">${href}</a>`;
  });
};
