import React from 'react';

function  ChangeSize({bigValue, smallValue, changeBtns, indexBtn}) {
    return (indexBtn != 0) ? (
        <div className = "change-size">
            <button onClick = {bigValue} disabled = {changeBtns}>+</button>
            <button onClick = {smallValue} disabled = {changeBtns}>-</button>
        </div>
    ) : <div></div>
}

export default ChangeSize;