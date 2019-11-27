import React from 'react';

const Cotizacion = ({resultado}) => {

    if(Object.keys(resultado).length === 0 ) return null;

    return ( 
        <div className="resultado">
            <h2>Valor Actual:</h2>
        </div>
     );
}
 
export default Cotizacion;