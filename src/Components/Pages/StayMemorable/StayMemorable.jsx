import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';

const StayMemorable = props => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('./staymemorable.json')
            .then(res => res.json())
            .then(data => setCards(data))

        Aos.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className='bg-pink-100  my-10 py-10'>
            <div className='max-w-6xl mx-auto'>
                <h2 className="text-4xl font-bold text-center">Make Your Stay Memorable</h2>
                <p className="font-thin text-center my-3">
                    Enjoy comfort, luxury, and personalized service at our hotel. Let us make your stay truly unforgettable.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 px-5'>
                    {cards.slice(0, 4).map((card, index) => (
                        <div
                            data-aos="fade-up"
                            key={index}
                            className="card bg-base-100  shadow-xl mx-auto ">
                            <figure className="">
                                <img
                                    src={card.image}
                                    alt="Shoes"
                                    className="rounded-xl w-full h-[180px] bg-cover transition-transform duration-700 ease-in-out hover:scale-110" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title md:text-2xl">{card.feature}</h2>
                                <p className=' text-sm'>{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

StayMemorable.propTypes = {};

export default StayMemorable;
