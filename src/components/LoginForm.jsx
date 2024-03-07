import React, { useEffect } from "react";
import loginimg from "../assets/login_person.webp";
import "../styles/Login.css";
import { GrLock, GrMail } from "react-icons/gr";
import { Link } from "react-router-dom";

const LoginForm = () => {
  useEffect(() => window.scroll({ top: 0, behavior: "smooth" }), []);
  return (
    <section className="signup mt-8">
      <div className="container1">
        <div className="signup-content">
          <div className="signup-form">
            <h2 className="form-title hh">Sign In</h2>
            <form method="POST" className="register-form" id="register-form">
              <div className="form-group">
                <label htmlFor="email">
                  <i className="zmdi zmdi-email">
                    {" "}
                    <GrMail />
                  </i>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="pass">
                  <i className="zmdi zmdi-lock">
                    <GrLock />{" "}
                  </i>
                </label>
                <input
                  type="password"
                  name="pass"
                  id="pass"
                  placeholder="Password"
                />
              </div>

              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className="form-submit"
                  value="Register"
                />
              </div>
            </form>
          </div>
          <div className="signup-image">
            <figure>
              <img src={loginimg} alt="sing up image" />
            </figure>
            <Link to="/signup" className="signup-image-link">
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
