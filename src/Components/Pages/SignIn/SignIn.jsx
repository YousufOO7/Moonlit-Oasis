import Lottie from 'lottie-react';
import PropTypes from 'prop-types';
import SigInLottie from '../../../assets/Lottie/signIn.json'
import SocialLogin from '../../../Shared/SocialLogin/SocialLogin';
import { Link } from 'react-router-dom';

const SignIn = props => {

    const handleSignIn = e => {
    }

    return (
        <div className="hero bg-[#FAF5E8] min-h-screen mt-3">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left md:w-[500px]">
                    <Lottie animationData={SigInLottie}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="ml-8 mt-4 text-5xl font-bold">Sign In now!</h1>
                    <SocialLogin></SocialLogin>
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn  bg-[#7F673A] text-white">SignIn</button>
                        </div>
                    <p className='text-center'>Dont’t Have An Account ? <Link to="/register" className='text-red-500'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

SignIn.propTypes = {

};

export default SignIn;