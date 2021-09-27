import React from 'react';
import "./AreaList.css"
import AreaListing from './AreaListing';

export default function AreaList(props){

    const $areas = props.areas.map(area => {
        return <li key={area.id}>
            <AreaListing 
                id={area.id}
                name={area.name} 
                age={area.age} 
                state={area.state} 
                logo={area.logo} 
                ski={area.ski} 
                snowboard={area.snowboard} 
            />
        </li>
    })

    return(
        <ul>{$areas}</ul>
    )
}