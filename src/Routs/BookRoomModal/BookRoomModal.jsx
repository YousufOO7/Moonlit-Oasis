import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookRoomModal = ({ rooms }) => {
    const [startDate, setStartDate] = useState(new Date());
    const { image, description, title, price, features } = rooms;
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <div>
                        <img src={image} alt="" className='w-full h-[180px]' />
                    </div>
                    <h3 className="font-bold text-lg">Title: {title}</h3>
                    <p className="py-4"><b>Description:</b> {description.slice(0, 90)}...</p>
                    <p className=""><b>Price:</b> {price}</p>
                   <div className='my-3 flex items-center gap-4'>
                    <p><b>Pick a Date:</b></p>
                   <DatePicker
                        className='border p-2 rounded-md'
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                    ></DatePicker>
                   </div>
                    <div className=" mt-3">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn w-full  bg-[#7F673A] text-white">Confirm Book</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

BookRoomModal.propTypes = {

};

export default BookRoomModal;