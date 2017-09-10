import * as React from "react";
import Popup from "./Popup";
import {Member} from "../types";
import {App} from "./App"
import * as dataLayer from "./DataLayer";

interface IStateType {
}

interface IPropType {
  toUser: string;
  done: () => void;
}

interface ITransactionPackage {
  fromPwd: string;
  toUser: string;
  amount: number;
}

export default class Transaction extends React.Component<IPropType, IStateType> {
  constructor(props: IPropType) {
    super(props);
    console.log(this.props.toUser);
    this.state = {
    }
  }

  transactionSubmit(transactionPackage?: any) {
    const tPkg: ITransactionPackage = transactionPackage;
    // add toUser to the package.
    // tPkg = Object.assign this.props.toUser;
    // make sure it's not below 0 on server
    // dataLayer.post("");

    // spinning wheel while submitting... then if reponse is success:
    this.props.done();
  }
  
  render() {
      return (
        <Popup 
          submit={this.transactionSubmit.bind(this)} 
          textFields={[{name: "fromPwd", type: "text"}, {name: "amount", type: "number"}]}
          submitText={"Send"}
        />
      )
  }
}