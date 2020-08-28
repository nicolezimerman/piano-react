import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  const [ estaSonando, setEstaSonando ] = useState("");



  const notas = [
    {
      nombre: "DO",
      link: require("./notas/do.wav"),
      tieneSostenido: true,
      color: "red",
      key: "a",
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


  const pressDo = useKeyPress('a',notas[0]);
  const pressRe = useKeyPress('s',notas[1]);
  const pressMi = useKeyPress('d',notas[2]);
  const pressFa = useKeyPress('f',notas[3]);
  const pressSol = useKeyPress('g',notas[4]);
  const pressLa = useKeyPress('h',notas[5]);
  const pressSi = useKeyPress('j',notas[6]);

  const handleClick = (nota) => {
    setEstaSonando(nota.nombre)
    const sonido = new Audio(nota.link)
    sonido.play();
    console.log(nota)
    setTimeout(() => {
      setEstaSonando(null)
    }, 300)
  };

  // Hook
  function useKeyPress(targetKey,nota) {
    // State for keeping track of whether key is pressed
    const [keyPressed, setKeyPressed] = useState(false);

    // If pressed key is our target key then set to true
    function downHandler({ key }) {
      if (key === targetKey) {
        setKeyPressed(true);
        handleClick(nota);
      }
    }

    // If released key is our target key then set to false
    const upHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    };

    // Add event listeners
    useEffect(() => {
      window.addEventListener('keydown', downHandler);
      window.addEventListener('keyup', upHandler);
      // Remove event listeners on cleanup
      return () => {
        window.removeEventListener('keydown', downHandler);
        window.removeEventListener('keyup', upHandler);
      };
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return keyPressed;
  }


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
        {pressDo}
        {pressRe}      
        {pressMi}      
        {pressFa}
        {pressSol}      
        {pressLa}      
        {pressSi}        
      </div>
      <div className="footer">
        <h2>Hecho con  por Nicky Zimerman</h2>
      </div>
    </div>
  );
}


export default App;
