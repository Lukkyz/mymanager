import React from "react";
import Pomodoro from "../components/Pomodoro";
import Widget from "../components/Widget";
import WidgetContainer from "../containers/WidgetContainer";

class ComponentsField extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(id) {
    this.props.remove(id);
  }
  render() {
    let components = this.props.components.map((compo) => (
      <div className="widget">
        {compo.type === "Pomodoro" ? (
          <WidgetContainer>
            <Pomodoro id={compo.id} title="Pomodoro" />
          </WidgetContainer>
        ) : (
          ""
        )}
      </div>
    ));

    return <div className="components-field">{components}</div>;
  }
}

export default ComponentsField;
