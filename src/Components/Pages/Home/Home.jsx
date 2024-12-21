import PropTypes from 'prop-types';
import Banner from '../Banner/Banner';
import LocationOfHotel from '../LocationOfHotel/LocationOfHotel';

const Home = props => {
    return (
        <div>
            <header>
                <Banner></Banner>
                <LocationOfHotel></LocationOfHotel>
            </header>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;