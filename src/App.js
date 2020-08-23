import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [ estaSonando, setEstaSonando ] = useState("");

  const notas = [
    {
      nombre: "DO",
      link: require("./notas/do.wav"),
      tieneSostenido: true
    },
    {
      nombre: "RE",
      link: require("./notas/re.wav"),
      tieneSostenido: true
    },
    {
      nombre: "MI",
      link: require("./notas/mi.wav")
    },
    {
      nombre: "FA",
      link: require("./notas/fa.wav"),
      tieneSostenido: true
    },
    {
      nombre: "SOL",
      link: require("./notas/sol.wav"),
      tieneSostenido: true
    },
    {
      nombre: "LA",
      link: require("./notas/la.wav"),
      tieneSostenido: true
    },
    {
      nombre: "SI",
      link: require("./notas/si.wav")
    }
  ];

  const handleClick = (nota) => {
    setEstaSonando(nota.nombre)
    const sonido = new Audio(nota.link)
    sonido.play();
    console.log(nota)
    setTimeout(() => {
      setEstaSonando(null)
    }, 300)
  };

  return (
    <div className="App">
      <div className="titulo">
        <h1>Piano</h1>
        <h2>Hecho con amor por Nicky</h2>
      </div>
      <div className="contenedor">
        {
          notas.map(nota => {
            return(
              <div 
                className={`nota ${estaSonando === nota.nombre && 'estaSonando'}`} 
                onClick={() => handleClick(nota)}>
                  { nota.tieneSostenido && <div className="negra"></div> }

              </div>
            )
          })
        }
      </div>

    </div>
  );
}

export default App;
