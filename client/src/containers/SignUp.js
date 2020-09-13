import React, {Component} from 'react';
import "../assets/stylesheets/SignUp.scss";
import UserAvatar from "../components/UserAvatar";
import {Button, TextField} from "@material-ui/core";

class SignUp extends Component {
    render() {
        return (
            <div className="sign-up-container">
                <h1>Sign Up</h1>
                <UserAvatar/>
                <div className="sign-up-form">
                    <div className="sign-up-form-name">
                        <div className="field-small">
                            <TextField fullWidth variant="outlined" label="Name" id="name"/>
                        </div>
                        <div className="field-small">
                            <TextField fullWidth variant="outlined" label="Last Name" id="lastname"/>
                        </div>
                    </div>
                    <div className="field-large">
                        <TextField fullWidth variant="outlined" label="Email" id="email"/>
                    </div>
                    <div className="field-large">
                        <TextField fullWidth variant="outlined" label="Password" id="password"/>
                    </div>
                    <div className="sign-up-form-action-buttons">
                        <Button>SIGN UP</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;