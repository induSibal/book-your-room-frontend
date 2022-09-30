import React,{useState} from "react";
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import axios from "axios";

import Listings from '../Listings/Listings';

function SearchForm(){

    const [startDate, setStartDate]=useState('');
    const [endDate, setEndDate]=useState('');
    const [maxPrice, setMaxPrice]=useState('');
    const [maxGuests, setMaxGuests]=useState('');
    const [ListingsComponent, seListingsComponent]=useState('');
    
    function setStartDateValue(event){
        const date =event.target.value;
        setStartDate(date);
    }

    function setEndDateValue(event){
        const date =event.target.value;
        setEndDate(date);
    }

    function setMaxPriceValue(event){
        const price =event.target.value;
        setMaxPrice(price);
    }

    function setMaxGuestsValue(event){
        const guest =event.target.value;
        setMaxGuests(guest);
    }

    function handleSearch(event){
        event.preventDefault();
        
        const requestBody= {
            startDate: startDate,
            endDate: endDate,
            maxPrice: maxPrice,
            maxGuests: maxGuests
          }
        axios.post('http://localhost:3000/getAvailableListings', requestBody)
        .then(function (response) {
            console.log('this is inside axios request '+response.data.data);
            console.log(response.data);
            seListingsComponent(<Listings availableListings={response.data} />)
        })
        .catch(function (error) {
            console.log('this is inside axios error' + error);
        });
    }

    return(
        <div>
            <Form>
                <Row>
                    <Col>
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control type="date" placeholder="Start Date" onChange={setStartDateValue} />
                    </Col>
                    <Col>
                        <Form.Label>End Date</Form.Label>
                        <Form.Control type="date" placeholder="End Date" onChange={setEndDateValue} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Select the maximum price</Form.Label>
                        <Form.Control type="Price" placeholder="Maximum Price" onChange={setMaxPriceValue}  />
                    </Col>
                    <Col>
                        <Form.Label>Select the number of Guests</Form.Label>
                        <Form.Control type="Price" placeholder="Number of Guests" onChange={setMaxGuestsValue}  />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br/>
                        <Button variant="primary" type="Search" onClick={handleSearch}>Search</Button> 
                    </Col>
                </Row>
            </Form>
                {ListingsComponent}
            </div>
    )};


export default SearchForm;