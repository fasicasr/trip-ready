import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
    const [formState, setFormState] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
    });
    const [addUser, { error, data }] = useMutation(ADD_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await addUser({
                variables: { ...formState },
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ "borderRadius": "1rem" }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block" style={{ "backgroundColor": "#000000", "borderRadius": "1rem 0 0 1rem" }}>
                                    <img
                                        src="/logo.png"
                                        alt="login form"
                                        className="img-fluid" style={{ "borderRadius": "1rem 0 0 1rem" }}
                                    />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center" style={{ "backgroundColor": "#647BD1" }}>
                                    <div className="card-body p-4 p-lg-5 text-black">
                                        {data ? (
                                            <p>Logging in to {' '}
                                                <Link to="/profile">profile page...</Link>
                                            </p>
                                        ) : (
                                            <form onSubmit={handleFormSubmit}>
                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <span className="h1 fw-bold mb-0">Trip Ready</span>
                                                </div>
                                                <h5 className="fw-normal mb-3 pb-3" style={{ "letterSpacing": "1px" }}>Register new account</h5>
                                                <div className="form-outline mb-4">
                                                    <input name="email" type="email" id="email" className="form-control form-control-lg" placeholder="Your email" value={formState.email} onChange={handleChange} />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input name="firstName" type="text" id="firstname" className="form-control form-control-lg" placeholder="First name" value={formState.firstName} onChange={handleChange} />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input name="lastName" type="text" id="lastname" className="form-control form-control-lg" placeholder="Last name" value={formState.lastName} onChange={handleChange} />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input name="password" type="password" id="password" className="form-control form-control-lg" placeholder="password" value={formState.password} onChange={handleChange} />
                                                </div>
                                                <div className="pt-1 mb-4">
                                                    <button className="btn btn-dark btn-lg btn-block" type="submit">Sign Up</button>
                                                </div>
                                            </form>
                                        )}

                                        {error && (
                                            <div className="my-3 p-3 bg-danger text-white">
                                                {error.message}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;
