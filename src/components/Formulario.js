/*jshint esversion: 6 */

import React from 'react';

function Formulario() {

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

                    </select>
                </div>
            </form>
        )
}
export default Formulario;