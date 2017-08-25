import * as React from "react";

import { MemberList } from "./MemberList";
import { Member } from "../types";
import Search from "./Search";
import members from "../members";

interface IStateType {
  search: string;
}

export class App extends React.Component<null, IStateType> {
  members: Member[] = members;
  
  constructor(props: null) {
    super(props);
    this.state = {
      search: ''
    }  
  }

  render() {
      return (
        <div>
          <Search searchPerformed={(s: string) => this.setState({search: s})} />
          <MemberList members={this.members} searchPhrase={this.state.search}/>
        </div>
      )
  }
}