import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import BookRoomModal from '../BookRoomModal/BookRoomModal';

const RoomDetails = () => {
  const rooms = useLoaderData();

  const { image, description, title, price, features } = rooms;


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
         className='btn bg-[#7F673A] text-white'>Book Room</button>
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
                <h3 className="text-lg font-bold">Reviews</h3>
                <p className="text-gray-700">No reviews available yet.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <BookRoomModal
      rooms={rooms}
      ></BookRoomModal>
    </div>
  );
};

RoomDetails.propTypes = {

};

export default RoomDetails;
