const wrapperBarbearias = document.getElementById('wrapper-barbearias');
let boxMenu = document.getElementById('box-menu');
const currentUrl = window.location.href;
const id = currentUrl.split("?id=")[1];

if (userLogado) {
    if (userLogado.hasOwnProperty('cnpj')) {
        renderMenuUsuario(userLogado.imagePerfil, '../feed/index.html', '../configurações/index.html', '../login/login.html');
    } else {
        renderMenuUsuario(userLogado.imagePerfil, '../feed/index.html', '../configurações/index.html', '../login/login.html');
    }
} else {
    renderMenuVisitante('../novo-usuario/novo-usuario.html','../login/login.html');
}

function agendar(barbeiro) {
    const barbeiroId = barbeiro.getAttribute("id");
    const data = document.getElementById('data').value;
    const hora  = document.getElementById('hora').value;
    const servico = document.getElementById('servico').value;
    const currentUrl = window.location.href;
    let newAgendamento = new Agendamento(data, hora, servico, userLogado.usuario, barbearias.find(b => b.id == id), barbearias.find(b => b.id == id).barbeiros.find(b => b.id == barbeiroId), Math.random().toString(16).slice(2));


    

    if (userLogado.agendamentos && userLogado.agendamentos.length > 0) {
        userLogado.agendamentos.push(newAgendamento);
        localStorage.setItem('userLogado', JSON.stringify(userLogado));
    } else {
        userLogado.agendamentos = [newAgendamento];
        localStorage.setItem('userLogado', JSON.stringify(userLogado));
    }

    window.location.href = `../detalhes agendamentos/dts-confirma.html?id=${newAgendamento.id}`
}

function cards() {
    let barbeirosList = barbearias.find(b => b.id == id).barbeiros;
    
    barbeirosList.forEach(b => {
        wrapperBarbearias.innerHTML += `
            <div class="form">
                    <img width="310" height="300" src="${b.imagem}">
                    <p>${b.nome}<br>Disponível de 9:00 ás 19:00</p>
                    <label class="formulario" for="data"><strong>Data do Agendamento:</strong></label>
                    <input class="formulario" id="data" type="date" name="dt"><br>
                    <label class="formulario" for="hora"><strong>Horário Agendamento:<strong></label>
                    <input class="formulario" type="time" id="hora" name="horacadastro"><br>
                    <label class="formulario" for="Serviços">Serviços</label>

                <select name="Serviços" id="servico">
                    <option value="" Selecione um serviço></option>
                    <option value="Cabelo:R$20">Cabelo : R$20</option>
                    <option value="Barba:R$40">Barba : R$40</option>
                    <option value="Pintura:R$60">Pintura : R$60</option>
                </select>
                <button class="agenda" id=${b.id} onclick="agendar(this)">Agendar</button>
            </div>
        
        `
    });
}

cards();