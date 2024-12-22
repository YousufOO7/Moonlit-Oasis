import PropTypes from 'prop-types';
import Banner from '../Banner/Banner';
import LocationOfHotel from '../LocationOfHotel/LocationOfHotel';
import StayMemorable from '../StayMemorable/StayMemorable';
import Services from '../Services/Services';
import TopRatedRooms from '../TopRatedRooms/TopRatedRooms';

const Home = props => {
    return (
        <div>
            <header>
                <Banner></Banner>
            </header>

            <main>
                <LocationOfHotel></LocationOfHotel>
                <section>
                    <TopRatedRooms></TopRatedRooms>
                </section>
                <StayMemorable></StayMemorable>
                <Services></Services>
            </main>
        </div>
    );
};

Home.propTypes = {

};

export default Home;