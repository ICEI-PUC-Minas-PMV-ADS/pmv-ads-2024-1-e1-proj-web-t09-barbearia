class Agendamento {
    usuario
    barbearia
    barbeiro
    servico 
    data
    horario
    id
    tipoServico
    valorServico

    constructor(data, horario, servico, usuario, barbearia, barbeiro, id) {
        this.usuario = usuario;
        this.servico = servico;
        this.data = data;
        this.horario = horario;
        this.barbearia = barbearia;
        this.barbeiro = barbeiro;
        this.id = id;
        this.valorServico = servico.split(':')[1];
        this.tipoServico = servico.split(':')[0];
    }
}