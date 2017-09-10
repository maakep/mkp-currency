import * as React from "react";

interface IPropType {
  placeholder: string;
  value: string;
  type: "text" | "number" | "password" | "submit" | "reset" | "radio" | "checkbox" | "button";
  readonly: boolean;
  onClick(e: React.MouseEvent<HTMLInputElement>): () => void;
  onChange(e: React.ChangeEvent<HTMLInputElement>): () => void;
  onBlur(e: React.FocusEvent<HTMLInputElement>): () => void;
}

export class Field extends React.Component<IPropType, null> {
  constructor(props: IPropType) {
    super(props);
  }
  render() {
    return (
      <input 
        readOnly={!!this.props.readonly} 
        className={"input-field input-" + this.props.type} 
        type={this.props.type} 
        placeholder={this.props.placeholder} 
        value={this.props.value} 
        onClick={(e) => {this.props.onClick(e)}}
        onChange={(e) => {this.props.onChange(e)}}
        onBlur={(e) => {this.props.onBlur(e)}}
      />
    );
  }
}
