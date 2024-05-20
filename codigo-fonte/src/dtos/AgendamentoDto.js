export default class Agendamento {
    data
    horario
    servico
    usuario
    barbearia
    barbeiro

    constructor(data, horario, servico, usuario, barbearia, barbeiro) {
        this.data = data;
        this.horario = horario;
        this.servico = servico;
        this.usuario = usuario;
        this.barbearia = barbearia;
        this.barbeiro = barbeiro;
    }
}