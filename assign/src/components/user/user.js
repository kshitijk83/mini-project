import React from 'react';
import './user.scss';

const user = (props) => {
    console.log(props);
    return (
        <div className="user">
            <div className="user-img">
                <img className="img" src={props.user.img} alt="user"/>
            </div>
            <div className="user-right">
            <div className="user-right-frd">
                <div className="user-right-frd-bio">
                    <span>Bio:</span> {props.user.bio}
                </div>
                <div className="user-right-frd-name">
                    <span>Name:</span> {props.user.name}
                </div>
                <div className="user-right-frd-location">
                    <span>Location:</span> {props.user.location}
                </div>
                <div className="half user-right-frd-followers">
                    <span>Followers:</span> {props.user.followers}
                </div>
                <div className="half user-right-frd-following">
                    <span>Following:</span> {props.user.following}
                </div>
                <div className="half user-right-repos">
                    <span>No. of repos:</span> {props.user.repos}
                </div>
            </div>
            </div>
        </div>
    );
}

export default user;