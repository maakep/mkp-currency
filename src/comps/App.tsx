import * as React from "react";

import { MemberList } from "./MemberList";
import { Member } from "../types";
import Search from "./Search";
import members from "../members";

interface IStateType {
  search: string;
  members: Member[];
}

export class App extends React.Component<null, IStateType> {
  
  constructor(props: null) {
    super(props);
    this.state = {
      search: '',
      members: members,
    }

    fetch('/members')
      .then((res) => { return res.json(); })
      .then((data) => {
        this.setState({members: data});
      })
  }

  render() {
      return (
        <div>
          <Search searchPerformed={(s: string) => this.setState({search: s})} />
          <MemberList members={this.state.members} searchPhrase={this.state.search}/>
        </div>
      )
  }
}