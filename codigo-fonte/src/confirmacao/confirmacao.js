let boxMenu = document.getElementById('box-menu');
let box = document.getElementById('box');
const currentUrl = window.location.href;
let id = currentUrl.split("?id=")[1];

let confirmAgendamento = userLogado.agendamentos.find(b => b.id == id);
console.log(confirmAgendamento);


RenderAgendamento(confirmAgendamento);


function RenderAgendamento(b) {
    const servico = b.servico.split(":");

    box.innerHTML += `
      <div class="box-title">Resumo do Agendamento</div>
            <div class="label-group">
                <label for="name">Barbearia: <span class="right-text">${b.barbearia.nome}</span></label>
            </div>
            <div class="label-group">
                <label for="email">Cliente: <span class="right-text">${b.usuario}</span></label>
            </div>
            <div class="label-group">
                <label for="message">Dia/Horario: <span class="right-text">${b.data}/${b.horario}</span></label>
            </div>
            <div class="label-group">
                <label for="message">Profissional: <span class="right-text">${b.barbeiro.nome}</span></label>
            </div>
            <div class="label-group">
                <label for="message">Servico: <span class="right-text">${servico[0]}</span></label>
            </div>
            <div class="label-group">
                <label for="message">Valor: <span class="right-text">${servico[1]}</span></label>
            </div>
            <div class="button-group">
                <button class="yellow-button" type="button" onclick="concluir()">Concluir</button>
            </div>
    `


window.concluir = function() {
    alert('agendamento feito com sucesso!');

    window.location.href = '../index.html'
}



} 



//verificação do header
if (userLogado) {
    if (userLogado.hasOwnProperty('cnpj')) {
        renderMenuUsuario(userLogado.imagePerfil, '../feed/index.html', '../configurações/index.html', '../login/login.html');
    } else {
        renderMenuUsuario(userLogado.imagePerfil, '../feed/index.html', '../configurações/index.html', '../login/login.html');
    }
} else {
    renderMenuVisitante('../novo-usuario/novo-usuario.html','../login/login.html');
};



