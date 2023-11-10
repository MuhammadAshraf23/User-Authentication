import React, { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import { Link, useNavigate } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const createAccount = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User---->", user);
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">Sign Up</h1>
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName"
                    aria-describedby="emailHelp"
                    placeholder="Enter name"
                  />
                </div>
                <div className="form-group my-2">
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
                  onClick={createAccount}
                >
                  Sign Up
                </button>
                <div className="form-group text-center pt-2">
                  <p>
                    {" "}
                    Already have an account ?<Link to={"/login"}>Login</Link>
                  </p>
                </div>
                <div className="form-group text-center">
                  <p>or</p>
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block w-100"
                    onClick={createAccount}
                  >
                    <BsFacebook className="mx-4" /> Login with Facebook
                  </button>
                  <button
                    type="submit"
                    className="btn btn-light btn-block mt-3 w-100"
                    onClick={createAccount}
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
export default SignUp;
