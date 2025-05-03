import React, { useContext } from 'react';
import { AuthContext } from '../Provider/Provider';
import { data, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';



const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        createUser(email, password)
            // This is the firebase options
            .then(result => {
                console.log(result.user)
                // here the mongodb works
                const createTime = result.user.metadata.creationTime
                const newMongoDb = { email, createTime }
                console.log(createTime, newMongoDb)

                fetch('http://localhost:5000/newusers', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newMongoDb)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.insertedId) {
                            Swal.fire({
                                title: "Successfully Sign UP",
                                icon: "success",
                                draggable: true
                            });
                            navigate('/')

                        }
                    })

            })
            .catch(error => {
                console.log(error, "error")
            })
    }

    return (
        <div className="hero bg-base-200 ">

            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <p className='text-center font-bold'>Please Create Your Account</p>
                        <div className="form-control">
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
                            <button className="btn btn-primary w-full hover:bg-cyan-700">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;