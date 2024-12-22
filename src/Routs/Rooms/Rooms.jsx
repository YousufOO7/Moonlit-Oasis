import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import AxiosSecure from '../../Hooks/AxiosSecure';
import { Link } from 'react-router-dom';

const Rooms = props => {
    const [rooms, setRooms] = useState([]);
    const axiosSecure = AxiosSecure();

    useEffect(() => {
        axiosSecure.get('/rooms')
            .then(res => setRooms(res.data))

    }, [])
    return (
        <div>
            <h1 className="text-4xl text-center font-bold my-5">
                All Rooms</h1>

            <Link>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-10 max-w-6xl mx-auto px-5'>
                    {
                        rooms.map(room => <div key={room._id} className="card card-compact bg-base-100  shadow-xl">
                            <figure>
                                <img
                                    className='w-full bg-cover h-[200px]'
                                    src={room.image}
                                    alt="rooms" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl">{room.title}</h2>
                                <p><b>Price:</b> {room.price}</p>
                                <div className=" mt-3">
                                    <div><Link ><b>Review:</b> {room.review_count}</Link></div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </Link>

        </div>
    );
};

Rooms.propTypes = {

};

export default Rooms;