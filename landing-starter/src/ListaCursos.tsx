
interface PropsLista{
    cursos:string[];
}

function ListaCursos({cursos}:PropsLista){
    return(
        <ul>
            {cursos.map((curso)=> <li key={curso}>{curso}</li>)}
        </ul>
    );
}

export default ListaCursos;