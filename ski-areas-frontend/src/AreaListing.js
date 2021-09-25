import React from 'react';
import "./AreaListing.css"

export default function AreaListing(props){
    return(
        <div>
            <p>{props.name} <em>({props.state})</em> </p>
            <p>{props.age} years operating</p>
            <img src={props.logo} alt="logo for props.name"/>
            <p>{props.ski}</p>
            <p>{props.snowboard}</p>
        </div>
    )

}