import React from "react";
import Pomodoro from "../components/Pomodoro";

class ComponentsField extends React.Component {
  render() {
    let components = this.props.components.map((compo) => (
      <div>
        <div>{compo.type === "Pomodoro" ? <Pomodoro /> : ""}</div>
      </div>
    ));

    return <div className="components-field">{components}</div>;
  }
}

export default ComponentsField;
