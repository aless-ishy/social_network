import React, {Component} from 'react';
import "../assets/stylesheets/User.scss";
import addPhoto from "../assets/icons/add_photo.svg";

class UserAvatar extends Component {
    render() {
        return (
            <div className="user-container">
                <div className="user-head"/>
                <div className="user-body"/>
                <div className="button-container">
                    <img src={addPhoto} alt=""/>
                </div>
            </div>
        );
    }
}

export default UserAvatar;