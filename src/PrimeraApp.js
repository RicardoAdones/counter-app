import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

const PrimeraApp = ( { saludo, subtitulo } ) => {

    

    return(
        <>
            <h1>{ saludo }</h1>
            {/* <h1> { JSON.stringify(saludo) } </h1> */}
            <p> {subtitulo} </p>
        </>
    );
}

PrimeraApp.propTypes = {

    saludo: PropTypes.string.isRequired

}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;
