import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( {value = 10} ) => {

    const [ counter, setCounter ] = useState(value);

    

    const handleAdd = (e) =>{
        setCounter(counter + 1);
        // setCounter( (c)=> c + 1 );
    }

    const handleSubtract = (e) =>{
        setCounter(counter - 1);
        // setCounter( (c)=> c + 1 );
    }

    const handleReset = (e) =>{
        setCounter(value);
        // setCounter( (c)=> c + 1 );
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>
            <button onClick={handleAdd} >+1</button>
            <button onClick={handleReset} >Reset</button>
            <button onClick={handleSubtract} >-1</button>
        </>
    );
}

CounterApp.propTypes ={
    value: PropTypes.number.isRequired
}
 
export default CounterApp;