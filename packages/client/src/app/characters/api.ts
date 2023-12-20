import { Character, CharactersResponse, CountResponse } from "shared";
import { MAX_DOCUMENTS_PER_PAGE } from "@/app/characters/constants";

const humans: Character[] = [
  {
    id: "1",
    name: "Rick Sanchez",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  },
  {
    id: "2",
    name: "Morty Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  },
  {
    id: "3",
    name: "Summer Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
  },
  {
    id: "4",
    name: "Beth Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
  },
  {
    id: "5",
    name: "Jerry Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
  },
  {
    id: "7",
    name: "Abradolf Lincler",
    image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
  },
  {
    id: "8",
    name: "Adjudicator Rick",
    image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
  },
  {
    id: "9",
    name: "Agency Director",
    image: "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
  },
  {
    id: "10",
    name: "Alan Rails",
    image: "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
  },
  {
    id: "11",
    name: "Albert Einstein",
    image: "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
  },
  {
    id: "12",
    name: "Alexander",
    image: "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
  },
  {
    id: "17",
    name: "Annie",
    image: "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
  },
  {
    id: "18",
    name: "Antenna Morty",
    image: "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
  },
  {
    id: "19",
    name: "Antenna Rick",
    image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
  },
  {
    id: "20",
    name: "Ants in my Eyes Johnson",
    image: "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
  },
  {
    id: "21",
    name: "Aqua Morty",
    image: "https://rickandmortyapi.com/api/character/avatar/21.jpeg",
  },
  {
    id: "22",
    name: "Aqua Rick",
    image: "https://rickandmortyapi.com/api/character/avatar/22.jpeg",
  },
  {
    id: "27",
    name: "Artist Morty",
    image: "https://rickandmortyapi.com/api/character/avatar/27.jpeg",
  },
  {
    id: "28",
    name: "Attila Starwar",
    image: "https://rickandmortyapi.com/api/character/avatar/28.jpeg",
  },
  {
    id: "29",
    name: "Baby Legs",
    image: "https://rickandmortyapi.com/api/character/avatar/29.jpeg",
  },
];

const sleep = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const api = {
  fetchCharacters: async (page: number): Promise<CharactersResponse> => {
    await sleep(750);
    return {
      characters: humans.slice(
        (page - 1) * MAX_DOCUMENTS_PER_PAGE,
        page * MAX_DOCUMENTS_PER_PAGE
      ),
    };
  },
  fetchCharacterCount: async (): Promise<CountResponse> => {
    await sleep(750);
    return { count: humans.length };
  },
};

export default api;
