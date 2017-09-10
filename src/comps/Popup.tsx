import * as React from "react";

interface IPropType {
  submit: (pkg?: any) => void;
  submitText: string;
  textFields: {name: string, type: string}[];
}

export default class Transaction extends React.Component<IPropType, null> {
  constructor(props: IPropType){
    super(props);
  }

  packageForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form: HTMLFormElement = e.currentTarget;
    let formData = new FormData(form);
    let result: any = {};

    for (const s of this.props.textFields)
    {
        result[s.name] = formData.get(s.name);
    }
    result = JSON.stringify(result);
    console.log(result);
    this.props.submit(result);
  }

  render() {
    let inputs: JSX.Element[] = new Array<JSX.Element>();
    for (const s of this.props.textFields) {
      inputs.push(<input key={s.name} type={s.type} name={s.name} />);
    }

    return (
      <form onSubmit={ (e) => {this.packageForm(e)}}>
        {inputs}
        <input type="submit" value={this.props.submitText} />
      </form>
    )
  }
}