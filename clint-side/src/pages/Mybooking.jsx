import React, { useState } from "react";
import Title from "../components/TItle";
import { assets, userBookingsDummyData } from "../assets/assets";

const Mybooking = () => {
  const [bookings, setBookings] = useState(userBookingsDummyData);
  return (
    <div className="py-28 mb:pb-35  px-4 md:px-16 lg:px-24 xl:px-32">
      <Title
        aling="left"
        title="My Bookings"
        subTitle="Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks"
      />

      <div className="max-w-6xl mt-8 w-full tex-gray-800">
        <div className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3">
          <div className="w-1/3">Hotels</div>
          <div className="w-1/3">Date & Times</div>
          <div className="w-1/3">Payment</div>
        </div>

        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t"
          >
            {/* HotelDetails */}
            <div className="flex flex-col md:flex-row">
              <img
                src={booking.room.images[0]}
                alt="hotel-img"
                className="min-md:w-44 rounded shadow object-cover"
              />
              <div className="flex flex-col gap-1.5 max-md:mt-3 min-md:ml-4">
                <p className="text-2xl font-playfair">
                  {booking.hotel.name}
                  <span className="text-sm font-inter">
                    ({booking.room.roomType})
                  </span>
                </p>

                <div className="flex items-center gap-1 text-sm  text-gray-400">
                  <img src={assets.locationIcon} alt="location" className="" />
                  <span>{booking.hotel.address}</span>
                </div>
                <div className="flex items-center gap-3 text-sm  text-gray-400">
                  <img src={assets.guestsIcon} alt="guests-icon" className="" />
                  <span>Guest {booking.guests}</span>
                </div>
                <p className="text-base">Total: ${booking.totalPrice}</p>
              </div>
            </div>

            {/*!Date & Timings*/}
            <div className="flex flex-row md:items-center md:gap-12 mt-3 gap-8">
              <div>
                <p>Check In:</p>
                <p>{new Date(booking.checkInDate).toDateString()}</p>
              </div>
              <div>
                <p>Check Out:</p>
                <p>{new Date(booking.checkOutDate).toDateString()}</p>
              </div>
            </div>
            {/*  Payment Status */}
            <div className="flex flex-col items-start justify-center pt-3">
              <div className="flex items-center gap-2">
                <div className={`circle size-3 rounded-full ${booking.isPaid ? "bg-green-500" : "bg-red-500"}`}></div>
                <p className={`text-sm ${booking.isPaid ? "text-green-500" : "text-red-500"}`}>
                  {booking.isPaid ? "Paid" : "Unpaid"}
                </p>
              </div>
                {!booking.isPaid && <button className="px-4 py-1.5 mt-1 ml-4 text-xs border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-800 hover:text-white transition-all duration-300 ">
                    Pay Now 
                  </button>}

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mybooking;
