import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Mybooking from "./pages/Mybooking";
import Error from "./components/Error";
import Footer from "./components/Footer";
import AllRooms from "./pages/AllRooms";
import RoomDetails from "./pages/RoomDetails";
import HotelReg from "./components/HotelReg";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div className="">
      {!isOwnerPath && <Navbar />}
      {false && <HotelReg/>}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-bookings" element={<Mybooking />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
      <Footer/>

    </div>
  );
};

export default App;
