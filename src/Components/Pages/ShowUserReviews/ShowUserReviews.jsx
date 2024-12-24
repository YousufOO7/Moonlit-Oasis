import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import AxiosSecure from '../../../Hooks/AxiosSecure';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ShowUserReviews = props => {
    const [allReviews, setAllReviews] = useState([]);
    const axiosSecure = AxiosSecure();

    const fetchAllReviews = () => {
        axiosSecure
            .get(`/reviews`)
            .then((res) => setAllReviews(res.data));
    };

    useEffect(() => {
        fetchAllReviews();
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold text-center my-3">User Reviews</h2>
            <div className="max-w-4xl mx-auto my-8">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {allReviews?.map((review, index) => (
                    <SwiperSlide key={index}>
                        <div className="p-6 bg-white rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-semibold mb-2">{review.userName}</h3>
                            <p className="text-gray-600 italic mb-4">"{review.comment}"</p>
                            <p className="text-yellow-500 font-bold mb-4">Rating: {review.rating} / 5</p>
                            <p className="text-gray-400 text-sm">{new Date(review.timestamp).toLocaleString()}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        </div>
    );
};

ShowUserReviews.propTypes = {
    
};

export default ShowUserReviews;