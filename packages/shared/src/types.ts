export interface Character {
  id: string;
  name: string;
  image: string;
}
export interface CharactersResponse {
  characters: Character[];
}
export interface CountResponse {
  count: number;
}
