import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import uniqid from 'uniqid';
import {format} from "date-fns";

const CreateUserForm = () =>{


    const [state, setState] = useState({
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        confirmpassword: '',
    });

    const navigate = useNavigate();
    const location = useLocation();

    function handleChange(event){
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value
        });
    }

    function handleSubmit(event){
        event.preventDefault();

        fetch('http://localhost:3000/new-user', {
            method: 'post',
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname: state.firstname,
                lastname: state.lastname,
                username: state.username,
                password: state.password,
                confirmpassword: state.confirmpassword
            })
        }).then((res)=>{
            return res.json();
        }).then((res)=>{
            console.log(res);
        }).catch((error)=>{
            navigate('/login', {
                state: {post: location.state.post},
            });

        })
    }

    //simple JSX form used to get the information to create user objects for the database. 
    return(
        <div>
            <form onSubmit={handleSubmit}>
                    <label>First Name:</label>
                    <input type='text' name='firstname' value={state.firstname} onChange={handleChange} />
                    <label>Last Name:</label>
                    <input type='text' name='lastname' value={state.lastname} onChange={handleChange} />
                    <label>Username:</label>
                    <input type='text' name='username' value={state.username} onChange={handleChange} />
                    <label>Password:</label>
                    <input type='text' name='password' value={state.password} onChange={handleChange} />
                    <label>Confirm Password:</label>
                    <input type='text' name='confirmpassword' value={state.confirmPassword} onChange={handleChange} />
                    <button type='submit' value='Submit'>Submit</button> 
            </form>
            <h3 id='errorHeader'></h3>
        </div>
    )
}

export default CreateUserForm;