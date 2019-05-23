import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './assign1.scss';
import User from '../user/user';

const Assign1=()=>{

    const [user, usersReq] = useState({});
    const [input, inputChange] = useState('kshitijk83');

    const onChangeHandler = (event)=>{
        inputChange(event.target.value);
    }

    const getUser=(event)=>{
        event.preventDefault();
        const userData={};
        axios.get(`https://api.github.com/users/${input}`)
        .then((res)=>{
            inputChange('');
            // console.log(res);
            userData.img = res.data.avatar_url;
            userData.name = res.data.login;
            userData.followers = res.data.followers;
            userData.following = res.data.following;
            userData.repos = res.data.public_repos;
            userData.location = res.data.location;
            userData.bio = res.data.bio;
            usersReq(userData);
            // axios.get(`https://api.github.com/users/${input}/followers`)
            // .then((res)=>{
            //     // console.log(res);
            //     userData.followers=res.data.length;
            // })
            // axios.get(`https://api.github.com/users/${input}/following`)
            // .then((res)=>{
            //     // console.log(res);
            //     userData.following=res.data.length;
            //     usersReq(userData);
            // })
        })
        .catch((err)=>{
            inputChange('');
            alert('User Not Found');
        })
    }

    useEffect(()=>{

    })

    return (
        <div className="assign1">
            <form className="form">
                <input className="form-input" type="text" value={input} onChange={onChangeHandler} />
                <button className="form-btn" onClick={getUser}>Submit</button>
            </form>

            {user.img?<User user={user} />:null}
            {/* <User user={user} /> */}
        </div>
    );
}

export default Assign1;