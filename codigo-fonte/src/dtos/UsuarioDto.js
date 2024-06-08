class Usuario {
    usuario
    senha
    nomeCompleto
    email
    logado
    imagePerfil

    constructor(usuario, senha, nomeCompleto, email, imagePerfil) {
        this.usuario = usuario;
        this.senha = senha;
        this.nomeCompleto = nomeCompleto;
        this.email = email;
        this.logado = false;
        this.imagePerfil = imagePerfil;
    }
}