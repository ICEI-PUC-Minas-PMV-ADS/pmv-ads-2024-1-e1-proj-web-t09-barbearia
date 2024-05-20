export default class Usuario {
    usuario
    senha
    nomeCompleto
    email
    
    constructor(usuario, senha, nomeCompleto, email) {
        this.usuario = usuario;
        this.senha = senha;
        this.nomeCompleto = nomeCompleto;
        this.email = email;
    }
}