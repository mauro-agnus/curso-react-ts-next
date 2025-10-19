interface PropsContador{
    contador: number;
    setContador: React.Dispatch<React.SetStateAction<number>>;
}

function Contador({contador, setContador}: PropsContador){
    return(
        <div>
            <h3>Contador</h3>
            <p>Valor actual: {contador}</p>
            <button onClick={()=>setContador(contador+1)}>Incrementa</button>
            <button onClick={()=>setContador(0)}>Reiniciar</button>
        </div>
    );
}
export default Contador;