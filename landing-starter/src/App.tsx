import Bienvenida from "./Bienvenida";
import InfoCurso from "./InfoCurso";
import ListaCursos from "./ListaCursos";
import Contador from "./Contador";
import { useState, useEffect } from "react";

function App(){
  console.log("renderizada");
  const cursos = ["javascript", "c++", "Rust", "BashScripting", "Ensamblador", "gdscript"];
  const [contador, setContador] = useState(0);
  useEffect(()=>{
    console.log("solo una vez")
  },[])
  return(
    <div>
      <h1>Landing Started</h1>
      <Bienvenida nombre="OpenAi"/>
      <p>Proyecto base con React y TypeScript</p>
      <InfoCurso tecnologia="React con typeScript" />
      <ListaCursos cursos={cursos}/>
      <Contador contador={contador} setContador={setContador}/>
      <p>Valor total de la aplicacion: {contador}</p>
    </div>
  );
}

export default App;