import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import Aos from 'aos';

const TopRoomsCard = ({ room }) => {
    const { image, description, price, title, features, _id, reviews, room_state } = room;

    // Calculate the average rating
    const averageRating = reviews?.length
        ? (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1)
        : 0;


    Aos.init({
        duration: 1000,
        once: true,
    });

    return (
        <div>
            <div
                key={_id}
                data-aos="fade-up"
                className="card card-compact bg-base-100  dark:border-b hover:shadow-xl dark:bg-black dark:text-white">
                <figure>
                    <img
                        className="w-full bg-cover h-[200px] transition-transform duration-700 ease-in-out hover:scale-110 border-b"
                        src={image}
                        alt="rooms"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{title}</h2>
                    <p>{description.slice(0, 90)}...</p>
                    <div className='flex justify-between'>
                        <div>
                            <p><b>Price:</b></p>
                        </div>
                        <div>
                            <p><b>{price}</b></p>
                        </div>
                    </div>

                    {/* Rating */}
                    <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center">
                            <p className='pr-3'><b>Rating:</b></p>
                        </div>
                        <span className="ml-2 text-gray-700 flex items-center gap-1 dark:text-white">
                            {/* Display rating stars */}
                            {[1, 2, 3, 4, 5].map((star) => (
                                <FaStar
                                    key={star}
                                    className={` ${star <= averageRating ? 'text-yellow-500' : 'text-gray-300'
                                        }`}
                                />
                            ))}
                            {averageRating} / 5</span>
                    </div>

                    {/* Features */}
                    {/* <p className="font-semibold mt-3">Features:</p> */}
                    <div className="flex gap-2 flex-wrap">
                        {features.map((feature, idx) => (
                            <p
                                key={idx}
                                className="border rounded-md text-center px-2 hover:text-white hover:bg-blue-400"
                            >
                                {feature}
                            </p>
                        ))}
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <b>Room Status:</b>{" "}
                        </div>
                        <div className={`badge ${room_state === "Available" ? "bg-green-500 dark:text-white dark:text-opacity-80" : "bg-red-500 text-white dark:text-white dark:text-opacity-80"
                            }`}>{room_state}</div>
                    </div>

                    {/* Book Now Button */}
                    <div className="mt-3">
                        <Link to={`/room/${_id}`}>
                            <button className="btn w-full bg-[#7F673A] text-white">Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

TopRoomsCard.propTypes = {
    room: PropTypes.object.isRequired,
};

export default TopRoomsCard;
