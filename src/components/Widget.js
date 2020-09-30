import React from "react";

class Widget extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.children.props.title);
    this.click = this.click.bind(this);
  }
  click() {
    this.props.remove(this.props.children.props.id);
  }
  render() {
    return (
      <div>
        <div className="window">
          <h5>{this.props.children.props.title}</h5>
          <button className="delete" onClick={this.click}>
            X
          </button>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Widget;
