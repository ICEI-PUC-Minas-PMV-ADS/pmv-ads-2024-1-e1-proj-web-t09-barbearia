function renderMenuUsuario(imagePerfil, perfilHref, configHref, sairHref) {
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
        btnMenu.classList.add('open')
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
        window.location.href = sairHref;
    }
}

function renderMenuVisitante(cadastrarHref, loginHref) {
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

document.addEventListener('DOMContentLoaded', () => {
    const menuMobile = document.getElementById('menu-mobile');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuMobile.addEventListener('click', () => {

        if (mobileMenu.style.display === 'block') {
            mobileMenu.style.display = 'none';
        } else {
            mobileMenu.style.display = 'block';
        }
    });
});