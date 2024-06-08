
let boxMenu = document.getElementById('box-menu');
const currentUrl = window.location.href;
const id = currentUrl.split("?id=")[1];
const agendamento = usuarioLogado.agendamentos.find(a => a.id === id);
console.log(agendamento);

function confirmar() {
    window.location.href = `../confirmacao/confirmacao.HTML?id=${id}`  
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

