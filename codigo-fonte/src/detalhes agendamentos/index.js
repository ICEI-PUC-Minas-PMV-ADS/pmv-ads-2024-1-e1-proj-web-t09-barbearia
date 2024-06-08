
let boxMenu = document.getElementById('box-menu');
const servicos = document.getElementById('servicos');
const confirma = document.getElementById('confirma');
const currentUrl = window.location.href;
const id = currentUrl.split("?id=")[1];
const agendamento = userLogado.agendamentos.find(a => a.id === id);

preencheConfirma();
preencheServicos();

function confirmar() {
    window.location.href = `../confirmacao/confirmacao.html?id=${id}`  
};

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

// menu mobile
const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

function preencheServicos() {
    servicos.innerHTML = `<div class="card">
        <div class="card-img">
            <img src="${agendamento.barbearia.imageBanner}" alt="">
            </div>
        <div class="card-text">
            <h2>Barbearia: </h2>
            <p>${agendamento.barbearia.nome}</p>
        </div>
        </div>
        <div class="card">
            <div class="card-img">
                <img src="${agendamento.barbeiro.imagem}" alt="">
            </div>
            <div class="card-text">
                <h2>Barbeiro: </h2>
                <p>${agendamento.barbeiro.nome}</p>
            </div>
        </div>
        <div class="card">
            <div class="card-img">
                <img src="../assets/img/serviço-dts.jpg" alt="">
            </div>
            <div class="card-text">
                <h2>Serviço: </h2>
                <p>${agendamento.servico}</p>
            </div>
        </div>`
}

function preencheConfirma() {
    confirma.innerHTML = `<div class="card-confirma">
    <div class="confirma-text">
        <p>Data: ${agendamento.data}</p>
        <p>Hora: ${agendamento.horario}</p>
        <p>Valor:R$20,00</p>
    </div>

    <div class="confirma-btn">
        <button onClick="confirmar();" class="btn">Confirmar</button>
    </div>
    </div>`
}

