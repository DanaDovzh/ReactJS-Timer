import React from 'react';

function  ChangeSize({changeTime, changeBtns, indexBtn}) {
    return (indexBtn) ? (
        <div className = "change-size">
            <input type = "button" value = "+" onClick = {() => changeTime("+")} disabled = {changeBtns}></input>
            <input type = "button" value="-" onClick = {() => changeTime("-")} disabled = {changeBtns}></input>
        </div>
    ) : <div></div>
}

export default ChangeSize;