import React from 'react'
import './style.scss';

function Input({label, ...rest}) {
    return (
        <div className="input-wrapper">
            <p className="label">{label}</p>
            <input className="input" {...rest}></input>
        </div>
    )
}

export default Input
