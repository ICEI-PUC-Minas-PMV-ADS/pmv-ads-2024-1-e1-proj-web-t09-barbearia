const wrapperBarbearias = document.getElementById('wrapper-barbearias');
let boxMenu = document.getElementById('box-menu');


if(userLogado){
    if (userLogado.hasOwnProperty('cnpj')) {
        renderMenuUsuario(userLogado.imagePerfil, '../feed/index.html', '../configurações/index.html', '../login/login.html');
    } else {
        renderMenuUsuario(userLogado.imagePerfil, '../feed/index.html', '../configurações/index.html', '../login/login.html');
    }
} else {
    renderMenuVisitante('../novo-usuario/novo-usuario.html','../login/login.html');
}


function agendar() {

    const data = document.getElementById('data').value;
    const hora  = document.getElementById('hora').value;
    const servico = document.getElementById('servico').value;

    const currentUrl = window.location.href;

    console.log(currentUrl.split("?id=")[1]);

    let userLogado = JSON.parse(localStorage.getItem('userLogado'));

    
    let newAgendamento = new Agendamento(data, hora, servico, barbeiro='', barbeaira='barberShop');

    if (userLogado.agendamentos && userLogado.agendamentos.length > 0) {

        userLogado.agendamentos.push(newAgendamento);

        localStorage.setItem('userLogado', JSON.stringify(userLogado));

    } else {
        userLogado.agendamentos = [newAgendamento];
        localStorage.setItem('userLogado', JSON.stringify(userLogado));
    }
}



function cards(){
    let currentUrl = window.location.href;
    let id = currentUrl.split("?id=")[1];
    let barbeirosList = barbearias.find(b => b.id == id).barbeiros;
    
    barbeirosList.forEach(b => {
        wrapperBarbearias.innerHTML += `
            <div class="form">
                    <img width="310" height="300" src="${b.imageBarbeiro}">
                    <p>${b.nome}<br>Disponível de 9:00 ás 19:00</p>
                    <label class="formulario" for="data"><strong>Data do Agendamento:</strong></label>
                    <input class="formulario" type="date" name="dt"><br>
                    <label class="formulario" for="hora"><strong>Horário Agendamento:<strong></label>
                    <input class="formulario" type="time" id="hora" name="horacadastro"><br>
                    <label class="formulario" for="Serviços">Serviços</label>

                <select name="Serviços">
                    <option value="" Selecione um serviço></option>
                    <option value="Cabelo">Cabelo</option>
                    <option value="Barba">Barba</option>
                    <option value="Pintura">Pintura</option>
                </select>
                <button class="agenda" onclick="agendar()">Agendar</button>
            </div>
        
        `
    });
}

cards();