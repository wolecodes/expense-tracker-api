import express, { type Express } from "express";

const app: Express = express();

// parse JSON
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1> Hello world! </h1>`);
});

export default app;
