
let boxMenu = document.getElementById('box-menu');
let nameBarber = document.getElementById('nameBarber');
let imgUsuario = document.getElementById('imgUsuario');

let cadastroBarber = document.getElementById('cadastroBarber');

// verificando se o usuario e um cliente ou um barbeiro ou um visitante / se não é um barbeiro não tem acesso a algumas funções 
if(userLogado){
    if(userLogado.hasOwnProperty('cnpj')){
        renderMenuUsuario(userLogado.imagePerfil, '../feed/index.html', '../configurações/index.html','../login/login.html');
        nameBarber.innerHTML = `${userLogado.nome}`;
    }else{
        renderMenuUsuario(userLogado.imagePerfil, '../feed/index.html', '../configurações/index.html','../login/login.html');
        nameBarber.innerHTML = `${userLogado.usuario}`;
        cadastroBarber.classList.add('cadastroBarber');
    }
}else{
    renderMenuVisitante('../novo-usuario/novo-usuario.html','../login/login.html')
}

// aqui coloca a imagem que o usuario no main da tela 
imgUsuario.src = userLogado.imagePerfil;

function listAgendamentos(){
    barbearias.forEach(b => {
        cardGroup.innerHTML += `
            <div class="card">
                <div class="image-barbearia">
                    <img src="${b.imageBanner}" alt="">
                </div>
                <div class="text-barbearia">
                    <h2 class="nameBarbearia">${b.nome}</h2>
                    <p class="endereco">${b.addressBarber}</p>
                </div>
                <div class="btn-barbearia">
                        <button class="btn" id="${b.id}" onclick="select(this);">Selecionar</button>
                </div>
            </div>
        `
    })
}

listAgendamentos();