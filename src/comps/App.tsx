import * as React from "react";
import { MemberList } from "./MemberList";
import { Member } from "../types";
import Search from "./Search";
import * as server from "./DataLayer";
import members from "../members";

const style = require("../../styles/style.css");

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
    
    this.getMembers();
    setInterval(() => {
      this.getMembers();
    }, 30 * 1000);
  }

  getMembers() {
    server.get('/members')
      .then((data: Member[]) => {
        this.setState({members: data});
      });
  }

  render() {
      return (
        <div>
          <Search searchPerformed={(s: string) => this.setState({search: s})} />
          <MemberList app={this} members={this.state.members} searchPhrase={this.state.search}/>
        </div>
      )
  }
}