import React, {useState, useEffect} from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function CancelForm(){
    const [bookingNumber, setBookingNumber]=useState('');

function setBookingNumberValue(event){
    const bookNumber = event.target.value;
    setBookingNumber(event.target.value);
    }


function cancelBooking(){
    axios.get(`http://localhost:3000/deleteBooking/`+bookingNumber)
    .then(function (response) {        
        alert("Booking "+bookingNumber+" is ID successfully canceled");
        setBookingNumber('');
    })
    .catch(function (error) {
        console.log('this is inside axios error' + error);
    });    
}

    return (
            <Col>
                <Row>
                <Form.Text className="text-muted">Enter the Booking ID you want to cancel</Form.Text>
                <Form.Control type="text" value={bookingNumber} onChange={setBookingNumberValue}/> 
                </Row> <br />
                <Button onClick={cancelBooking}>Cancel Booking</Button>
            </Col>
    )};


export default CancelForm;