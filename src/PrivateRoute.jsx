// PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ user, children }) => {
   if(user){
    return children
   }else{
    return <Navigate to={'/login'}/> 
   }
};

export default PrivateRoute;
