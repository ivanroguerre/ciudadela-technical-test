import { CharactersResponse, CountResponse } from "shared";
import express, { Response } from "express";
import { parse } from "qs";

import {
  humansCountQuery,
  humansQuery,
  pagePlaceholder,
  port,
  rickAndMortyGraphQLServer,
} from "./characters/constants";

const app = express();

app.set("query parser", (str: string) => parse(str));

app.get("/count", (_, res: Response<CountResponse>) => {
  fetch(rickAndMortyGraphQLServer, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ query: humansCountQuery }),
  })
    .then((_res) => _res.json())
    .then((_res) => res.json({ count: _res.data.characters.info.count }));
});

app.get("/characters", (req, res: Response<CharactersResponse>) => {
  const page =
    req.query["page"] !== undefined && !Number.isNaN(req.query["page"])
      ? (req.query["page"] as string)
      : "1";
  fetch(rickAndMortyGraphQLServer, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ query: humansQuery.replace(pagePlaceholder, page) }),
  })
    .then((_res) => _res.json())
    .then((_res) => res.json({ characters: _res.data.characters.results }));
});

app.listen(port);
