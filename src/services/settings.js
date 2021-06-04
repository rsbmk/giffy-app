export const API_URL = "https://api.giphy.com/v1";
export const API_KEY = "7XIrr16tQKMClBgk5uWHFjHbowtammMS";
const URL_API_TRENDING = `${API_URL}/gifs/trending?api_key=${API_KEY}&limit=25&rating=g`;

export function useApiUrl(keyword, page, rating, language) {
  const API_URL_SEARCH = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=20&offset=${
    page * 20
  }&rating=${rating}&lang=${language}`;

  const $api_url = keyword ? API_URL_SEARCH : URL_API_TRENDING;
  return { $api_url };
}
