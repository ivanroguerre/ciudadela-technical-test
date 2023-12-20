// Las consultas no son los suficientemente precisas ya que
// el filtro `species` con el valor `Human` aún permite personajes
// con especie `Humanoid`
export const humansCountQuery = `
{
  characters(filter: {species: "Human"}) {
    info {
      count
    }
  }
}
`;
export const humansQuery = `
{
  characters(page: <page>, filter: {species: "Human"}) {
    results {
      id,
      name,
      image,
    }
  }
}
`;
export const pagePlaceholder = "<page>";
export const rickAndMortyGraphQLServer = "https://rickandmortyapi.com/graphql";
