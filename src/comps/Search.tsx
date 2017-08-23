import * as React from "react";

interface IStateType {
  searchPhrase: string
}

interface IPropType {
  searchPerformed: (text: string) => void
}

export default class Search extends React.Component<IPropType, IStateType> {
  constructor(props: IPropType) {
    super(props);
    this.state = {
      searchPhrase: ''
    }
  }
  textChanged(text: React.FormEvent<HTMLInputElement>) {
    const textValue = text.currentTarget.value;
    this.props.searchPerformed(textValue);
  }

  render() {
      return (
        <input type="text" onChange={(e: React.FormEvent<HTMLInputElement>) => this.textChanged(e)} />
      )
  }
}