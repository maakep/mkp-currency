import * as React from "react";
import { MemberList } from "./MemberList";
import { Member } from "../types";
import Search from "./Search";
import * as server from "./DataLayer";
import members from "../members";
import Transaction from "./Transaction";

const style = require("../../styles/style.css");

interface IStateType {
  search: string;
  members: Member[];
  transactionActive: boolean;
  transactionToUser: string;
}

export class App extends React.Component<null, IStateType> {
  
  constructor(props: null) {
    super(props);
    this.state = {
      search: '',
      members: members,
      transactionActive: false,
      transactionToUser: null,
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

  userClicked(user: string) {
    this.setState({transactionToUser: user, transactionActive: true});
  }
  
  transactionPerformed() {
    console.log("huh");
    this.setState({transactionToUser: null, transactionActive: false});
  }



  render() {
      return (
        <div>
          {!this.state.transactionActive &&
            <div>
              <Search searchPerformed={(s: string) => this.setState({search: s})} />
              <MemberList app={this} members={this.state.members} searchPhrase={this.state.search}/>
            </div>
          }
          {this.state.transactionActive &&
            <Transaction done={this.transactionPerformed.bind(this)} toUser={this.state.transactionToUser}/> 
          }
        </div>
      )
  }
}