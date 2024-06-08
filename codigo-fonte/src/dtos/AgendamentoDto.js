class Agendamento {
    usuario
    barbearia
    barbeiro
    servico 
    data
    horario
    id

    constructor(data, horario, servico, usuario, barbearia, barbeiro, id) {
        this.usuario = usuario;
        this.servico = servico;
        this.data = data;
        this.horario = horario;
        this.barbearia = barbearia;
        this.barbeiro = barbeiro;
        this.id = id;
    }
}