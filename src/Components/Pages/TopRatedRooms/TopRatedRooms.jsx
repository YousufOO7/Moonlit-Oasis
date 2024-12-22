import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AxiosSecure from '../../../Hooks/AxiosSecure';
import TopRoomsCard from '../TopRoomsCard/TopRoomsCard';

const TopRatedRooms = props => {
    const [rooms, setRooms] = useState([]);
    const axiosSecure = AxiosSecure();

    useEffect(() => {
        axiosSecure.get('/rooms')
        .then(res => setRooms(res.data.slice(0, 6)))

    }, [])

    return (
        <div>
           <h1 className="text-4xl text-center font-bold my-5">
           Showing Luxury Rooms</h1>
           <p className="text-center font-thin w-4/6 mx-auto">Stay in a cheerful, harmonious environment with elegant spaces. Enjoy modern amenities that inspire relaxation and seamless living.</p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-10 max-w-6xl mx-auto px-5'>
            {
                rooms.map(room => 
                <TopRoomsCard 
                key={room._id}
                room = {room}
                ></TopRoomsCard>)
            }
        </div>

        </div>
    );
};

TopRatedRooms.propTypes = {
    
};

export default TopRatedRooms;