import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const LogIn = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState }
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: '',
      password: '',
    });
  };

  const ProfilePage = () => {
    const history = useHistory();
    history.push('/profile');
  }

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
                    style={{ "borderRadius": "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center" style={{ "backgroundColor": "#647BD1" }}>
                  <div className="card-body p-4 p-lg-5 text-black">
                    {data ? (
                      ProfilePage()
                    ) : (
                      <form onSubmit={handleFormSubmit}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <span className="h1 fw-bold mb-0">Trip Ready</span>
                        </div>
                        <h5 className="fw-normal mb-3 pb-3" style={{ "letterSpacing": "1px" }}>Sign into your account</h5>
                        <div className="form-outline mb-4">
                          <input name="email" type="email" id="form2Example17" className="form-control form-control-lg" placeholder="Your email" value={formState.email} onChange={handleChange} />
                        </div>
                        <div className="form-outline mb-4">
                          <input name="password" type="password" id="form2Example27" className="form-control form-control-lg" placeholder="******" value={formState.password} onChange={handleChange} />
                        </div>
                        <div className="pt-1 mb-4">
                          <button className="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                        </div>
                      </form>
                    )}
                    
                    {error && (
                      <div classNameName="my-3 p-3 bg-danger text-white">
                        {error.message}
                      </div>
                    )}

                    <a className="small" href="#!" style={{ "color": "#BCBCBC" }}>Forgot password?</a>
                    <p className="mb-5 pb-lg-2" style={{ "color": "#393f81" }}>Don't have an account? <Link style={{ "color": "#393f81" }} to="signup">Register here</Link></p>
                    <a href="#!" className="small" style={{ "color": "#BCBCBC", "marginRight": "30px" }}>Terms of use.</a>
                    <a href="#!" className="small" style={{ "color": "#BCBCBC" }}>Privacy policy</a> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogIn;