import * as express from "express";
import root from "./root";
const app: express.Express = express();

app.get("/", (req, res) => {
  res.sendFile("/index.html", { root: "./" });
});

app.get("/*.(js|css|png)", (req, res) => {
  res.sendFile(req.url, { root: "./" });
});

export default app;