import React from 'react';

const CityComponent = (props) => {

    return (
        <div>
            <h1>{props.cityName}</h1>
            <p>{props.description}</p>
        </div >
    )

}

export default CityComponent;