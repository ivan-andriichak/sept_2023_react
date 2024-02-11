import React from 'react';
import {personages} from "../Data/data";
import PersonageRickAndMorty from "./PersonageRickAndMorty";


const  PersonagesRickAndMorty= () => {

    return (
        <div>
            <>
                {
                    personages.map((person) => (
                        <PersonageRickAndMorty person={person} key={person.id}/>
                    ))
                }
            </>
        </div>
    );
};

export default PersonagesRickAndMorty;

