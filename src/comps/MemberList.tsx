import * as React from "react";

export type Member = {
  code: string, 
  amount: number
}

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
            if ((this.props.searchPhrase.length > 2 && 
                this.props.searchPhrase == value.code) || 
                (this.props.searchPhrase.length < 3)) {
              return (
                <div key={value.code} className="table-row">
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