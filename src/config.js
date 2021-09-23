export const API_KEY = "692f25c2363a44904bf2c80ae37590a6";
export const SECRET = "1b57077e5048a3fc";
export const GET_RECENT_API = (page) => {
  return `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${API_KEY}&per_page=10&page=${
    page + 1
  }&format=json&nojsoncallback=1`;
};
export const SEARCH_API = (text, page) => {
  return `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${text}&text=${text}&per_page=10&page=${
    page + 1
  }&format=json&nojsoncallback=1`;
};
