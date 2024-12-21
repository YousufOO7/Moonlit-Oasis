import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FaShuttleVan } from 'react-icons/fa';

const StayMemorable = props => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('./staymemorable.json')
            .then(res => res.json())
            .then(data => setCards(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className='bg-slate-300 my-10 py-10'>
            <h2 className="text-4xl font-bold text-center">Make Your Stay Memorable</h2>
            <p className="font-thin text-center my-3">
                Enjoy comfort, luxury, and personalized service at our hotel. Let us make your stay truly unforgettable.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
                {cards.map((card, index) => (
                    <div key={index} className="card bg-base-100  w-80 shadow-xl mx-auto">
                        <figure className="px-10 pt-10">
                            <img
                                src={card.image}
                                alt="Shoes"
                                className="rounded-xl w-full h-[150px] bg-cover" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{card.feature}</h2>
                            <p className='font-thin text-sm'>{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

StayMemorable.propTypes = {};

export default StayMemorable;
