import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const TopRoomsCard = ({ room }) => {
    const { image, description, price, title, features, _id} = room;
    console.log(room)
    return (
        <div>
            <div className="card card-compact bg-base-100  shadow-xl">
                <figure>
                    <img
                        className='w-full bg-cover h-[200px]'
                        src={image}
                        alt="rooms" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{title}</h2>
                    <p>{description.slice(0, 90)}...</p>
                    <p><b>Price:</b> {price}</p>
                    <p className="font-semibold mt-3 text-xl">Features:</p>
                    <div className='flex gap-2 flex-wrap'>
                        {
                            features.map((skill, idx) => <p
                                key={idx}
                                className='border rounded-md text-center px-2 hover:text-white hover:bg-blue-400'
                            >{skill}</p>)
                        }
                    </div>
                    <div className="mt-3">
                        <Link to={`/room/${_id}`}><button className="btn w-full bg-[#7F673A] text-white">Book Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

TopRoomsCard.propTypes = {

};

export default TopRoomsCard;