class Barbearia {
    usuario
    senha
    nome
    cnpj
    email
    barbeiros = [];
    imagePerfil
    imageBanner
    
    constructor(usuario, senha, nome, cnpj, email) {
        this.usuario = usuario;
        this.senha = senha;
        this.nome = nome;
        this.cnpj = cnpj;
        this.email = email;
        this.barbeiros = [];
        this.imagePerfil = imagePerfil;
        this.imageBanner = imageBanner;
    }

    addBarbeiro(ObjetoBarbeiro) {
        this.barbeiros.push(ObjetoBarbeiro);
    }
}