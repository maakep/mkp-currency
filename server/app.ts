import * as express from "express";

const app: express.Express = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/*", (req, res) => {
  res.sendFile(__dirname + req.url);
});

export default app;