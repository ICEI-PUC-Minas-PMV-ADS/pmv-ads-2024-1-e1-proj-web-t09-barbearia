barbearia = JSON.parse(localStorage.getItem('barbearia'));
user = JSON.parse(localStorage.getItem('user'));
userLogado = JSON.parse(localStorage.getItem('userLogado'));

let boxMenu = document.getElementById('box-menu');


//verificação do header
if (userLogado) {
    if (userLogado.hasOwnProperty('cnpj')) {
        renderMenuUsuario(userLogado.imagePerfil, '../feed/index.html', '../configurações/index.html');
    } else {
        renderMenuUsuario(userLogado.imagePerfil, '../feed/index.html', '../configurações/index.html');
    }
} else {
    renderMenuVisitante();
};


