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
    renderMenuVisitante('../novo-usuario/novo-usuario.html','../login/login.html');
};




//função do header
function renderMenuUsuario(imagePerfil, perfilHref, configHref){
    boxMenu.innerHTML += `
        <div class="user-menu" >
            <img src="${imagePerfil}" id="OpenMenu" alt="">

            <div class="menu " id="menu">
                <ul>
                    <li><button onclick="perfil()">Perfil</button></li>
                    <li><button onclick="config()">Configurações</button></li>
                    <li><button onclick="sair()">Sair</button></li>
                </ul>
            </div>
        </div>
    `
    document.getElementById('OpenMenu').addEventListener('click', ()=>{

        let btnMenu = document.getElementById('menu'); 

        if (btnMenu.classList.contains('open')) {
            btnMenu.classList.remove('open');
        } else {
            btnMenu.classList.add('open');
        }
    });


    window.perfil = function() {
        window.location.href = perfilHref;
    };

    window.config = function() {
        window.location.href = configHref;
    };


    window.sair = function(){
        localStorage.removeItem('userLogado');

        localStorage.removeItem('token');
        window.location.href = '../login/login.html';
    };


};

function renderMenuVisitante(cadastrarHref, loginHref){
    boxMenu.innerHTML += `
    <div class="login">
        <button onclick="cadastra()">Cadastrar</button>
        <button onclick="login()">Login</button>
    </div>
    `

    window.cadastra = function(){
        window.location.href = cadastrarHref;
    };

    window.login = function(){
        window.location.href = loginHref;
    };

}