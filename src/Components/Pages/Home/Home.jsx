import PropTypes from 'prop-types';
import Banner from '../Banner/Banner';
import LocationOfHotel from '../LocationOfHotel/LocationOfHotel';
import StayMemorable from '../StayMemorable/StayMemorable';

const Home = props => {
    return (
        <div>
            <header>
                <Banner></Banner>
                <LocationOfHotel></LocationOfHotel>
                <StayMemorable></StayMemorable>
            </header>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;