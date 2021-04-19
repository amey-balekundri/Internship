import React, {Component} from 'react';
import Navbar from '../reusableComponents/Navbar'
import Card from '../reusableComponents/Card'
import '../styles/Home.css'

class Home extends Component {
    state={
        name:"abc"
    };
    render(){
        return(
            <div>
                <div className="imgbg">
                        <Navbar/>
                        <div className="headline">
                            <h1>Lorem ipsum</h1>
                            <h1>dolor sit amet, consectetur</h1>
                            <h1>adipiscing elit, sed do eiusmod tempor</h1> 
                            <h1>incididunt ut labore et dolore magna aliqua.</h1>
                        </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <Card fullname={this.state.name}/>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <Card name="def"/>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <Card name="ghi"/>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <Card name="jkl"/>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <Card name="lmn"/>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Home;
