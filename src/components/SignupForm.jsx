import React, { useEffect } from "react";
import loginimg from "../assets/login_person.webp";
import "../styles/Login.css";
import { GrLock, GrMail, GrUser } from "react-icons/gr";
import { Link } from "react-router-dom";

const SignForm = () => {
  useEffect(() => window.scroll({ top: 0, behavior: "smooth" }), []);

  return (
    <section className="signup mt-8">
      <div className="container1 flex flex-wrap">
        <div className="signup-content">
          <div className="signup-form">
            <h2 className="form-title hh">Sign up</h2>
            <form method="POST" className="register-form" id="register-form">
              <div className="form-group">
                <label htmlFor="name">
                  <i className="zmdi zmdi-account material-icons-name">
                    <GrUser />{" "}
                  </i>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
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
              <div className="form-group">
                <label htmlFor="re-pass">
                  <i className="zmdi zmdi-lock-outline">
                    <GrLock />
                  </i>
                </label>
                <input
                  type="password"
                  name="re_pass"
                  id="re_pass"
                  placeholder="Repeat your password"
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
            <Link to="/login" className="signup-image-link">
              I am already member
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignForm;
