import PropTypes from 'prop-types';
import Lottie from "lottie-react";
import RegisterLottie from '../../../assets/Lottie/register.json'
import { Link } from 'react-router-dom';
import SocialLogin from '../../../Shared/SocialLogin/SocialLogin';

const Register = props => {

    const handleRegister = e => {

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left md:w-[500px]">
                    <Lottie animationData={RegisterLottie}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="ml-8 mt-4 text-5xl font-bold">Register now!</h1>
                    <SocialLogin></SocialLogin>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoULR</span>
                            </label>
                            <input type="url" name='photo' placeholder="Enter Your Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn  bg-[#7F673A] text-white">Register</button>
                        </div>
                        <p className='text-center'>Already Have An Account ? <Link to="/signIn" className='text-red-500'>SignIn</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

Register.propTypes = {

};

export default Register;