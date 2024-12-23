import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import AxiosSecure from '../../Hooks/AxiosSecure';

const UpdateDate = ({ selectedRoom }) => {
    const [startDate, setStartDate] = useState(new Date());
    const axiosSecure = AxiosSecure();

    const handleConfirmUpdate = async id => {
        try {
            const updateDate = { bookingDate: startDate };
            const { data } = await axiosSecure.put(`/dateUpdate/${id}`, updateDate);
            console.log('Booking updated successfully:', data);
            document.getElementById('my_modal_1').close();
        } catch (error) {
            console.error('Failed to update booking:', error);
        }
    };

    const handleCancelUpdate = () => {
        document.getElementById('my_modal_1').close();
    };

    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <div>
                        <img src={selectedRoom?.image} alt="Room" className="w-full h-[180px]" />
                    </div>
                    <h3 className="font-bold text-lg">Title: {selectedRoom?.title}</h3>
                    <p><b>Price:</b> {selectedRoom?.price}</p>
                    {selectedRoom?.bookingDate && (
                        <p className="my-2">
                            <b>Booking Date:</b> {format(new Date(selectedRoom?.bookingDate), 'P')}
                        </p>
                    )}
                    <div className="my-3 flex items-center gap-4">
                        <p><b>Update Date:</b></p>
                        <DatePicker
                            className="border p-2 rounded-md"
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            minDate={new Date()}
                        />
                    </div>
                    <div className="modal-action">
                        <button
                            onClick={() => handleConfirmUpdate(selectedRoom?._id)}
                            className="btn w-full bg-[#7F673A] text-white"
                        >
                            Confirm Update
                        </button>
                        <button onClick={handleCancelUpdate} className="btn  bg-[#7F673A] text-white">
                            Cancel
                        </button>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

UpdateDate.propTypes = {

};

export default UpdateDate;
