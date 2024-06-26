const textUser = document.querySelector('.text-user');
const cardGroup = document.getElementById('card-group');
let boxMenu = document.getElementById('box-menu');
cards();

function select(barbearia) {
    window.location.href = `../agendamento/agendamento.HTML?id=${barbearia.getAttribute("id")}`
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
}

// função para colocar cards na tela de acordo com o numero de barbeiro cadastrados
function cards() {
    barbearias.forEach(b => {
        cardGroup.innerHTML += `
            <div class="card">
                <div class="image-barbearia">
                    <img src="${b.imageBanner}" alt="">
                </div>
                <div class="text-barbearia">
                    <h2 class="nameBarbearia">${b.nome}</h2>
                    <p class="endereco">${b.addressBarber ? b.addressBarber : 'Endereço não definido'}</p>
                </div>
                <div class="btn-barbearia">
                        <button class="btn" id="${b.id}" onclick="select(this);">Selecionar</button>
                </div>
            </div>
        `
    })
}