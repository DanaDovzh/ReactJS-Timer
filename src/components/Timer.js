import React, { Component } from 'react';
import Style from 'style-it';
import Buttons from "./Buttons";
import "../css/general.css";
class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeNow: props.startTime,
            stepTimer: props.stepTimer,
            id: props.id,
            btnStart: false,
            btnStop: true
        }
    }

    componentDidMount() {
        if (this.props.autostart) {
            this.startTimer();
        }
    }
    startTimer = () => {
        const generalTimer = document.getElementById(this.state.id);
        const lineTimer = document.getElementById(this.state.id + "-line");
        if (this.props.buttons !== 2) {
            lineTimer.classList.add("timer-line");
            generalTimer.classList.add("timer")
        }
        this.setState({ btnStart: true });
        this.setState({ btnStop: false });
        this.timerID = setInterval(
            () => this.tick(),
            1000 * this.state.stepTimer
        );
    }

    stopTimer = () => {
        this.setState({ btnStart: false });
        this.setState({ btnStop: true });
        clearInterval(this.timerID);
    }
    tick() {
        const generalTimer = document.getElementById(this.state.id);
        const lineTimer = document.getElementById(this.state.id + "-line");

        if (this.state.timeNow > 0) {
            if (!generalTimer.classList.contains("timer") && this.props.buttons !== 2) {
                generalTimer.classList.add("timer")
                lineTimer.classList.add("timer-line");
            }
            this.setState({
                timeNow: this.state.timeNow - this.state.stepTimer
            });
        } else {
            if (this.props.buttons !== 2) {
                lineTimer.classList.remove("timer-line");
                generalTimer.classList.remove("timer")
            }

            this.setState({
                timeNow: this.props.startTime
            });
            if (!this.props.autostart) {
                this.setState({ btnStart: false });
                clearInterval(this.timerID);
            }
        }
    }
    render() {
        return (
            <Style>
                {`
                .timer-line {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 2;
                    animation: line ${this.props.startTime}s  linear forwards;
                }

                .timer-line::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 50%;
                    height: 100%;
                    background-color: #978989;
                  }

                  .timer::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    width: 50%;
                    height: 100%;
                    background-color: #150768;
                    z-index: 3;
                    left: 0;
                    animation: line_left ${this.props.startTime}s steps(1, end) forwards;
                  }
                  
                  .timer::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    width: 50%;
                    height: 100%;
                    background-color: #978989;
                    z-index: 3;
                    right: 0;
                    animation: line_right ${this.props.startTime}s steps(1, end) forwards;
                  }

            `}
                <div className="block-timer">
                    <div id={this.state.id} className="">
                        <div id={`${this.state.id}` + "-line"} />
                        <div className="timer-body">
                            <div className="timer-number">{this.state.timeNow}</div>
                        </div>
                    </div>
                    <Buttons
                        numbers={this.props.buttons}
                        onStartTimer={this.props.onStartTimer}
                        startTimer={this.startTimer}
                        onStopTimer={this.props.onStopTimer}
                        stopTimer={this.stopTimer}
                        disableBtnStart={this.state.btnStart}
                        disableBtnStop={this.state.btnStop}
                    />
                </div>
            </Style>
        )
    }

}
Timer.defaultProps = {
    autostart: false,
}
export default Timer;