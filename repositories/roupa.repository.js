import bd from './bd.js'

async function deleteRoupa(codigo){
    const conn = await bd.conectar()
    let dados = null;
    try{
        var query = await conn.query("delete from roupa where codigo=$ returning *", [codigo])
        console.log(query.rows)
        dados = query.rows
    } catch (erro){
        console.log(erro)
    } finally {
        conn.release();
    }
    return dados;
}