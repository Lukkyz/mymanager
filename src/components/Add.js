import React from "react";
import { v4 as uuidv4 } from "uuid";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.clicked = this.clicked.bind(this);
  }
  clicked() {
    this.props.add({
      id: uuidv4(),
      type: "Pomodoro",
    });
  }
  render() {
    return <div onClick={this.clicked}>Add</div>;
  }
}

export default Add;
