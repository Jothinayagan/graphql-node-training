const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (_req, res) => res.status(200).send(`<h1>Hello world</h1>`));

app.listen(PORT, () => console.log(`Node server listening at ${PORT}`));
