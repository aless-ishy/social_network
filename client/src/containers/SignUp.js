import React, {Component} from 'react';
import "../assets/stylesheets/SignUp.scss";
import UserAvatar from "../components/UserAvatar";
import {TextField} from "@material-ui/core";

class SignUp extends Component {
    render() {
        return (
            <div className="sign-up-container">
                <UserAvatar/>
                <div className="sign-up-form">
                    <TextField/>
                </div>
            </div>
        );
    }
}

export default SignUp;