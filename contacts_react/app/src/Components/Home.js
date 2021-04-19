import React, { Component } from 'react'
import Navbar from '../resuableComponents/Navbar'
import Card from '../resuableComponents/Card'
import Button from '../resuableComponents/Button'
import '../styles/home.css'

export class Home extends Component {
    state = {
        contacts:[],
        name:'',
        email:'',
        phoneno:'',
        editMode:false,
        editIndex:'',
    };

    onInputChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value,
        });
    }

    createContact = () => {
        let temp={
            name:this.state.name,
            email:this.state.email,
            phoneno:this.state.phoneno,
        }
        let tempcontacts=this.state.contacts
        tempcontacts.push(temp)
        this.setState({
            // contacts:[...this.state.contacts,this.state.name]
            //contacts:this.state.contacts.concat(temp)
            contacts:tempcontacts,
        });
        // this.RenderContacts();
        this.Clear();
    };
    
    DeleteContact = (index) =>{
        let tempcontacts=this.state.contacts
        tempcontacts.splice(index,1)
        this.setState({
            contacts:tempcontacts,
        })
    }

    DeleteAll = () => {
        let tempcontacts=this.state.contacts
        tempcontacts.splice(0,tempcontacts.length)
        this.setState({
            contacts:tempcontacts,
        })
    }

    EditContact = (index) => {
        this.setState({
            editMode:true,
            name:this.state.contacts[index]['name'],
            email:this.state.contacts[index]['email'],
            phoneno:this.state.contacts[index]['phoneno'],
            editIndex:index
        })
    }

    SaveEdit = () => {
        let tempcontacts=this.state.contacts
        let index=this.state.editIndex
        tempcontacts[index]['name']=this.state.name
        tempcontacts[index]['email']=this.state.email
        tempcontacts[index]['phoneno']=this.state.phoneno
        this.setState({
            contacts:tempcontacts,
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
            name:'',
            email:'',
            phoneno:'',
        })
    }

    // RenderContacts = () => {
    //    let cardHtml= this.state.contacts.map((value,index)=>{
    //         return <Card key={index} name={value.name} email={value.email} phoneno={value.phoneno}/>
    //     })
    //     document.getElementById("right-content").innerHTML=cardHtml.join("")
    // }


    render() {
        return (
            <div>
                <Navbar/>
                <div className="container-fluid row">
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <form id="contact-form" className="my-3">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" id="name" required
                                name="name" value={this.state.name} onChange={this.onInputChange}/>
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
                            <div className="text-center mt-5 mb-2">
                                {this.state.editMode
                                    ?   <>
                                            <Button class={"btn btn-primary mx-2"} id={"save"} func={this.SaveEdit} name={"Save"}/>
                                            <Button class={"btn btn-danger mx-2"} id={"cancel-edit"} func={this.CancelEdit} name={"Cancel Edit"}/>
                                        </>
                                    :   <Button class={"btn btn-primary mx-2"} id={"save"} func={this.createContact} name={"Create"}/>
                                }
                            </div>
                        </form>
                        <Button class={"btn btn-outline-danger mt-5"} id={"delete-all"} func={this.DeleteAll} name={"Delete All Contacts"}/>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-8">
                        <div className="d-flex flex-wrap justify-content-center">
                            {this.state.contacts.map((value,index)=>{
                                return <Card key={index} name={value.name} email={value.email} phoneno={value.phoneno}
                                        delete={this.DeleteContact} edit={this.EditContact} id={index}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
