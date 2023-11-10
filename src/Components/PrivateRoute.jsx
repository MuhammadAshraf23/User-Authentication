import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ user, children }) => {
  if (user) {
    return children;
  } else {
   Swal.fire("Please Login");
   Swal.fire({
      title: "Do you want to Login?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "yes",
      denyButtonText: `Not`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Now You are Login");
      } else if (result.isDenied) {
        Swal.fire("Go To Home page");
      }
    });
    // Show a confirmation dialog
    const shouldLogin = window.confirm("Do you want to log in?");
    
    // If the user confirms, navigate to the login page; otherwise, stay on the current page
    return shouldLogin ? <Navigate to={'/login'} /> :<Navigate to={'/'} /> ;
  }
};

export default PrivateRoute;
