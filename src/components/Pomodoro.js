import React from "react";
import Draggable from "react-draggable";

class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 60 * 25 - 1,
      play: false,
      pause: false,
      running: true,
    };
    this.pause = this.pause.bind(this);
    this.play = this.play.bind(this);
    this.click = this.click.bind(this);
  }
  audio = new Audio("https://www.fesliyanstudios.com/play-mp3/4386");

  tick() {
    this.setState({
      time: this.state.time - 1,
    });
    if (this.state.time === 0) {
      this.setState(
        { play: !this.state.play, pause: !this.state.pause },
        () => {
          this.state.play ? this.audio.play() : this.audio.pause();
          if (!this.state.play) {
            this.audio.currentTime = 0;
          }
          if (!this.state.pause) {
            this.setState({
              time: 60 * 25,
            });
          } else {
            this.setState({
              time: 60 * 5,
            });
          }
        }
      );
    }
  }
  click() {
    this.state.running ? this.pause() : this.play();
  }
  pause() {
    clearInterval(this.timer);
    this.setState({
      running: false,
    });
  }
  play() {
    this.timer = setInterval(() => this.tick(), 1000);
    this.setState({
      running: true,
    });
  }
  componentDidMount() {
    this.audio.volume = 0.2;
    this.play();
  }
  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    return (
      <Draggable bounds="parent" {...dragHandlers}>
        <div>
          <h3>Pomodoro</h3>
          <span>
            {Math.floor(this.state.time / 60)} : {this.state.time % 60}
          </span>
          <button onClick={this.click}>
            {this.state.running ? "Pause" : "Lancer"}
          </button>
        </div>
      </Draggable>
    );
  }
}
export default Pomodoro;
