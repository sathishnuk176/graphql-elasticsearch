import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";

import  schema  from "./schema/index";

const app = express();

app.get("/samplearticles", (req, res) => {
  res.json({
    title: "Youtube hanged",
    views: 12345,
  });
});

app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

app.listen(process.env.PORT, () => {
  console.log(`Its running in ${process.env.PORT}`);
});
