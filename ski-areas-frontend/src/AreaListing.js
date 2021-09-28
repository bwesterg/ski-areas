import React from 'react';
import "./AreaListing.css"

export default function AreaListing({id, name, state, logo, age, ski, snowboard }){
    return(
        <div className="area-card">
            <p>{name} <em>({state})</em> </p>
            <p>{age} years operating</p>
            <img src={logo} alt="logo for props.name"/>
            <p>{ski}</p>
            <p>{snowboard}</p>
            <button className="delete-button">DELETE</button>
        </div>
    )

}