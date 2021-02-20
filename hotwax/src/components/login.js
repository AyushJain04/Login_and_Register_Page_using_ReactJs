
import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Login</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"   required/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" minLength="6" required />
                </div>

                <br />

                <a href="details.html"> <button type="submit" className="btn btn-primary btn-block">login</button> </a>
                <p className="forgot-password text-right">
                     <a href="#">Forgot password?</a>
                </p>
            </form>
        );
    }
}