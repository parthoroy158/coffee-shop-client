import React, { useContext } from 'react';
import { AuthContext } from '../Provider/Provider';
import { data, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SignIn = () => {
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSignin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: "Drag me!",
                    icon: "success",
                    draggable: true
                });
                // update last log in time
                const lastSignInTime = result.user.metadata?.lastSignInTime;
                const logInInfo = { lastSignInTime, email };

                fetch(`http://localhost:5000/newusers`, {
                    method: "PATCH",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(logInInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('Sign in info undated db', data)
                    })
                navigate('/')
            })
            .catch(error => {
                console.log(error, 'error')
            })
    }
    return (
        <div className="hero bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleSignin}>
                        <div className="form-control">
                            <p className='text-center font-bold'>Please input your Email and Password</p>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary w-full hover:bg-green-400" >Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;