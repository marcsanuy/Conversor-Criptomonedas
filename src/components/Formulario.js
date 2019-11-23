/*jshint esversion: 6 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Criptomoneda from './Criptomoneda';
import Error from './Error';

function Formulario() {
    const [ criptomonedas, guardarCriptomonedas ] = useState([]);
    const [ monedaCotizar, guardarMonedaCotizar ] = useState('');
    const [ criptoCotizar, guardarCriptoCotizar ] = useState('');
    const [ error, guardarError ] = useState(false);

    useEffect(() => {

        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            
            const resultado = await axios.get(url);

            //mostrar respuesta en el state
            guardarCriptomonedas(resultado.data.Data);
        };
        consultarAPI();
    }, []);

    // Validar que el usuario llene los dos capos del formulario
    const cotizarMoneda = e => {
        e.preventDefault();

        // Validar si ambos campos estan llenos
        if(monedaCotizar === '' || criptoCotizar === '') {
            guardarError(true);
            return;
        }
        // Pasar los datos al componente principal
        guardarError(false);
    }

    // Mostrat error en caso que exista
    const componente = (error) ?  <Error mensaje="Ambos campos son obligatorios" /> : null;
    
        return(
            <form
                onSubmit={cotizarMoneda}
            >
                {componente}
                <div className="row">
                   <label>Elige tu Moneda</label>
                   <select 
                        className="u-full-width"
                        onChange={ e => guardarMonedaCotizar(e.target.value) }
                   >


                       <option value="">- Elige tu Moneda -</option>
                       <option value="USD">Dólar Americano</option>
                       <option value="EUR">Euro</option>
                       <option value="GBP">Libra</option>
                       <option value="JPY">Yen</option>
                   </select>
                </div>

                <div className="row">
                    <label>Elige tu Criptomoneda</label>
                    <select 
                    className="u-full-width"
                    onChange={ e => guardarCriptoCotizar(e.target.value) }
                    >
                        <option value="">- Elige tu Criptomoneda -</option>
                        { criptomonedas.map(criptomoneda => (
                            <Criptomoneda
                                key={criptomoneda.CoinInfo.Id}
                                criptomoneda={criptomoneda}
                            />        
                        ))}

                    </select>
                </div>

                <input type="submit" className="button-primary u-full-width" value="Calcular" />         

            </form>
        )
}
export default Formulario;