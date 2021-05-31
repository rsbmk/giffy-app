export const API_URL = "https://api.giphy.com/v1";
export const API_KEY = "7XIrr16tQKMClBgk5uWHFjHbowtammMS";
const URL_API_TRENDING = `${API_URL}/gifs/trending?api_key=${API_KEY}&limit=25&rating=g`;

export function useApiUrl(keyword, page) {
  const API_URL_SEARCH = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=10&offset=${
    page * 10
  }&rating=g&lang=en`;

  const $api_url = keyword ? API_URL_SEARCH : URL_API_TRENDING;
  return { $api_url };
}
