import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import uniqid from 'uniqid';
import {format} from "date-fns";

const Login = (props) => {

    
    const [state, setState] = useState({
        username: '',
        password: '',
    })

    const location = useLocation();

    console.log(location);

    const navigate = useNavigate();
    
    function handleChange(evt) {
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });
    }

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
            
            return res.json()
        })
        .then((res) =>{
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