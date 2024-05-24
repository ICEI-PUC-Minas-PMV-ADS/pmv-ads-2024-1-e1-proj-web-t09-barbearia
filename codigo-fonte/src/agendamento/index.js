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


    console.log(userLogado);
}


