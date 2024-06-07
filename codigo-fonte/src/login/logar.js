window.alert('Seja bem vindo! Digite o seu nome de usuário e senha. ')
function color() {
    let botao = document.querySelector('button.btn')
    botao.style.background = 'yellow';
}
function sair() {
    let btn = document.querySelector('button.btn')
    btn.style.background = 'darkslateblue'
}
function logar() {
    const usuario = document.getElementById('usuario').value;

    const senha = document.getElementById('senha').value;

    let userValid;
    let barberValid;


    user = JSON.parse(localStorage.getItem('user'));

    barbearia = JSON.parse(localStorage.getItem('barbearia'));

    barberValid = barbearia ? barbearia.find(b => b.usuario == usuario && b.senha == senha) : undefined;

    userValid = user ? user.find(b => b.usuario == usuario && b.senha == senha) : undefined;


    if (userValid && usuario == userValid.usuario && senha == userValid.senha) {
        console.log('usuario logado');
        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
        localStorage.setItem('token', token);

        window.location.href = '../feed/index.html';
        localStorage.setItem('userLogado', JSON.stringify(userValid));
    } else if (barberValid && usuario == barberValid.usuario && senha == barberValid.senha) {
        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
        localStorage.setItem('token', token);

        window.location.href = '../feed/index.html';
        localStorage.setItem('userLogado', JSON.stringify(barberValid));
    } else {
        console.log('barbeiro ou usuario não logado');
    }
};