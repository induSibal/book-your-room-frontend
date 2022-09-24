import React, {useState, useEffect} from "react";
import { useLayoutEffect } from "react";
import axios from "axios";
import classes from "../Places/places.module.css";


function Places(){

const [places, setPlaces]=useState("");

// function itemsView() {
// return items.map((i)=><div key={i.toString()}>{i}</div>);
// }
    function displayPlaces() { 
        return (
            <div>
                <img src={require('../../../Resources/Images/place1.jpg')} />
                <h2 className={classes.price}>Price: $100</h2>
                <img src={require('../../../Resources/Images/place2.jpg')} />
                <h2 className={classes.price}>Price: $110</h2>
                <img src={require('../../../Resources/Images/place3.jpg')} />
                <h2 className={classes.price}>Price: $120</h2>
                <img src={require('../../../Resources/Images/place4.jpg')} />
                <h2 className={classes.price}>Price: $130</h2>
                <img src={require('../../../Resources/Images/place5.jpg')} />
                <h2 className={classes.price}>Price: $140</h2>
                <img src={require('../../../Resources/Images/place6.jpg')} />
                <h2 className={classes.price}>Price: $150</h2>
                <img src={require('../../../Resources/Images/place7.jpg')} />
                <h2 className={classes.price}>Price: $160</h2>
                <img src={require('../../../Resources/Images/place8.jpg')} />
                <h2 className={classes.price}>Price: $170</h2>
                <img src={require('../../../Resources/Images/place9.jpg')} />
                <h2 className={classes.price}>Price: $180</h2>
                <img src={require('../../../Resources/Images/place10.jpg')} />
                <h2 className={classes.price}>Price: $190</h2>
            </div>
        );
    }
    
    

    return <div className={classes.body}>
        <h1 className={classes.heading}>Please Select your Hotel room</h1>
        { displayPlaces()}
        {/* <button onClick={addToItems} >Add</button>
        <button onClick={deleteFromItems}>Delete</button>
        <button onClick={replaceLastItem}>Replace</button> */}
        {places}
    </div>
}

export default Places;