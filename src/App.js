import React from 'react';
import logo from './assets/images/bacteria.png';
import './App.css';
import MiComponente from './components/MiComponente';
import Geolocalizacion from './components/Geolocalizacion';


 function App() {
  var usuario = "David"
  var unique_number = "201510416"
  return (
  <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Bacteria moviendose" />
        <p>
          {Bienvenido(usuario, unique_number)}
          Por favor tome un turno
          <section className="componentes">
           <MiComponente />
           <Geolocalizacion />
         </section>
        </p>
       
      </header>
      <body>
      <p>Los párrafos son elementos de bloque.</p>
      <a href="http://www.google.com">Los enlaces son elementos en línea</a>
      <p>Dentro de un párrafo, <a href="http://www.google.com"> los enlaces </a>
      siguen siendo elementos en línea.</p>
      </body>
    </div>
  );
}
function Bienvenido(usuario, unique_number){
  var titulo = <div>
    <h1>Bienvenido {usuario}</h1> 
<h3>Numero unico {unique_number}</h3>
  </div>
  return titulo 
}

export default App;
