import React, {useState, useEffect} from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function NewListingForm(){
    const [newListingName, setNewListingName]= useState('');
    const [newListingPrice, setNewListingPrice]= useState('');
    const [newListingMaxGuests, setNewListingMaxGuests]= useState('');
    const [newListingImagePath, setNewListingImagePath]= useState('');

  function setNewListingNameValue(event){
    setNewListingName(event.target.value);
  }
  
  function setNewListingPriceValue(event){
    setNewListingPrice(event.target.value);
  }

  function setNewListingMaxGuestsValue(event){
    setNewListingMaxGuests(event.target.value);
  }

  function setNewListingImagePathValue(event){
    setNewListingImagePath(event.target.value);
  }

  function addListing(event){
    event.preventDefault();
        
        const requestBody= {
            listingName: newListingName,
            price: newListingPrice,
            maxGuests: newListingMaxGuests,
            imagePath: newListingImagePath
          }
    axios.post('http://localhost:3000/addListings', requestBody)
    .then(function (response) {
        console.log('this is inside axios request '+response.data.data);
        console.log(response.data);
        alert("Listings added successfully");
        setNewListingName('');
        setNewListingPrice('');
        setNewListingMaxGuests('');
        setNewListingImagePath('');        
    })
    .catch(function (error) {
        console.log('this is inside axios error' + error);
    });

  }

    return (
        <div>
        <div>
          <Col>
            <Row>
              <Form.Text className="text-muted">Enter Listing Name</Form.Text>
              <Form.Control type="text" value={newListingName} onChange={setNewListingNameValue}/> <br/>
            </Row>
            <Row>
              <Form.Text className="text-muted">Enter Price</Form.Text>
              <Form.Control type="text" value={newListingPrice} onChange={setNewListingPriceValue} /> <br/>
            </Row>
            <Row>
              <Form.Text className="text-muted">Enter Maximum Guests</Form.Text>
              <Form.Control type="text" value={newListingMaxGuests} onChange={setNewListingMaxGuestsValue} /> <br/>
            </Row>
            <Row>
              <Form.Text className="text-muted">Enter Image Source Url</Form.Text>
              <Form.Control type="text" value={newListingImagePath} onChange={setNewListingImagePathValue}/> <br/>
            </Row> <br />
            <Button onClick={addListing}>Add Listing</Button>
          </Col>

        </div>

    </div>
    )};


export default NewListingForm;