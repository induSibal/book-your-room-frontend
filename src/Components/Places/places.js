import React, {useState, useEffect} from "react";
import { useLayoutEffect } from "react";
import axios from "axios";
import classes from "../Places/places.module.css";


function Places(props){

function displayPlaces(listings) { 
    let data = Array.from(listings)
    return data.map(function (listing, i){
        return (<div key={i}>
            <h2>{listing.listingName}</h2>
            <img src={listing.imagePath} />        
            <h2 className={classes.price}>Price: {listing.price}</h2>
            <br/><br/>
        </div>
        )
    });
    // );
}

const [places, setPlaces]=useState("");

// function itemsView() {
// return items.map((i)=><div key={i.toString()}>{i}</div>);
// }

    
    return (
    <div className={classes.body}>
        <h1 className={classes.heading}>Please Select your Hotel room</h1>
        { displayPlaces(props.availableListings) }
        {/* <button onClick={addToItems} >Add</button>
        <button onClick={deleteFromItems}>Delete</button>
        <button onClick={replaceLastItem}>Replace</button> */}
        {places}
    </div>
    )};

export default Places;