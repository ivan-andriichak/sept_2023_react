import React from 'react';

import './RickAndMorty.module.css';

const PersonageRickAndMorty = ({person}) => {
    const {id, name, status, species, gender, image} = person
    return (
        <div>
            <h2>
                {id}. {name} - {species}
            </h2>
            <p>
                Status - {status}. Gender - {gender}
            </p>
            <img
                src={image} alt="{name}"
            />
            <hr/>
        </div>
    );
};

export default PersonageRickAndMorty;