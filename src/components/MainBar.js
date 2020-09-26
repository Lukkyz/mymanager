import React from "react";
import AddContainer from "../containers/AddContainer";

class MainBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    return (
      <div>
        <div className="expandList">
          <i className="pointer material-icons" onClick={this.onClick}>
            view_list
          </i>
        </div>
        <nav className={this.state.show ? "mainBar" : "mainBar hide"}>
          <ul>
            <AddContainer />
          </ul>
        </nav>
      </div>
    );
  }
}

export default MainBar;
