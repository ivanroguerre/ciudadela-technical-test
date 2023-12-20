import Container from "@mui/material/Container";
import { FC } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import Character from "@/app/characters/components/character";
import ClientPagination from "@/app/components/client-pagination";
import { MAX_DOCUMENTS_PER_PAGE } from "@/app/characters/constants";
import api from "@/app/characters/api";

interface PageProps {
  searchParams: { [key: string]: string };
}
const Page: FC<PageProps> = async ({ searchParams }) => {
  const page =
    searchParams["page"] !== undefined &&
    !Number.isNaN(Number(searchParams["page"]))
      ? Number(searchParams["page"])
      : 1;
  const { count: characterCount } = await api.fetchCharacterCount();
  const pageCount = Math.ceil(characterCount / MAX_DOCUMENTS_PER_PAGE);
  const { characters } = await api.fetchCharacters(page);
  return (
    <Container>
      <Stack alignItems="center">
        <ClientPagination page={page} count={pageCount} />
        <Grid container justifyContent="center" spacing="2">
          {characters.map((character) => (
            <Grid key={character.id} item>
              <Character character={character} />
            </Grid>
          ))}
        </Grid>
        <ClientPagination page={page} count={pageCount} />
      </Stack>
    </Container>
  );
};

export default Page;
