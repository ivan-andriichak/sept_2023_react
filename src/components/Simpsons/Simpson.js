import React from 'react';

import './Simpsons.module.css';

const Simpson = ({item}) => {
    const {name, surname, age, info, photo} = item;

        console.log(item)
    return (

        <div>
            <div>
                <h2>{name} {surname}</h2>
                <p>{age} {info}</p>
                <img src={photo} alt="{Person's photo}"/>
                <hr/>
            </div>
        </div>
    );
};

export default Simpson;