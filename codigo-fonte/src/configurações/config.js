
barbearia = JSON.parse(localStorage.getItem('barbearia'));
user = JSON.parse(localStorage.getItem('user'));
userLogado = JSON.parse(localStorage.getItem('userLogado'));


let boxMenu = document.getElementById('box-menu');


let enviar = document.getElementById('enviar');
let banner = document.getElementById('banner');
let address = document.getElementById('address');


let barbearias; // feito
let users;  // feito

// verificando se o usuario e um cliente ou um barbeiro ou um visitante / se não é um barbeiro não tem acesso a algumas funções 

if (userLogado) {
    if (userLogado.hasOwnProperty('cnpj')) {
        renderMenuUsuario(userLogado.imagePerfil, '../feed/index.html', '../configurações/index.html');
    } else {
        renderMenuUsuario(userLogado.imagePerfil, '../feed/index.html', '../configurações/index.html');
        address.classList.add('address');
        banner.classList.add('banner');
        enviar.classList.add('enviar');


    }
} else {
    renderMenuVisitante('../novo-usuario/novo-usuario.html','../login/login.html');
};




//troca de imagens de perfil de barbeiro e usuario e troca de banner do barbeiro

//troca de perfil
document.getElementById('img-perfil').addEventListener('change', function() {
    const reader = new FileReader();

    reader.addEventListener("load", ()=>{

        userLogado.imagePerfil = reader.result;

        localStorage.setItem('userLogado', JSON.stringify(userLogado));

       if (userLogado.hasOwnProperty('cnpj')) {
            barbearias = barbearia ? barbearia.find(b => b.usuario == userLogado.usuario):undefined;
            
            barbearias.imagePerfil = reader.result;

            let OpenMenu = document.getElementById('OpenMenu');
            OpenMenu.src = barbearias.imagePerfil;

            localStorage.setItem('barbearia', JSON.stringify(barbearia));

       } else {

            users = user ? user.find(b => b.usuario == userLogado.usuario):undefined;
            
            users.imagePerfil = reader.result;

            let OpenMenu = document.getElementById('OpenMenu');
            OpenMenu.src = users.imagePerfil;

            localStorage.setItem('user', JSON.stringify(user));
       }  
    });
    reader.readAsDataURL(this.files[0]);
}); 

//troca de banner
document.getElementById('img-banner').addEventListener('change', function () {
    const reader = new FileReader();

    reader.addEventListener("load", () => {

        userLogado.imageBanner = reader.result;

        localStorage.setItem('userLogado', JSON.stringify(userLogado));

        barbearias = barbearia ? barbearia.find(b => b.usuario == userLogado.usuario) : undefined;

        barbearia[barbearia.indexOf(barbearias)].imageBanner = reader.result;

        localStorage.setItem('barbearia', JSON.stringify(barbearia));

    });

    reader.readAsDataURL(this.files[0]);

});



//header em cada pagina
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


