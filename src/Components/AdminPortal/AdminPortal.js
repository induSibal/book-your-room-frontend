import React, {useState, useEffect} from "react";
import { useLayoutEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Stack from 'react-bootstrap/Stack';

import NewListingForm from './NewListingForm/NewListingForm'
import CancelForm from './CancelForm/CancelForm'

function AdminPortal(props){
    const [allBookings, setAllBookings]=useState([]);
    const [allListings, setAllListings]=useState([]);
    const [currentView, setCurrentView]=useState('');
    

    function displayAllBookings(allBookings) { 
        return allBookings.map(function (booking, i){
                return (
                <div key={i}>
                    <h3> - Booking ID {booking.bookingId}:</h3>
                    <h4>Room No. {booking.listingId} is booked from {booking.bookingStartDate.replace('T00:00:00.000Z','')} till {booking.bookingEndDate.replace('T00:00:00.000Z','')} </h4>                         
                    <br/><br/><br />

                </div>
                )
            })
}

function getAllBookings(){
    axios.get(`http://localhost:3000/getAllBookings`).
          then( function (response){
          console.log(response.data)
          setAllBookings(response.data)
          setCurrentView (displayAllBookings(response.data))
          console.log(currentView)})
  };

  function viewCancelForm(){
    setCurrentView(<CancelForm/> )
  }

  function viewAllListings(data){
    return data.map(function (listing, i){
      return (<div>
              <Card style={{ width: '100%'  }} key={i}>
              <Card.Img variant="top" src={listing.imagePath} />
              <Card.Body>
                <Card.Title>Listing ID : {listing.listingId}</Card.Title>
                <Card.Text>
                  Name : {listing.listingName}<br/>                        
                  Price : {listing.price}
                </Card.Text>
              </Card.Body>
            </Card><br/>
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
        }
          )
  };

  function addNewListingsForm(){
    setCurrentView(<NewListingForm/>)
  }
    return (
            <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header onClick={getAllBookings}>View All Bookings</Accordion.Header>
              <Accordion.Body>
                {currentView}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header onClick={viewCancelForm}>Cancel Booking</Accordion.Header>
              <Accordion.Body className="justify-content-md-center">
                  {currentView}
              </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="2">
              <Accordion.Header onClick={viewListings}>View All Listings</Accordion.Header>
              <Accordion.Body>
                {currentView}
              </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="3">
              <Accordion.Header onClick={addNewListingsForm}>Add New Listings</Accordion.Header>
              <Accordion.Body>
                {currentView}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        // <div >
        // <div>
        //   <Row>
        //   <Col>
        // <ButtonGroup vertical>
        //   <Button onClick={getAllBookings}>View All Bookings</Button>
        //   <Button onClick={viewCancelForm}>Cancel Booking</Button>
        //   <Button onClick={viewListings}>View All Listings   </Button>
        //   <Button onClick={addNewListingsForm} > Add New Listings</Button>
        // </ButtonGroup>
        // </Col>
        // <Col>
        // {currentView}
        // </Col>
        // </Row>
        // </div>
        /* <div>
          {/* <Row style={{width:'50px'}}> */
          /* <Row>
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
          </Row>*/
              
                /* <Row>
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
            </div> */
    // </div>
    )};


export default AdminPortal;