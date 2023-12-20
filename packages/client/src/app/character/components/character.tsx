import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Character } from "shared";
import { FC } from "react";
import Typography from "@mui/material/Typography";

interface CharacterProps {
  character: Character;
}
const Character: FC<CharacterProps> = ({ character: { image, name } }) => (
  <Card>
    {/* 
    Se conocen las dimensiones de las imagenes a partir de la documentación
    en:
    https://rickandmortyapi.com/documentation/#character-schema
    */}
    <CardMedia sx={{ height: 300, width: 300 }} image={image} title={name} />
    <CardContent>
      <Typography variant="h6" color="text.primary">
        {name}
      </Typography>
    </CardContent>
  </Card>
);

export default Character;
