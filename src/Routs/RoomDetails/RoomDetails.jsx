import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import BookRoomModal from '../BookRoomModal/BookRoomModal';
import { FaStar } from 'react-icons/fa';

const RoomDetails = () => {
  const rooms = useLoaderData();
  const { image, description, title, price, features, reviews } = rooms;

  const [activeTab, setActiveTab] = useState('description');

  return (
    <div>
      <div className="max-w-6xl mx-auto my-5 px-5">
        <div className='flex justify-between my-3 items-center'>
          <h3 className="text-xl">
            <b>Price:</b> {price}
          </h3>
          <button
            onClick={() => document.getElementById('my_modal_1').showModal()}
            className='btn bg-[#7F673A] text-white'
          >
            Book Room
          </button>
        </div>
        <img src={image} alt={title} className="h-96 w-full object-cover mb-5" />

        <div>
          {/* Tab Navigation */}
          <div role="tablist" className="tabs tabs-lifted">
            <button
              role="tab"
              className={`tab text-2xl font-semibold ${activeTab === 'description' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button
              role="tab"
              className={`tab text-2xl font-semibold ${activeTab === 'reviews' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews
            </button>
          </div>

          {/* Tab Content */}
          <div className="mt-5">
            {activeTab === 'description' && (
              <div>
                <h1 className="text-2xl font-bold mb-3">Title: {title}</h1>
                <h3 className="text-lg font-bold">Description:</h3>
                <p className="text-gray-700">{description}</p>
                <p className="font-semibold mt-3 text-xl">Features:</p>
                <ul className="mt-3 list-disc list-inside">
                  {features.map((feature, index) => (
                    <li key={index} className="text-gray-600">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>

                {/* Show reviews */}
                {reviews?.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
                    {reviews.map((review, index) => (
                      <div key={index} className="card p-4 shadow-lg rounded-md bg-white">
                        <h4 className="font-bold">{review.userName}</h4>
                        <div className="flex items-center text-yellow-500">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <FaStar
                              key={star}
                              className={`${
                                star <= review.rating ? 'text-yellow-500' : 'text-gray-300'
                              }`} 
                            />
                          ))}
                          <span className="ml-2 text-gray-700">{review.rating} / 5</span>
                        </div>

                        <p className="text-gray-700 mt-2">{review.comment}</p>
                        <p className="text-sm text-gray-500 mt-2">
                          {new Date(review.timestamp).toLocaleDateString()}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="mt-5 text-gray-700">No reviews available yet.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal for booking room */}
      <BookRoomModal rooms={rooms}></BookRoomModal>
    </div>
  );
};

RoomDetails.propTypes = {

};

export default RoomDetails;
