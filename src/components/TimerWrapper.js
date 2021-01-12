import React, { Component } from 'react';
import Timer from "./Timer";

class TimerWrapper extends Component {
    onStartTimer() {
        console.log("Timer stars");
    }
    onStopTimer() {
        console.log("Timer stop");
    }

    render() {
        return (
            <div className="main">

                <Timer
                    stepTimer={2}
                    startTime={12}
                    onStartTimer={this.onStartTimer}
                    onStopTimer={this.onStopTimer}
                    id={1}
                    buttons={1}
                />
                <Timer
                    stepTimer={1}
                    startTime={15}
                    onStartTimer={this.onStartTimer}
                    onStopTimer={this.onStopTimer}
                    id={3}
                    buttons={2}
                />
                <Timer
                    stepTimer={1}
                    startTime={20}
                    onStartTimer={this.onStartTimer}
                    onStopTimer={this.onStopTimer}
                    autostart={true}
                    id={2}
                    buttons={0}
                />
            </div>
        )
    }
}

export default TimerWrapper;