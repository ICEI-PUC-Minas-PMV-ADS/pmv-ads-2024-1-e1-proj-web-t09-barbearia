class Usuario {
    usuario
    senha
    nomeCompleto
    email
    logado
    
    constructor(usuario, senha, nomeCompleto, email) {
        this.usuario = usuario;
        this.senha = senha;
        this.nomeCompleto = nomeCompleto;
        this.email = email;
        this.logado = false;
    }
}