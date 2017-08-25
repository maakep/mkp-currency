import { Member } from "../src/types";
import { Server } from "./server";
import * as fs from "fs";

export class Members {
  members: Member[];

  constructor(server: Server) {
    this.getMembersFile((data: Member[]) => {
      server.setMembers(data);
    });
  }

  getMembersFile(cb : (data: Member[]) => void) {
    fs.readFile(__dirname + "/members.json", (err: any, data: any) => {
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
        console.log(err);
      }
    });
  }
}