import React,{useState} from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import { useNavigate} from 'react-router-dom';

function Login(props){

    const [emailAddress, setEmailAddress]=useState('');
    const [password, setPassword]=useState('');
    const navigate = useNavigate();

    function setEmailAddressValue(event){
        setEmailAddress(event.target.value);
    }

    function setPasswordValue(event){
        setPassword(event.target.value);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
    }
    function loginUser(){
        const requestBody= {
            emailAddress: emailAddress,
            password: password
          }
        axios.post('http://localhost:3000/validateUser', requestBody)
        .then(function (response) {
            console.log('this is inside axios request'+response);
            console.log(response.data);
            console.log(response.data[0].firstName);
            if(response.data[0].userId!==null || response.data[0].userId!==''){
                props.handleAllStates(true, response.data[0].firstName, response.data[0].userId, response.data[0].isAdmin )}
                navigate('/');
            })
        .catch(function (error) {
            console.log('this is inside axios error' + error);
        });
    }
    return (
            <form>
                <div className="form-outline mb-4">
                    <label className="form-label" for="email" >Email address</label>
                    <input type="email" id="email" className="form-control" value={emailAddress} onChange={setEmailAddressValue}/>
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" for="Password" >Password</label>
                    <input type="password" id="Password" className="form-control" value={password} onChange={setPasswordValue} />
                </div>
                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                        <button type="button" className="btn btn-primary btn-block mb-4" onClick={loginUser} >Sign in</button>
                    </div>
                </div>
                <div className="text-center">
                    <p>Not a member? <a href="/Register">Register</a></p>
                </div>
            </form>


        // <div>
        // <form onsubmit={handleSubmit}>
        //     <label for="email1"> Email </label>
        //     <br/>
        //      <input placeholder="Enter your email Id" type="email" value={emailAddress} onChange={setEmailAddressValue} id="email1" />
        //     <label for="pwd1"> Password </label>
        //     <br/>
        //     <input placeholder="Enter your password"  type="password" value={password} onChange={setPasswordValue} id="pwd1"  />
        //     <br/>
        //     <button type="submit" >Login</button>
        // </form>
        //     <div>
        //         <h3> Don't have an account? <Link to="/Register"> Register Now </Link> </h3>
        //     </div>
        // </div>
    )
};


export default Login;