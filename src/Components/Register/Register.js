import React, { useState } from "react";
import axios from "axios";
import { useNavigate} from 'react-router-dom';

function Register(){

    const [firstName, setFirstName]=useState('');
    const [lastName, setLastName]=useState('');
    const [phone, setPhone]=useState('');
    const [emailAddress, setEmailAddress]=useState('');
    const [password, setPassword]=useState('');
    const navigate = useNavigate();

    function setFirstNameValue(event){
        const fName =event.target.value;
        setFirstName(fName);
    }
    function setLastNameValue(event){
        const lName =event.target.value;
        setLastName(lName);
    }
    function setPhoneValue(event){
        const ph =event.target.value;
        setPhone(ph);
    }
    function setEmailAddressValue(event){
        const email =event.target.value;
        setEmailAddress(email);
    }
    function setPasswordValue(event){
        const pass =event.target.value;
        setPassword(pass);
    }

    function handleSubmit(event){
        event.preventDefault();
       
          if(firstName !== '' && lastName !== '' && phone !== '' && emailAddress !== '' && password !== ''){
            let config = {
                headers: {
                  "Content-Type": "application/json",
                  'Access-Control-Allow-Origin': '*',
                  }
                }
            const request= {
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                email: emailAddress,
                pass: password
              }
            axios.post('http://localhost:3000/updateUsers', request, config)
            .then(function (response) {
                console.log('this is inside axios request'+response);
                alert(emailAddress + " have been Registerd successfully");
                navigate('/Login');
            })
            .catch(function (error) {
                console.log('this is inside axios error' + error);
            });
        }
        else
        alert("Please fill in all the fields");

    }
    return (

                <form>
                    <div className="form-outline mb-4">
                        <label className="form-label">First name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="First name"
                            value={firstName} 
                            onChange={setFirstNameValue}/>
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label">Last name</label>
                        <input type="text" 
                        className="form-control" 
                        placeholder="Last name" 
                        value={lastName} 
                        onChange={setLastNameValue}/>
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label">Phone Number</label>
                        <input
                            type="phone"
                            className="form-control"
                            placeholder="Enter Phone Number"
                            value={phone} 
                            onChange={setPhoneValue}
                        />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            value={emailAddress} 
                            onChange={setEmailAddressValue}
                        />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            value={password} 
                            onChange={setPasswordValue}
                        />
                    </div>
                    <div className="row mb-4">
                        <div className="col d-flex justify-content-center">
                            <button type="button" 
                            className="btn btn-primary btn-block mb-4"  
                            onClick={handleSubmit}>Register</button>
                        </div>
                    </div>
                    <div className="text-center">
                        <p>Already Registerd ?<a href="/Login"> Login</a></p>
                    </div>
                </form>

                /* <form>
                        <label for="firstName"> First Name </label>
                        <input id="firstName" placeholder="Enter your First Name" type="text" value={firstName} onChange={setFirstNameValue}/>
                        <br/>
                        <label for="lastName"> Last Name </label>
                        <input id="lastName" placeholder="Enter your Last Name"  type="text" value={lastName} onChange={setLastNameValue}   />            
                        <br/>
                        <label for="phone"> Phone </label>
                        <input id="phone" placeholder="Enter your Phone Number"  type="text" value={phone} onChange={setPhoneValue}   />
                        <br/>
                        <label for="emailAddress"> Email Address </label>
                        <input id="emailAddress" placeholder="Enter your Email Address"  type="text" value={emailAddress} onChange={setEmailAddressValue}   />        
                        <br/>
                        <label for="password"> Password </label>
                        <input id="password" placeholder="Enter your Password"  type="password" value={password} onChange={setPasswordValue}   />                                
                        <br/>
                        <button onClick={handleSubmit} type="submit" >Register</button>
                </form> */
    )};


export default Register;