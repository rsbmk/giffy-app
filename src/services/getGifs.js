import { useApiUrl } from "../services/settings";

export default function GetGifs({keyword, page, rating, language}) {
  const { $api_url } = useApiUrl(keyword, page, rating, language);

  const gifs = fetch($api_url)
    .then((response) => response.json())
    .then(responseApi);

  return gifs;
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
