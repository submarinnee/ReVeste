import roupaRepository from "../repositories/roupa.repository.js";

async function deleteRoupa (codigo){
    return await clienteRepository.deleteCliente(codigo);
}

export default {deleteRoupa}