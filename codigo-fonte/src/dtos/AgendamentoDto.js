class Agendamento {
    usuario
    barbearia
    barbeiro
    servico 
    data
    horario

    constructor(data, horario, servico, usuario, barbearia, barbeiro) {
        this.usuario = usuario;
        this.servico = servico;
        this.data = data;
        this.horario = horario;
        this.barbearia = barbearia;
        this.barbeiro = barbeiro;
    }
}