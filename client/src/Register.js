import React, { Component } from 'react';

class Register extends Component{

    submitRegistration=(e)=>{
        fetch('/hwy66/')
    };

    render(){
        return(
            <div>
                <h1>Register</h1>
                <form onSubmit={this.submitRegistration}>
                    <p>
                        <label htmlFor={"user"}>Enter username:</label>
                        <input type="text" name={"name"} id={"name"}/>
                    </p>

                    <p>
                        <label htmlFor={"password"}>Enter password:</label>
                        <input type="text" name={"password"} id={"password"}/>
                    </p>

                    <p>
                        <label htmlFor={"age"}>Enter age:</label>
                        <input type="text" name={"age"} id={"age"}/>
                    </p>

                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default Register;