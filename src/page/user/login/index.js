import React, {useState} from "react";
import {Formik,Form, Field, ErrorMessage} from "formik";
import "./login.css"
import request from "../../../utils/auth";
import {useDispatch, useSelector} from "react-redux";
import {userLogin, selectUser} from "../../../reducers/user";
import {Link, useNavigate} from "react-router-dom";
import LoadingComponent from "../../../component/loading";

function LoginForm () {

    const user = useSelector(selectUser)
    const [isLoading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [error, setError] = useState()
    function onSubmit (values) {
        setLoading(true)
        request
            .post(`auth/login`,{
                    username: values.username,
                    password: values.password
            })

            .then( (res) => {
                    dispatch(
                        userLogin({
                            user: res.data.user,
                            tokens: res.data.tokens
                        }))
                setLoading(false)
                navigate("/profile")
            })
            .catch((res) => {
                setLoading(false)
                if(res.response.status === 401)
                    setError('*Incorrect username or password')
            })
        }
    function validateUsername (value) {
        let error;
        if (!value) {
            error = "* Username is required";
        }
        return error;
    }
    function validatePassword (value) {
        let error;
        if (!value) {
            error = "* Password is required";
        } else if (value.length < 3) {
            error = "Password must be 3 characters at minimum";
        }
        return error;
    }

    return (
        <>
            {!user &&
                <div className="section">
                    <h1 className="h1">
                        Welcome Back!
                    </h1>
                    <button className="social-login"><i className="fa-brands fa-facebook-f icon"/>Continue with Facebook
                    </button>
                    <button className="social-login"><i className="fa-brands fa-google icon"/>Continue with Google
                    </button>
                    <h2 className="h2">OR LOG IN WITH EMAIL</h2>
                    {error && <p className="invalid-feedback"
                                 style={{
                                    marginTop: 10
                                    }}
                    >
                        {error}
                    </p> }
                    <Formik
                        initialValues={{
                            username: "",
                            password: ""
                        }}
                        onSubmit={onSubmit}>
                        {({errors, touched}) => (
                            <Form className="form-container">
                                <div className="form-group">
                                    <Field
                                        name="username"
                                        placeholder="Username"
                                        style={{fontStyle: "italic"}}
                                        className={`form-control ${
                                            touched.username && errors.username ? "is-invalid" : ""}`}
                                        validate={validateUsername}
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="username"
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
                                            touched.password && errors.password ? "is-invalid" : ""}`}
                                        validate={validatePassword}
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="password"
                                        className="invalid-feedback"
                                    />
                                </div>
                                <button
                                    className="btn"
                                    type="submit"
                                    onSubmit={(e) => e.preventDefault()}
                                    onMouseDown={(event) => {
                                        event.target.style.transition = "150ms linear";
                                        event.target.style.backgroundColor = "#2f27e8"
                                        event.target.style.color = "#ffffff"
                                    }
                                    }
                                    onMouseUp={(event) => {
                                        event.target.style.transition = "150ms linear";
                                        event.target.style.backgroundColor = "white"
                                        event.target.style.color = "#000000"
                                    }}
                                    disabled={isLoading}
                                >{
                                    (isLoading && <LoadingComponent size={30} border={5}/>) || "LOG IN"

                                }
                                </button>
                            </Form>
                        )}
                    </Formik>
                    <p className="p">DON'T HAVE AN ACCOUNT? <Link to="/register" className="link">SIGN UP</Link></p>
                </div>
            }</>
    )
}

export default LoginForm;