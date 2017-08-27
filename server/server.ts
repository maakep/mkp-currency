import * as http from "http";
import app from "./app";
import { Member } from "../src/types";
import { Members } from "./member-repo";

export class Server {
  port = '3000';
  server: http.Server;
  members: Member[];

  constructor() {
    this.server = http.createServer(app);
    this.server.listen(this.port);
    console.log("Listening on :" + this.port);
    console.log(process.cwd());
    this.configureRouting();
  }

  setMembers(m: Member[]) {
    this.members = m;
    console.log(this.members);
  }

  configureRouting() {
    app.get("/members", (req, res) => {
      res.send(this.members);
    });
  }
}

var server = new Server();
var mem = new Members(server);
