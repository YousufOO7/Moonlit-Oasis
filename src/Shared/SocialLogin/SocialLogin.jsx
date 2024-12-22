import React from 'react';
import PropTypes from 'prop-types';
import { FcGoogle } from 'react-icons/fc';
import UseAuth from '../../Hooks/UseAuth';

const SocialLogin = props => {
    const {signInWithGoogle} = UseAuth();

    const handleGoogleLogIn = () => {
        signInWithGoogle()
        .then(result => {
            const user = result.user
            console.log(user)
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            <button onClick={handleGoogleLogIn}  className='btn w-5/6 flex mx-auto mt-3'> <FcGoogle className='text-2xl'></FcGoogle> Google</button>
            <div className="divider">OR</div>
        </div>
    );
};

SocialLogin.propTypes = {

};

export default SocialLogin;