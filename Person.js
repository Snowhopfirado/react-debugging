import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I give {props.name} the succ</p>
            <p>(Don't worry cops, they're {props.age} years old)</p>
        </div>
    )
};
export default person;