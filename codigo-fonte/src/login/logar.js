function logar() {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    user = JSON.parse(localStorage.getItem('user'));
    barbearia = JSON.parse(localStorage.getItem('barbearia'));

    const barberValid = barbearia ? barbearia.find(b => b.usuario == usuario && b.senha == senha) : undefined;
    const userValid = user ? user.find(b => b.usuario == usuario && b.senha == senha) : undefined;

    if (userValid) { 
        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
        localStorage.setItem('token', token);
        window.location.href = '../feed-user/index.html';

        localStorage.setItem('userLogado', JSON.stringify(userValid));
    } else if (barbearia) {
        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
        localStorage.setItem('token', token);
        window.location.href = '../feed/index.html';

        localStorage.setItem('userLogado', JSON.stringify(barberValid));
    } else {
        console.log('barbeiro ou usuario não logado');
    }
}