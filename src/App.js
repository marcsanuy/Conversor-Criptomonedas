/*jshint esversion: 6 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import imagen from './cryptomonedas.png';

import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';


function App() {

  const [ moneda, guardarMoneda] = useState('');
  const [ criptomoneda, guardarCriptomoneda ] = useState('');
  const [ cargando, guardarCargando ] = useState(false);
  const [ resultado, guardarResultado ] = useState({});

  useEffect(() => {
    const cotizarCriptomoneda = async () => {

    // si no hay moneda, no ejecutar
    if( moneda === '') return;  

    const url =`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    const resultado = await axios.get(url);

      guardarCargando(true);

    setTimeout(() => {
      guardarCargando(false);
      guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
    }, 2000);

    }

    cotizarCriptomoneda();
  }, [ criptomoneda, moneda ]);

  // Mostrar Spinner o Resultado
  const componente = (cargando) ? <Spinner /> : <Cotizacion resultado={resultado} />;


  return (
    <div className="container">
        <div className="row">
            <div className="one-half column">
              <img src={imagen} alt="imagen criptomonedas" className="logotipo" />
            </div>
            <div className="one-half column">
              <h1>Cotización instantánea de Criptomonedas</h1>

              <Formulario
                guardarMoneda={guardarMoneda}
                guardarCriptomoneda={guardarCriptomoneda}
              />

              {componente}
            </div>

        </div>
    </div>
  );
}

export default App;
