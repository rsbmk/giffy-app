import { API_URL, API_KEY } from "../services/settings";

export default function getTreandingTerms() {
  const topics = fetch(`${API_URL}/trending/searches?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then(responseApi);

  return topics;
}

const responseApi = (resApi) => {
  const { data = [] } = resApi;
  return data;
};
