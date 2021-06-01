import { API_URL, API_KEY } from "../services/settings";

const fromApiResponse = (responseApi) =>{
  const { data } = responseApi;
  const { id, images, title } = data;
  const { url } = images.downsized_medium;
  
  const gif = {id, title, url};
  return gif
};

export default function getSigleGif({id}) {
  return fetch(`${API_URL}/gifs/${id}?api_key=${API_KEY}`)
    .then(res => res.json())
    .then(fromApiResponse);
} 