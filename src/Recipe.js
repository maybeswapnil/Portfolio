import React from 'react';
import addData from './App'




const Recipe = (props) => {
    return (
        <div >
            <div  className="boxes">
                <h1 id="boxTitle">{props.label}</h1>
                <div id="details">
                    <p>{props.details[0]}</p>
                    <p>{props.details[1]}</p>
                    <p>{props.details[2]}</p>
                </div>
                <button id="addtocart" onClick={addData(props.label)}>Add to cart</button>
            </div>
        </div>
    );
};


export default Recipe;
 
