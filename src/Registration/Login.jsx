import React, { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged, signInWithPopup 
} from "firebase/auth";
import { auth,provider } from "../Firebase/firebase";
import { Link, useNavigate } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

function Login({setUser}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const SignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         // The signed-in user info.
        const signedInUser = userCredential.user; 
          setUser(signedInUser);
          Swal.fire({
            title: "You are Login",
            icon: "success"
          });
         
          navigate("/dashboard");
      })
      .catch((error) => {
        console.log("Error---->", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please enter the Correct Email/Password",
         
        });
      });
  };

  const signInWithGoogle = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
      // The signed-in user info.
        const user = result.user;
        setUser(user);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Error---->",error);
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card">
            <div className="card-body">
              <h1 className="text-center mb-4">Login </h1>
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block mt-3 w-100"
                  onClick={SignIn}
                >
                  Login
                </button>
                <div className="form-group text-center pt-2">
                  <p>
                    Don't have an account ?<Link to={"/signup"}>SignUp</Link>
                  </p>
                </div>
                <div className="form-group text-center">
                  <p>or</p>
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block w-100"
                  
                  >
                    <BsFacebook className="mx-4" /> Login with Facebook
                  </button>
                  <button
                    type="submit"
                    className="btn btn-light btn-block mt-3 w-100"
                    onClick={signInWithGoogle}
                  >
                    <FcGoogle className="mx-4" /> Login with google
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
