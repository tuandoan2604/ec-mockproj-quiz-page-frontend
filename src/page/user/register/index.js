import React from "react";
import {Formik,Form, Field, ErrorMessage} from "formik";
import axios from 'axios'
import {Link} from 'react-router-dom'
import request from "../../../utils/auth";
import "./register.css"

function RegisterForm () {
    function onSubmit (values) {
        //form is valid
        console.log(values)
        request
            .post('auth/register', {
                    username: values.username,
                    password: values.password,
                    email: values.email,
            })
            .then((res) => {
                console.log("resolve" + res)
            })
            .catch((res) => {
                console.log("reject" + res)
            })
    }




    function validateUsername (value) {
        let error;
        if (!value) {
            error = "* Username is required";
        } else if (!/^[a-zA-Z0-9]([._](?![._])|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/i.test(value)) {

            error = "Invalid email address format";
        }

        return error;
    }
    function validateEmail (value) {
        let error;
        if (!value) {
            error = "* Email is required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = "Invalid email address format";
        }

        return error;
    }
    function validatePassword (value) {
        let error;
        if (!value) {
            error = "* Password is required";
        } else if (value.length < 8) {
            error = "Password must be 8 characters at minimum";
        }

        return error;
    }
    function validatePolicy (value){
        let error
        if(!value){
            error ="* You have not accepted our Private policy";
        }
        return error;
    }
    return (
        <section className="section">
            <h1 className="h1">
                Create your account
            </h1>
            <button className="social-login"><i className="fa-brands fa-facebook-f icon"/>Continue with Facebook</button>
            <button className="social-login"><i className="fa-brands fa-google icon"/>Continue with Google</button>
            <h2 className="register-h2">OR LOG IN WITH EMAIL</h2>
            <Formik
                initialValues={{
                    username: "",
                    email: "",
                    password: "",
                    toggle: false,
                }}
                onSubmit={onSubmit}>
                {({errors, touched})=> (
                    <Form className="form-container">
                        <div className="form-group">
                            <Field
                                name="username"
                                placeholder="Username"
                                style={{fontStyle: "italic"}}
                                className={`form-control ${
                                    touched.username && errors.username ? "is-invalid":""}`}
                                validate={validateUsername()}
                            />
                            <ErrorMessage
                                component="div"
                                name="username"
                                className="invalid-feedback"
                            />
                        </div>
                        <div className="form-group">
                            <Field
                                name="email"
                                placeholder="Email"
                                style={{fontStyle: "italic"}}
                                className={`form-control ${
                                    touched.email && errors.email ? "is-invalid":""}`}
                                validate={validateEmail}
                            />
                            <ErrorMessage
                                component="div"
                                name="email"
                                className="invalid-feedback"
                            />
                        </div>
                        <div className="form-group">
                            <Field
                                name="password"
                                type="password"
                                placeholder="Password"
                                style={{fontStyle: "italic"}}
                                className={`form-control ${
                                    touched.password && errors.password ? "is-invalid":""}`}
                                validate={validatePassword}
                            />
                            <ErrorMessage
                                component="div"
                                name="password"
                                className="invalid-feedback"
                            />
                        </div>
                        <label className="checkbox-label">
                            I have read the <span style={{color:"blue"}}> Private policy</span>
                            <Field
                                type="checkbox"
                                name="toggle"
                                className={`checkbox ${
                                    touched.toggle && errors.toggle ? "is-invalid":""}`}
                                validate={validatePolicy}
                            />
                            <ErrorMessage
                                component="div"
                                name="toggle"
                                className="invalid-feedback"
                                style={{fontSize: 16}}
                            />
                        </label>

                        <button
                            className="btn"
                            type="submit"
                            onMouseDown={(event)=>{
                                event.target.style.transition="150ms linear";
                                event.target.style.backgroundColor= "#2f27e8"
                                event.target.style.color="#ffffff"}
                            }
                            onMouseUp={(event)=> {
                                event.target.style.transition="150ms linear";
                                event.target.style.backgroundColor= "white"
                                event.target.style.color="#000000"}}
                        >GET STARTED</button>
                    </Form>
                )}
            </Formik>
            <p className="p">ALREADY HAVE AN ACCOUNT? <Link to="/login" className="link">LOG IN</Link></p>
        </section>
    )
}

export default RegisterForm
