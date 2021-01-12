import React from 'react';

function Buttons({ numbers, onStartTimer, startTimer, onStopTimer, stopTimer, disableBtnStart, disableBtnStop }) {
    if (numbers === 0) {
        return (
            <div></div>
        )
    } else if (numbers === 1) {
        return (
            <div className="buttons">
                <button onClick={() => {
                    onStartTimer();
                    startTimer()
                }} disabled={disableBtnStart}>
                    Start
            </button>
            </div>
        )
    } else if (numbers === 2) {
        return (
            <div className="buttons">
                <button onClick={() => {
                    onStartTimer();
                    startTimer()
                }} disabled={disableBtnStart}>
                    Start
                    </button>
                <button onClick={() => {
                    onStopTimer();
                    stopTimer()
                }} disabled={disableBtnStop}>Stop
                    </button>
            </div>
        )
    }
}

export default Buttons;