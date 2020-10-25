import React, { useState, useEffect } from 'react';
import api from '../../services/api';


function View(props) {
    
    const id = props.match.params.id;
    const [chamado, setChamado] = useState([]);

    useEffect( async () => { await buscarChamado() }, [] )

    async function buscarChamado() {
        const chamado = await api.get(`/chamado/buscarChamado/${id}`);
        
        setChamado(chamado.data);
    }

    return (
        <div>
            { chamado.map( item => (
                <div key={item.id_chamado}>
                    <h2>Chamado: { item.id_chamado }</h2>
                    <h3>Titulo: { item.titulo }</h3>
                    <h3>Descrição: { item.descricao }</h3>
                </div>
            ) ) }
        </div>
    )
}


export default View;