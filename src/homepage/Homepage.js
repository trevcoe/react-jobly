import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import UserContext from "../auth/UserContext";

// Homepage of site

function Homepage(){
    const { currentUser } = useContext(UserContext);
    console.debug("Homepage", "currentUser=", currentUser);

    return (
        <div className="Homepage">
            <div className="container text-center">
                <h1 className="mb-4 font-weight-bold">JoblyApi</h1>
                <p className="lead">
                All the jobs, one convinient place.
                </p>
                {currentUser ? <h2>
                    Welcome Back, {currentUser.firstname || currentUser.username}!
                </h2>
                : (
                    <p>
                        <Link className="btn btn-primary font-weight-bold mr-3"
                        to="/signup">
                        Sign up</Link>
                    </p>
                )}
            </div>
        </div>
    )
}
export default Homepage;
  