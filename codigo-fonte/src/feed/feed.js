const textUser = document.querySelector('.text-user');

const btnMenu = document.getElementById('imgMenu');
const btnSair = document.getElementById('btnSair');

let imgUsuario = document.getElementById('imgUsuario');
let imgPerfil = document.getElementById('imgPerfil');

let nameBarber = document.getElementById('nameBarber');

let userLogado = JSON.parse(localStorage.getItem('userLogado'));

nameBarber.innerHTML = `${userLogado.nome}`;




function deslogar() {

    localStorage.removeItem('userLogado');

    localStorage.removeItem('token');
    window.location.href = '../login/login.html';
};


btnMenu.addEventListener('click', () => {
    if (btnSair.classList.contains('open')) {
        btnSair.classList.remove('open');
    } else {
        btnSair.classList.add('open');
    }
});


imgUsuario.src = userLogado.imagePerfil;
imgPerfil.src = userLogado.imagePerfil;



