import React, {useState, useEffect} from "react";
import { useLayoutEffect } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';

function Listings(props){

function displayPlaces(listings) { 
    let data = Array.from(listings)
    return data.map(function (listing, i){
        return (<div >
              <Card style={{ width: '100%'  }} key={i}>
              <Card.Img variant="top" src={listing.imagePath} />
              <Card.Body>
                <Card.Title>{listing.listingName}</Card.Title>
                <Card.Text>                       
                  Price : {listing.price}
                </Card.Text>
              </Card.Body>
            </Card><br/>
            </div>
        )
    });
    // );
}

    return (
    <div style={{textAlign:'center'}}>
        <h1 style={{marginBottom:'100px'}}>Please Select your Hotel room</h1>
        { displayPlaces(props.availableListings) }
    </div>
    )};

export default Listings;