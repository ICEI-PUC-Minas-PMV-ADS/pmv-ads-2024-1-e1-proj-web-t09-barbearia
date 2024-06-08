
let boxMenu = document.getElementById('box-menu');
let nameBarber = document.getElementById('nameBarber');
let imgUsuario = document.getElementById('imgUsuario');
const historico = document.getElementById('historico')
let cadastroBarber = document.getElementById('cadastroBarber');

// verificando se o usuario e um cliente ou um barbeiro ou um visitante / se não é um barbeiro não tem acesso a algumas funções 
if(userLogado){
    if(userLogado.hasOwnProperty('cnpj')){
        renderMenuUsuario(userLogado.imagePerfil, '../feed/index.html', '../configurações/index.html','../login/login.html');
        nameBarber.innerHTML = `${userLogado.nome}`;
        imgUsuario.src = userLogado.imagePerfil;
        }else{
        renderMenuUsuario(userLogado.imagePerfil, '../feed/index.html', '../configurações/index.html','../login/login.html');
        nameBarber.innerHTML = `${userLogado.usuario}`;
        cadastroBarber.classList.add('cadastroBarber');
        imgUsuario.src = userLogado.imagePerfil;
    }
}else{
    renderMenuVisitante('../novo-usuario/novo-usuario.html','../login/login.html')
}

preencheHistorico();
function preencheHistorico() {
    userLogado.agendamentos.forEach(a => {
        historico.innerHTML += `<div class="card">
        <div class="agendamento">
            <p>Barbearia: ${a.barbearia.nome}</p>
            <p>Barbeiro: ${a.barbeiro.nome}</p>
        </div>
        <div class="result-agendamento">
            <p>Data: ${a.data}</p>
            <p>Horario: ${a.horario}</p>
            <p>serviço: ${a.tipoServico}</p>
            <p>Valor: ${a.valorServico}</p>
        </div>
        </div>`
    });
}


