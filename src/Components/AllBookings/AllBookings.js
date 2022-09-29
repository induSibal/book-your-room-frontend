import React, {useState, useEffect} from "react";
import { useLayoutEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function AllBookings(props){
    const [bookingNumber, setBookingNumber]=useState('');
    const [allBookings, setAllBookings]=useState([]);
    const [allListings, setAllListings]=useState([]);
    const [currentView, setCurrentView]=useState('');

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
    axios.get(`http://localhost:3000/deleteBooking/`+bookingId);
    
}

function getData(){
    axios.get(`http://localhost:3000/getAllBookings`).
          then( function (response){
          console.log(response.data)
          setAllBookings(response.data)
          setCurrentView(displayAllBookings(response.data))                    
          console.log(currentView)})
  };

  function viewCancelOption(){
    setCurrentView(( <div>      
                        <h3>Enter the Booking ID you want to cancel</h3>
                        <input type="number" onChange={setBookingNumberValue} />        
                        <Button onClick={cancelBooking(bookingNumber)}>Cancel </Button>
                    </div>)) 
  }


// function itemsView() {
// return items.map((i)=><div key={i.toString()}>{i}</div>);
// }

  function setBookingNumberValue(event){
    const bNumber=event.target.value;
    setBookingNumber(bNumber);
  }

  function viewAllListings(data){
    return data.map(function (listing, i){
      return (
      <div key={i}>
          <h4>Listing ID : {listing.listingId}</h4>
          <h4>Name : {listing.listingName}  </h4>                         
          <h4>Price : {listing.price}  </h4>                         
          <img src= {listing.imagePath} />                     
          <br/><br/><br />

      </div>
      )
  })

  }
  function viewListings(){
    axios.get("http://localhost:3000/viewAllListings")
    .then( function (response){
      console.log(response.data)
      setAllListings(response.data)
           setCurrentView(viewAllListings(response.data))                    
           console.log(currentView)
        }
          )
  };

    return (
    <div >
        <Form>
          <Row>
          <Col>
        <ButtonGroup vertical>
          <Button id='allBookings'  onClick={getData}>View All Bookings</Button>
          <Button onClick={viewCancelOption}>Cancel Booking</Button>
          <Button onClick={viewListings}>View All Listings   </Button>
          <Button>Add New Listings</Button>
        </ButtonGroup>
        </Col>
        <Col>
        {currentView}
        </Col>
        </Row>
        </Form>
        {/* <div>
          {/* <Row style={{width:'50px'}}> */}
          {/* <Row>
            <Col >
               <Button style={{width:'100px'}} variant="primary" onClick={getData}>View All Bookings</Button> <br/><br/><br/>               
               <Button style={{width:'100px'}} variant="primary" onClick={cancelBooking()}>Cancel Booking</Button> <br/><br/><br/>               
               <Button style={{width:'100px'}} variant="primary" >View All Listings</Button> <br/><br/><br/>
               <Button style={{width:'100px'}} variant="primary" >Add New Listing</Button> <br/><br/><br/>
            </Col>
            <Col >
              {currentView}
                    
              
              <Form.Label>Enter the Booking ID you want to cancel &nbsp;&nbsp;</Form.Label>
             
            </Col> 
          </Row>*/}
              
                {/* <Row>
                <Col>
                        <br/>
                        <Button variant="primary" type="Search" >Search</Button> 
                    </Col>
                    <Col>
                        <br/>
                        <Button variant="primary" type="Search" >Search</Button> 
                    </Col>
                </Row>
                <Row>
                <Col>
                        <br/>
                        <Button variant="primary" type="Search" >Search</Button> 
                    </Col>
                    <Col>
                        <br/>
                        <Button variant="primary" type="Search" >Search</Button> 
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br/>
                        <Button variant="primary" type="Search" >Search</Button> 
                    </Col>
                </Row> 
            </div> */}
    </div>
    )};


export default AllBookings;