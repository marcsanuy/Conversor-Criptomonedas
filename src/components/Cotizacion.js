import React from 'react';

const Cotizacion = ({resultado}) => {

    if(Object.keys(resultado).length === 0 ) return null;

    return ( 
        <div className="resultado">
            <h4>Valoraciones:</h4>
            <p className="precio">El valor actual es <span>{resultado.PRICE}</span></p>

            <p>Precio mas alto del día: <span>{resultado.HIGHDAY}</span></p>
            <p>Precio mas bajo del día: <span>{resultado.LOWDAY}</span></p>
            <p>Variación porcentual de las últimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}%</span></p>
        </div>
     );
}
 
export default Cotizacion;