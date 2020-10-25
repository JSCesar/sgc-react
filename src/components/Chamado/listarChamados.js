import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';


function ListarChamados() {
    const [chamados, setChamados] = useState([]);

    useEffect( async () => { await buscarTodosChamados() }, [] );

    async function buscarTodosChamados() {

        const listaChamado = await api.get('/chamado/listarChamados');

        setChamados(listaChamado.data);

    }

    return (
        <div>
            <h2>Listar Chamados</h2>

            <table>
                <tr>
                    <td>Chamado</td>
                    <td>Título</td>
                </tr>
                
                    { 
                        chamados.map( item => (
                            <tr key={item.id_chamado}>
                                <td><Link to={`view/${ item.id_chamado }`}>{item.id_chamado}</Link></td>
                                <td>{item.titulo}</td>
                            </tr>
                        ))
                    }
               
            </table>
           
        </div>
    )
}

export default ListarChamados;