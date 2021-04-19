import React from 'react'

function Button(props) {
    return (

            <button type="button" className={props.class} id={props.id}
                onClick={props.func}>{props.name}</button>
    )
}

export default Button
