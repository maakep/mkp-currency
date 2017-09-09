import * as http from "http";
import app from "./app";
import { Member } from "../src/types";
import { Members, IMemberServer } from "./member-repo";

export class Server implements IMemberServer {
  port = '3000';
  server: http.Server;
  members: Member[];

  constructor() {
    this.server = http.createServer(app);
    this.server.listen(this.port);
    console.log("Listening on :" + this.port);
    this.configureRouting();
  }

  setMembers(m: Member[]) {
    this.members = m;
    mem.setMembersFile(this.members);
  }

  configureRouting() {
    app.get("/members", (req, res) => {
      res.send(this.members);
    });

    app.post("/set-member", (req, res) => {
      let memberDiff: Member = req.body;
      let foundMember = this.findMember(memberDiff);
      if (foundMember !== undefined)  {
        foundMember.amount += memberDiff.amount;
        this.updateMembers();
        console.log(this.findMember(foundMember));
      } else {
        console.log("not found");
      }
      res.sendStatus(200);
    });
  }
  updateMembers() {
    server.setMembers(this.members);
  }
  findMember(member: Member): Member {
    for (let i = 0; i < this.members.length; i++) {
      if (this.members[i].code === member.code){
        return this.members[i];        
      }
    }
    return undefined;
  }
}

var server = new Server();
var mem = new Members(server);
