import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import SignIn from "./SignIn";
import Register from "./Register";
import Logout from "./Logout";

class UserAgeHome extends Component{
    constructor(props) {
        super(props);
        this.state={
            loggedInUser:{
                user: null,
                isLoggedIn: false,
            },
        };
    }

    componentDidMount() {
        this.checkIfLoggedIn();
    }

    updateIfLoggedIn=(user, isLoggedIn)=>{
        this.setState({
            loggedInUser:{
                user: user,
                age: -1,
                imageURL: "",
                isLoggedIn: isLoggedIn,
            }
        })
    };

    checkIfLoggedIn=()=>{
        fetch('/hwy66')
            .then(data=>data.text())
            .then(response=>{
                // console.log(response);
                if(response)
                    return this.updateIfLoggedIn(response, true);
                else
                    return this.updateIfLoggedIn(response, false);
            });
    };

    render(){
        return(
            <div>
                <h1>Welcome to Kenn's awesome page</h1>
                <Router>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/signIn"}>Sign In</Link>
                    <Link to={"/register"}>Register</Link>
                    <Link to={"/logout"}>Log Out</Link>
                    <Route path={"/signIn"} component={SignIn} />
                    <Route path={"/register"} component={Register} />
                    <Route path={"/logout"} component={Logout} />
                </Router>
                {this.state.loggedInUser.isLoggedIn?
                    (<h1>{this.state.loggedInUser.age}</h1>):
                    (<h1>NOT SIGNED IN</h1>)}
            </div>
        );
    }
}

export default UserAgeHome;