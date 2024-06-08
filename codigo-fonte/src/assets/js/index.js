let boxMenu = document.getElementById('box-menu');
const userLogado = JSON.parse(localStorage.getItem('userLogado'));
//verificando o header
cadastraBarbeariaPadrao();

if (userLogado) {
    if (userLogado.hasOwnProperty('cnpj')) {
        renderMenuUsuario(userLogado.imagePerfil, './feed/index.html', 'configurações/index.html', './login/login.html');
        
    } else {
        renderMenuUsuario(userLogado.imagePerfil, './feed/index.html', 'configurações/index.html', './login/login.html');
    }
} else {
    renderMenuVisitante('./novo-usuario/novo-usuario.html','./login/login.html');
}

function cadastraBarbeariaPadrao() {
    console.log('chegou');
    const barbearias = JSON.parse(localStorage.getItem('barbearia'));

    if (!barbearias) {
        barbeariaPadrao = [{
            usuario: 'barbeariaPadrao',
            senha: 12345,
            nome: 'Joaozinho Barber',
            cnpj: '26.843.189/0001-78',
            email: 'barbeariaPadroa@gmail.com',
            id: Math.random().toString(16).slice(2),
            imagePerfil: '' ,
            imageBanner: '',
            barbeiros: [{
                nome: 'Joaozinho',
                senha: 12345,
                email: 'barbeiroPadrao@gmail.com',
                id: Math.random().toString(16).slice(2)
            }]
        }]

        localStorage.setItem('barbearia', JSON.stringify(barbeariaPadrao));
    }
}

