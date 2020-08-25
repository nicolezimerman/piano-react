import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [ estaSonando, setEstaSonando ] = useState("");

  const notas = [
    {
      nombre: "DO",
      link: require("./notas/do.wav"),
      tieneSostenido: true,
      color: "red"
    },
    {
      nombre: "RE",
      link: require("./notas/re.wav"),
      tieneSostenido: true,
      color: "orange"
    },
    {
      nombre: "MI",
      link: require("./notas/mi.wav"),
      color: "yellow"
    },
    {
      nombre: "FA",
      link: require("./notas/fa.wav"),
      tieneSostenido: true,
      color: "green"
    },
    {
      nombre: "SOL",
      link: require("./notas/sol.wav"),
      tieneSostenido: true,
      color: "lightblue"
    },
    {
      nombre: "LA",
      link: require("./notas/la.wav"),
      tieneSostenido: true,
      color: "blue"
    },
    {
      nombre: "SI",
      link: require("./notas/si.wav"),
      color: "violet"
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
        <h1>Pianito multicolor</h1>
      </div>
      <div className="contenedor">
        {
          notas.map(nota => {
            return(
              <div 
                className={`nota ${estaSonando === nota.nombre && 'estaSonando'}`} 
                onClick={() => handleClick(nota)} 
                style={ estaSonando === nota.nombre ? { backgroundColor:`${nota.color}`} : {}}>
                  { nota.tieneSostenido && <div className="negra"></div> }
              </div>
            )
          })
        }
      </div>
      <div className="footer">
        <h2>Hecho con  por Nicky Zimerman</h2>
      </div>
    </div>
  );
}

export default App;
