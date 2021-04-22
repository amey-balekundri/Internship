import React from 'react'
import logo from '../styles/default.jpg'

const Card = (props) => {
    return(
        <div className="card text-center p-2 mx-3 my-3">
            {/* <i id="card-delete" onClick={()=>props.delete(props.id)} className="far fa-trash-alt fa-lg"></i>
            <i id="card-edit" onClick={()=>props.edit(props.id)} className="far fa-edit fa-lg"></i> */}
            <img src={logo} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.fname} {props.lname}</h5>
                <p className="card-text">{props.designation}</p>
                <p className="card-text">{props.email}</p>
                <p className="card-text">{props.phoneno}</p>
            </div>
            <div className="text-center">
                <button type="button" className="btn btn-outline-info w-50" id=""
                    onClick={()=>props.edit(props.id,props.fname,props.lname,props.email,props.phoneno,props.designation)}>Edit</button>
                <button type="button" className="btn btn-outline-danger w-50" id=""
                    onClick={()=>props.delete(props.id)}>Delete</button>
            </div>
        </div>
    );
}

export default Card