import axios from 'axios';
import PropTypes from 'prop-types';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
})

const AxiosSecure = props => {
    return axiosInstance;
};

AxiosSecure.propTypes = {
    
};

export default AxiosSecure;