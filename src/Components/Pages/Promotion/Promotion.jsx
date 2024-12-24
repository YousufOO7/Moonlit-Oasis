import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const promotions = [
  {
    "id": 1,
    "title": "70% Off on Beachfront Rooms - Limited Time Offer!",
    "description": "Book a luxurious beachfront room at an unbeatable price! Enjoy a relaxing stay with spectacular views.",
    "imageUrl": "https://www.sandals.com/blog/content/images/2021/07/Oceanview-Room.jpg",
  },
  {
    "id": 2,
    "title": "70% Off on Mountain View Rooms - Escape to Nature!",
    "description": "Reconnect with nature in our scenic mountain view rooms. Hurry, the offer lasts only until the end of the month!",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkp6YIpCqFi79X0jIgOpVU-XMfH9s2rHZ7Qg&s",
  },
  {
    "id": 3,
    "title": "70% Off on Premium Suites - Book Today!",
    "description": "Experience luxury like never before with 70% off on our premium suites. The perfect getaway for a relaxing holiday.",
    "imageUrl": "https://pix10.agoda.net/hotelImages/10312316/-1/1152b227b0206d946f0cecf8ed9c0f3d.jpg?ce=0&s=414x232&ar=16x9",
  }
];

const Promotion = () => {
  return (
    <div className="max-w-7xl mx-auto py-6">
      {/* Swiper for displaying promotions */}
      <Swiper
        spaceBetween={30} // Space between slides
        slidesPerView={3}
        pagination={{ clickable: true }} // Enable pagination with clickable dots
        modules={[Pagination]} // Add Pagination module to swiper
        className="mySwiper"
      >
        {promotions.map((promotion) => (
          <SwiperSlide key={promotion.id}>
            <div
              className="text-center bg-cover bg-center rounded-lg shadow-lg p-4"
              style={{ backgroundImage: `url(${promotion.imageUrl})`, height: '300px' }}
            >
              {/* Promotion Title on Image */}
              <div className="promotion-text-overlay absolute inset-0 flex justify-center items-center text-center text-white bg-black bg-opacity-50 p-4 rounded-lg">
                <div>
                  <h2 className="text-2xl font-bold mb-3">{promotion.title}</h2>
                  <p className="text-lg mb-4">{promotion.description}</p>
                  {/*  Button */}
                 <Link to='/rooms'>
                 <button  className=" bg-[#D9822B] text-white py-2 px-6 rounded-md text-lg hover:bg-[#C77421] transition-all duration-300">Book now & Save 70%</button>
                 </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

Promotion.propTypes = {
  // Prop types can be defined here if needed.
};

export default Promotion;
