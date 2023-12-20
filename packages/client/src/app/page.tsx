import ClientButton from "@/app/components/client-button";
import Container from "@mui/material/Container";
import { FC } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Page: FC = () => (
  <Container>
    <Stack minHeight="100vh" alignItems="center" justifyContent="center">
      <Typography variant="h2" color="text.primary">
        Humanos (y algunos humanoides) en el universo de Rick & Morty
      </Typography>
      <ClientButton>Ir a revisarlos</ClientButton>
    </Stack>
  </Container>
);

export default Page;
