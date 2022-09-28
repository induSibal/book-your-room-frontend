import React, {useState, useEffect} from "react";
import { useLayoutEffect } from "react";
import axios from "axios";
import { useNavigate} from 'react-router-dom';

function AllBookings(props){
    const [bookingNumber, setBookingNumber]=useState('');
    const [allBookings, setAllBookings]=useState([]);
    const navigate = useNavigate();

    function displayAllBookings(allBookings) { 
        return allBookings.map(function (booking, i){
                return (
                <div key={i}>
                    <h3>Booking ID {booking.bookingId}:</h3>
                    <h4>Room No. {booking.listingId} is booked from {booking.bookingStartDate.replace('T00:00:00.000Z','')} till {booking.bookingEndDate.replace('T00:00:00.000Z','')} </h4>                         
                    <br/><br/><br />

                </div>
                )
            })
}

function cancelBooking(bookingId){
    const cancel  = axios.get(`http://localhost:3000/deleteBooking/`+bookingId);
    getData();
    
}

const getData = async () => {
    const response  = await axios.get(`http://localhost:3000/getAllBookings`);
    console.log(response.data);
    setAllBookings(response.data);
  };


// function itemsView() {
// return items.map((i)=><div key={i.toString()}>{i}</div>);
// }

  function setBookingNumberValue(event){
    const bNumber=event.target.value;
    setBookingNumber(bNumber);
  }
    
    return (
    <div >
        <button align="center" onClick={getData}>Show All Bookings</button> 
        <br/><br/><br/>
        {displayAllBookings(allBookings)}
        <br/><br/><br/>
        <h3>Enter the Booking ID you want to cancel</h3>
        <input type="number" onChange={setBookingNumberValue} />
        <button onClick={()=>cancelBooking(bookingNumber)}>Cancel </button>
    </div>
    )};

export default AllBookings;