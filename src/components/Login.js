import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import uniqid from 'uniqid';
import {format} from "date-fns";
//login page used to get a JWT used to make sure a user is logged in when they comment
const Login = (props) => {

    //our state is a record of the current username and password submitted via the form
    const [state, setState] = useState({
        username: '',
        password: '',
    })

    //useLocation to maintain a record of the post that prompted the user to login
    const location = useLocation();

    console.log(location);

    //useNavigate used to move back to the post upon successful login 
    const navigate = useNavigate();
    //handleChange used to maintain state of the text fields of the form 
    function handleChange(evt) {
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });
    }
    //handle submit makes a POST call to the API which sends the entered username and password
    function handleSubmit(event){
        event.preventDefault();
        fetch(`http://localhost:3000/login`, {method: 'post',
        dataType: 'json',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: state.username,
            password: state.password,
        })})
        .then((res)=>{
            //if successful then we will recieve a token back, so convert it to json
            return res.json()
        })
        .then((res) =>{
            //then place the token in localStorage 
            console.log(res);
            localStorage.setItem('token', JSON.stringify(res.token));
            console.log(localStorage.getItem('token'));
        })
        .catch((error) =>{
            if (error.response.status === 403){
                console.log("here!")
                //navigate('/');
                
            } else {
                navigate(`/post`,{
                state: {post: location.state.post,}
            })
            }
        });
        
        console.log(location.post)
        navigate(`/post`,{
            state: {post: location.state.post,}
        })

        
    }

    //simple JSX form used to get the information from the user. 
    //LOOK INTO TURNING BUTTON INTO INPUT???
    return(
        <div>
            <form onSubmit={handleSubmit}>
                    <label>Username:</label>
                    <input type='text' name='username' value={state.username} onChange={handleChange} />
                    <label>Password:</label>
                    <input type='text' name='password' value={state.password} onChange={handleChange} />
                    <button type='submit' value='Submit'>Submit</button> 
            </form>
        </div>
    )
}

export default Login