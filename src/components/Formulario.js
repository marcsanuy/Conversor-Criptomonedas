/*jshint esversion: 6 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Criptomoneda from './Criptomoneda';

function Formulario() {
    const [ criptomonedas, guardarCriptomonedas ] = useState([]);

    useEffect(() => {

        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            
            const resultado = await axios.get(url);

            //mostrar respuesta en el state
            guardarCriptomonedas(resultado.data.Data);
        };
        consultarAPI();

    }, []);

        return(
            <form>
                <div className="row">
                   <label>Elige tu Moneda</label>
                   <select className="u-full-width">
                       <option value="">- Elige tu Moneda -</option>
                       <option value="USD">Dólar Americano</option>
                       <option value="EUR">Euro</option>
                       <option value="GBP">Libra</option>
                       <option value="JPY">Yen</option>
                   </select>
                </div>

                <div className="row">
                    <label>Elige tu Criptomoneda</label>
                    <select className="u-full-width">

                        { criptomonedas.map(criptomoneda => (
                            <Criptomoneda
                                key={criptomoneda.CoinInfo.Id}
                                criptomoneda={criptomoneda}
                            />        
                        ))}

                    </select>
                </div>
            </form>
        )
}
export default Formulario;