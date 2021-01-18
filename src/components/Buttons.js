import React from 'react';

function Buttons({ numbers, onStartTimer, startTimer, onStopTimer, stopTimer, disableBtnStart, disableBtnStop }) {

    return <div className="buttons">
        {!numbers && null}
        {numbers === 1 &&
            <button
                onClick={() => {
                    onStartTimer();
                    startTimer()
                }}
                disabled={disableBtnStart}>
                Start
            </button>
        }
        {numbers === 2 && (
            <>
                <button
                    onClick={() => {
                        onStartTimer();
                        startTimer()
                    }}
                    disabled={disableBtnStart}>
                    Start
                </button>
                <button
                    onClick={() => {
                        onStopTimer();
                        stopTimer()
                    }}
                    disabled={disableBtnStop}>
                    Stop
                </button>
            </>
        )}
    </div>
}

export default Buttons;
