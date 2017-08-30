import { Member } from "../src/types";
import { Server } from "./server";
import * as fs from "fs";
import root from "./root";

export class Members {
  members: Member[];
  server: Server;

  constructor(server: Server) {
    this.server = server;
    this.updateMembers();
    setInterval(() => {
      this.updateMembers();
    }, 30 * 1000); 
  }

  updateMembers() {
    this.getMembersFile((data: Member[]) => {
      this.server.setMembers(data);
    });
  }

  public setMembersFile(members: Member[]) {
    let jsonMembers = JSON.stringify(members);
    fs.writeFile("./members.json", jsonMembers, (err: any) => {
      if (err) {
        console.log("member file failed");        
      } else {
        console.log("new member file");
      }
    }); 
  }

  getMembersFile(cb : (data: Member[]) => void) {
    fs.readFile("members.json", (err: any, data: any) => {
      if (!err) {
        let memberData: Member[] = JSON.parse(data);
        memberData = memberData.sort((a, b) => {
          if (a.amount > b.amount)
            return -1;
          if (a.amount < b.amount)
            return 1;
          return 0;
        });
        cb(memberData);
      } else {
        if (err.code == "ENOENT") {
          let jsonTemplate = '[{"code": "unk", "amount": 0}]';
          fs.writeFile("./members.json", jsonTemplate, (err) => {
            if (err) {
              return console.log(err);
            }
            console.log("file created?");
            this.getMembersFile(cb);
          });
        }
        console.log("fs readfile error: " + err.code);
      }
    });
  }
}