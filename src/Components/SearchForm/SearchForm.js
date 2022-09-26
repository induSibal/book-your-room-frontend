import React,{useState} from "react";
import {Link} from 'react-router-dom';

function SearchForm(){

    const [emailAddress, setEmailAddress]=useState();
    const [password, setPassword]=useState();


    function setEmailAddressValue(event){
        const email =event.target.value;
        setEmailAddress(email);
    }

    function setPasswordValue(event){
        const pass =event.target.value;
        setPassword(pass);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
    }

    return (
            <form>
                <div className="form-outline mb-4">search form
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


export default SearchForm;