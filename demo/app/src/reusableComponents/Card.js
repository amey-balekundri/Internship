import React from 'react'
import logo from '../styles/default.jpg'

const Card = (props) => {
    return(
        <div className="card text-center p-2 mx-5 my-5">
            <img src={logo} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.name} {props.fullname}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    );
}

export default Card