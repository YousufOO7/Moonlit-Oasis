import PropTypes from 'prop-types';
import Banner from '../Banner/Banner';
import LocationOfHotel from '../LocationOfHotel/LocationOfHotel';
import StayMemorable from '../StayMemorable/StayMemorable';
import Services from '../Services/Services';

const Home = props => {
    return (
        <div>
            <header>
                <Banner></Banner>
            </header>

            <main>
                <LocationOfHotel></LocationOfHotel>
                <StayMemorable></StayMemorable>
                <Services></Services>
            </main>
        </div>
    );
};

Home.propTypes = {

};

export default Home;