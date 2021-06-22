import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Button, Form } from "react-bootstrap";

import './form.css';

export default class LoginForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
          };
    }

    onSubmit = () => {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        if (email == "sharathvasan99@gmail.com" && password == "sharathvasan") {
          alert("You are logged in")
        } 
        else {
          alert("you have Entered the Wrong Credentials")
        }
     }

  render() {
    const { email, password } = this.state;
    return (
      <div className="form">
        <form className="form-group">
            <input type="text" name="email" placeholder="email" value={email} onChange={this.handleChange} id="email" ></input><br/>
            <input type="password" name="password" placeholder="password" value={password} onChange={this.handleChange} id="password"></input><br/>
            <button type="submit" onClick={this.onSubmit}>Login</button>
        </form>
      </div>
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
}
