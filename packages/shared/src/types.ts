export interface Character {
  id: number;
  name: string;
  image: string;
}
export interface CharactersResponse {
  characters: Character[];
}
export interface CountResponse {
  count: number;
}
