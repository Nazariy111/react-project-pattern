import React from 'react'

const ClickBar = ({clickChanger, overClicks, clicks, onReset}) => {
    return (
        <div>
            <button onClick={clickChanger} disabled={overClicks}>clicks:{clicks}</button>
            <p>You clicked {clicks} times</p>
            <button onClick={onReset}>RESET clicks</button>
        </div>
    )
}

export default ClickBar