import { API_URL } from "../services/settings";
import { API_KEY } from "../services/settings";

export default function getGifs(keyword, url) {
  if (keyword && !url) {
    const gifs = fetch(
      `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`
    )
      .then((response) => response.json())
      .then((data) => responseApi(data));
    return gifs;
  } else if (!keyword && url) {
    const gifs = fetch(url)
      .then((response) => response.json())
      .then((data) => responseApi(data));
    return gifs;
  }
}

const responseApi = (resApi) => {
  const { data = [] } = resApi;

  const gifs = data.map((gif) => {
    const { title, id, images } = gif;
    const { url } = images.downsized_medium;
    return { title, id, url };
  });

  return gifs;
};
