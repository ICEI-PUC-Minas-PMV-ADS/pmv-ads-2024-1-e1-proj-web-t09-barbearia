export default class Barbearia {
    usuario
    senha
    nome
    cnpj
    email
    barbeiros
    
    constructor(usuario, senha, nome, cnpj, email) {
        this.usuario = usuario;
        this.senha = senha;
        this.nome = nome;
        this.cnpj = cnpj;
        this.email = email;
    }

    addBarbeiro(ObjetoBarbeiro) {
        this.barbeiros.push(ObjetoBarbeiro);
    }
}