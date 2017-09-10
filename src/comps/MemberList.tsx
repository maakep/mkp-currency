import * as React from "react";
import {App} from "./App";
import {Member} from "../types";
import {isAdmin} from "./admin";
import * as dataLayer from "./DataLayer";

interface IPropType { 
  members: Member[],
  searchPhrase: string,
  app: App,
}

export class MemberList extends React.Component<IPropType, undefined> {
  constructor(props: IPropType) {
    super(props);
  }

  crement(member: Member, amount: number) {
    member.amount = amount;

    dataLayer.post("/set-member", member)
      .then((r) => this.props.app.getMembers());
  }

  render() {
      return (
        <div className="table">
          {this.props.members.map((value, i) => {
            if ((this.props.searchPhrase.length > 0 && 
                this.props.searchPhrase == value.code.substr(0, this.props.searchPhrase.length) || 
                (this.props.searchPhrase.length == 0))) {
              return (
                <div key={i} className="table-row">
                {isAdmin && 
                    <button onClick={(e) => this.crement(value, -1)}>
                      -
                    </button>
                  }
                  <div className="table-cell code">{value.code}</div>
                  <div className="table-cell amount">{value.amount}</div>
                  {isAdmin && 
                    <button onClick={(e) => this.crement(value, 1)}>
                      +
                    </button>
                  }
                </div>
              )
            }
          })}
        </div>
      )
  }
}