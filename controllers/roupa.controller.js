import roupaServices from "../services/roupa.services.js";

async function deleteRoupa (req, res){
    const codigo = req.params.codigo;
    const dados = await clienteServices.deleteRoupa(codigo);
    res.send(dados);
}

export default {deleteRoupa}