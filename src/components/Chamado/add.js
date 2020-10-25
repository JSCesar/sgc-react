import React, {useState} from 'react'
import api from '../../services/api';

function Add(props) {

    const [chamado, setChamado] = useState({});

    async function criarChamado(event) {
        event.preventDefault();
        console.log(event);
        const response = await api.post('chamado/criarChamado', chamado);
    }

    function montarChamado(event) {
        setChamado({ ...chamado, [event.target.name]: event.target.value });
    }

    return (
        <div>
            <h3>Criar um novo Chamado</h3>

            <form>
                <input name="titulo" onChange={ montarChamado }/>
                <input name="descricao" onChange={ montarChamado } />
                <button type="submit" onClick={ criarChamado }>Criar Chamado</button>
            </form>
        </div>
    )
}

export default Add;