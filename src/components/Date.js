import React from "react";
import moment from "moment";

export default class Date extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
    };
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: moment() });
  }

  getTime() {
    return this.state.date.format("HH:mm:ss");
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  render() {
    return (
      <div className="time">
        <div className="clock" center="xs">
          <div center="xs">
            <span className="hours">{this.getTime()}</span>
          </div>
        </div>
        <div className="date" center="xs">
          <div className="today-is">
            {this.state.date.format("ddd MMM DD YYYY")}
          </div>
        </div>
      </div>
    );
  }
}
