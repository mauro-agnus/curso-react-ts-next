import { useState, useEffect } from "react";

interface Usuario {
    id: number;
    name: string;
    email: string;
}
export default function ListasUsuarios(){
    const [usuarios, setUsuarios] = useState<Usuario []>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string|null>(null);

    useEffect(()=> {
        //api
    }, []);
    return(
        <div>
            <h2>Lista de Usuarios</h2>
            {loading && <p>Cargando...</p>}
            {error && <p>error: {error} </p>}
            <ul>
                {usuarios.map(u => (
                    <li key={u.id}>
                        {u.name} - {u.email}
                    </li>
                ))}
            </ul>
        </div>
    )
}