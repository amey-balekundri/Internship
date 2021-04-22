import React, { Component } from 'react'
import Navbar from '../reusableComponents/Navbar'
import Card from '../reusableComponents/Card'
import Button from '../reusableComponents/Button'
import '../styles/home.css'

import {connect} from 'react-redux'
import  {
    createContact,editContact,deleteContact,deleteAll
} from '../actions/contactAction'

export class Home extends Component {
    state = {
        fname:'',
        lname:'',
        email:'',
        phoneno:'',
        designation:'',
        editMode:false,
        editIndex:'',
    };

    onInputChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value,
        });
    }

    create = async () => {
        let payload={
            fname:this.state.fname,
            lname:this.state.lname,
            email:this.state.email,
            phoneno:this.state.phoneno,
            designation:this.state.designation
        }
        await this.props.createContact(payload);
        this.Clear();
    };
    
    delete = async (index) =>{
       await this.props.deleteContact(index);
    }

    deleteall = async () => {
        await this.props.deleteAll();
    }

    edit = (index,fname,lname,email,phoneno,designation) => {
        this.setState({
            editMode:true,
            fname:fname,
            lname:lname,
            email:email,
            phoneno:phoneno,
            designation:designation,
            editIndex:index
        })
    }

    SaveEdit = async () => {
        let payload={
            fname:this.state.fname,
            lname:this.state.lname,
            email:this.state.email,
            phoneno:this.state.phoneno,
            designation:this.state.designation
        }
        let index=this.state.editIndex
        await this.props.editContact(payload,index)
        this.setState({
            editMode:false,
            index:'',
        })
        this.Clear();
    }

    CancelEdit = () => {
        this.setState({
            editMode:false,
        });
        this.Clear();
    }

    Clear = () => {
        this.setState({
            fname:'',
            lname:'',
            email:'',
            phoneno:'',
            designation:'',
        })
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div className="container-fluid row">
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <form id="contact-form" className="my-3">
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" className="form-control" id="fname" required
                                name="fname" value={this.state.fname} onChange={this.onInputChange}/>
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" className="form-control" id="lname" required
                                name="lname" value={this.state.lname} onChange={this.onInputChange}/>
                            </div>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" required
                                name="email" value={this.state.email} onChange={this.onInputChange}/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="number" className="form-control" id="phone_no" required
                                name="phoneno" value={this.state.phoneno} onChange={this.onInputChange}/>
                            </div>
                            <div className="form-group">
                                <label>Designation</label>
                                <input type="text" className="form-control" id="designation" required
                                name="designation" value={this.state.designation} onChange={this.onInputChange}/>
                            </div>
                            <div className="text-center mt-5 mb-2">
                                {this.state.editMode
                                    ?   <>
                                            <Button class={"btn btn-primary mx-2"} id={"save"} func={this.SaveEdit} name={"Save"}/>
                                            <Button class={"btn btn-danger mx-2"} id={"cancel-edit"} func={this.CancelEdit} name={"Cancel Edit"}/>
                                        </>
                                    :   <Button class={"btn btn-primary mx-2"} id={"save"} func={this.create} name={"Create"}/>
                                }
                            </div>
                        </form>
                        <Button class={"btn btn-outline-danger mt-5"} id={"delete-all"} func={this.deleteall} name={"Delete All Contacts"}/>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-8">
                        <div className="d-flex flex-wrap justify-content-center">
                            {this.props.contacts.map((value,index)=>{
                                return <Card key={index} fname={value.fname} lname={value.lname} email={value.email} phoneno={value.phoneno}
                                        designation={value.designation} delete={this.delete} edit={this.edit} id={index}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    contacts:state.contactReducer.contacts,
})

export default connect(
    mapStateToProps,
    {
        createContact,
        editContact,
        deleteContact,
        deleteAll
    }
)(Home);
