import PropTypes from 'prop-types';


const TopRoomsCard = ({ room }) => {
    const { image, description, price, title, rating } = room;
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
                    <p>{description}</p>
                    <p><b>Price:</b> {price}</p>
                    <div className=" justify-between items-center flex mt-3">
                        <div><button className="btn btn-primary">Book Now</button></div>
                        <div><p>Available</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

TopRoomsCard.propTypes = {

};

export default TopRoomsCard;