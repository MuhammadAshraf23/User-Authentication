import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./Firebase/firebase";

function Dashboard({ user, setUser }) {
  console.log("user=====-", user);
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
  const LogOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log("Error---", error);
      });
  };
  return (
    <div className="container">
      <div className="row justify-content-center mt-5 pt-5">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card">
            <div className="card-body">
              <h1 className="text-center mb-4">LogOut </h1>
              {user ? (
                <div>
                  <h3 className="text-success text-center">
                    <b className="text-primary">Welcome</b> <br /> {user.email}
                  </h3>
                  <button type="submit"  className="btn btn-primary btn-block mt-3 w-100" onClick={LogOut}>
                    LogOut
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <p>You are logged out</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
