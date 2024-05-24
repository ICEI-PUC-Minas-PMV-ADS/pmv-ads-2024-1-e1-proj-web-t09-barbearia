const textUser = document.querySelector('.text-user');

const btnMenu = document.getElementById('imgMenu');
const btnSair = document.getElementById('btnSair');

let imgPerfil = document.getElementById('imgPerfil');


let barbearia = JSON.parse(localStorage.getItem('barbearia'))
let userLogado = JSON.parse(localStorage.getItem('userLogado'));

let imagemDoPerfil;// alterar nome
let imagemDoPerfil2;// alterar nome

let imageDoBanner;// alterar nome
let imageDoBanner2;// alterar nome


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



function voltar() {
    window.location = '../feed/index.html';
};




document.getElementById('img-perfil').addEventListener('change', function() {
    const reader = new FileReader();

    reader.addEventListener("load", ()=>{

        userLogado.imagePerfil = reader.result;

        localStorage.setItem('userLogado', JSON.stringify(userLogado));

        imagemDoPerfil = barbearia ? barbearia.find(b => b.usuario == userLogado.usuario):undefined;
    
        imagemDoPerfil.imagePerfil = reader.result;
        imgPerfil.src = imagemDoPerfil.imagePerfil; 
        localStorage.setItem('barbearia', JSON.stringify(barbearia));
        
    });

    reader.readAsDataURL(this.files[0]);
}); 


imagemDoPerfil2 = barbearia ? barbearia.find(b => b.usuario == userLogado.usuario):undefined;


imgPerfil.src = imagemDoPerfil2.imagePerfil;


document.getElementById('img-banner').addEventListener('change', function () {
    const reader = new FileReader();

    reader.addEventListener("load", () => {

        userLogado.imageBanner = reader.result;

        localStorage.setItem('userLogado', JSON.stringify(userLogado));

        imageDoBanner = barbearia ? barbearia.find(b => b.usuario == userLogado.usuario):undefined;

        imageDoBanner.imageBanner = reader.result;

        localStorage.setItem('barbearia', JSON.stringify(barbearia));

    });

    reader.readAsDataURL(this.files[0]);

});