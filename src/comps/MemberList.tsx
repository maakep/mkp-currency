import * as React from "react";
import {Member} from "../types";

interface IPropType { 
  members: Member[],
  searchPhrase: string
}

export class MemberList extends React.Component<IPropType, undefined> {
  constructor(props: IPropType) {
    super(props);
  }

  render() {
      return (
        <div className="table">
          {this.props.members.map((value, i) => {
            console.log(value.code.substr(this.props.searchPhrase.length));
            if ((this.props.searchPhrase.length > 0 && 
                this.props.searchPhrase == value.code.substr(0, this.props.searchPhrase.length) || 
                (this.props.searchPhrase.length == 0))) {
              return (
                <div key={i} className="table-row">
                  <div className="table-cell code">{value.code}</div>
                  <div className="table-cell amount">{value.amount}</div>
                </div>
              )
            }
          })}
        </div>
      )
  }
}