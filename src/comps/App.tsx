import * as React from "react";

import { MemberList, Member } from "./MemberList";
import Search from "./Search";

interface IStateType {
  search: string;
}

export class App extends React.Component<null, IStateType> {
  members: Member[] = [
    {code: 'urb', amount: 4},
    {code: 'haj', amount: 3},
    {code: 'lax', amount: 2},
    {code: 'nik', amount: 1}
  ];
  
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