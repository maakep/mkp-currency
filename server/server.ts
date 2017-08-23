import * as http from "http";
import app from "./app";

class Server {
  port = '3000';
  server: http.Server;
  constructor() {
    this.server = http.createServer(app);
    this.server.listen(this.port);
    console.log("Listening on :" + this.port);
  }
}
var server = new Server();