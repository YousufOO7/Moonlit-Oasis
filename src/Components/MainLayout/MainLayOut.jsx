import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';

const MainLayOut = props => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

MainLayOut.propTypes = {
    
};

export default MainLayOut;