const Client =  require('pg').Client
const cliente = new Client({
    user: "postgres",
    password: "vitoria2002",
    host: "localhost",
    port: 5432,
    database: "Mensagem_Suporte"
})
cliente.connect()

async function inserir(name, email, assunto, mensagem){
    try{
        await cliente.query('insert into Mensagem_Suporte ("name", "email", "assunto", "mensagem") values('+"'"+name+"', '"+email+"', '"+assunto+"', '"+mensagem+"');")
    } 
    catch{
        console.log("Deu erro")
    }
}

async function getIdUm(){
    try{
    const resultado = await cliente.query('select name,email,assunto, mensagem from Mensagem_Suporte')
    console.log(resultado.rows)
    return resultado.rows
    }
    catch{
        console.log("deu erro")
    }
    
}

getIdUm()

module.exports.inserir()