import React from "react";
import Simpson from "./Simpson";
import {simpsons} from "../data/data"


const Simpsons = () => {
    return (
        simpsons.map((person, index) => (
            <Simpson item={person} key={index}/>
        )));
};

export default Simpsons