import { CharactersResponse, CountResponse } from "shared";
import { HTTP_SERVER_URL } from "@/app/characters/constants";

const api = {
  fetchCharacters: async (page: number): Promise<CharactersResponse> =>
    fetch(`${HTTP_SERVER_URL}/characters?page=${page}`, {
      next: { revalidate: 3 },
    }).then((_res) => _res.json()),
  fetchCharacterCount: async (): Promise<CountResponse> =>
    fetch(`${HTTP_SERVER_URL}/count`, { next: { revalidate: 3 } }).then(
      (_res) => _res.json()
    ),
};

export default api;
