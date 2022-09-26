import React from 'react';
import Login from './Components/Login/Login';
import {Outlet, Navigate} from 'react-router';

const useAuth=() => {
const user={loggenIn: false};
return user && user.loggenIn;
};

function ProtectedRoutes()
{
    const isAuth=useAuth();
    return (
    <div>
     {isAuth ? <Outlet /> : <Navigate to="/" />} 
    </div>
    )
};

export default ProtectedRoutes;