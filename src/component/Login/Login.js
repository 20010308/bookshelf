import React from 'react';
import './Login.scss';
import {useFormik} from "formik";
import {postLogin} from "../../redux/reducer/loginReducer";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom"

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            key: "",
            secret: ""
        },
        onSubmit: (values) => {
            console.log(values);
            dispatch(postLogin({values, navigate}))
        }
    });

    return (
        <div className="vh-100 w-100 d-flex justify-content-center align-items-center">
            <div className="border p-3 w-25">
                <form onSubmit={formik.handleSubmit}>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        required={true}
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        className="form-control mt-3 mb-3"
                        placeholder="Name"
                    />
                    <input
                        id="email"
                        type="email"
                        name="email"
                        required={true}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        className="form-control mb-3"
                        placeholder="E-mail"
                    />
                    <input
                        id="key"
                        type="text"
                        name="key"
                        required={true}
                        value={formik.values.key}
                        onChange={formik.handleChange}
                        className="form-control mb-3"
                        placeholder="Login"
                    />
                    <input
                        id="secret"
                        type="password"
                        name="secret"
                        required={true}
                        value={formik.values.secret}
                        onChange={formik.handleChange}
                        className="form-control mb-3"
                        placeholder="Password"
                    />
                    <div className="d-flex justify-content-end">
                        <button
                            className="px-3 btn btn-success mb-2"
                            type="submit"
                            onSubmit={formik.handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;