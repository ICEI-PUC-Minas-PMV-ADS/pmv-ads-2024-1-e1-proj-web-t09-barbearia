let boxMenu = document.getElementById('box-menu');


let btnEnviar = document.getElementById('btnEnviar');
let banner = document.getElementById('banner');
let address = document.getElementById('address');


let barbearia; // feito
let user;  // feito

// verificando se o usuario e um cliente ou um barbeiro ou um visitante / se não é um barbeiro não tem acesso a algumas funções 

if (userLogado) {
    if (userLogado.hasOwnProperty('cnpj')) {
        renderMenuUsuario(userLogado.imagePerfil, '../feed/index.html', '../configurações/index.html', '../login/login.html');
    } else {
        renderMenuUsuario(userLogado.imagePerfil, '../feed/index.html', '../configurações/index.html', '../login/login.html');
        address.classList.add('address');
        banner.classList.add('banner');
        btnEnviar.classList.add('btnEnviar');


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

            barbearia = barbearias ? barbearias.find(b => b.usuario == userLogado.usuario) : undefined;

            barbearia.imagePerfil = reader.result;

            let OpenMenu = document.getElementById('OpenMenu');
            OpenMenu.src = barbearia.imagePerfil;

            localStorage.setItem('barbearia', JSON.stringify(barbearias));

       } else {

            user = users ? users.find(b => b.usuario == userLogado.usuario):undefined;
            
            user.imagePerfil = reader.result;

            let OpenMenu = document.getElementById('OpenMenu');
            OpenMenu.src = user.imagePerfil;

            localStorage.setItem('user', JSON.stringify(users));
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

        barbearia = barbearias ? barbearias.find(b => b.usuario == userLogado.usuario) : undefined;

        barbearias[barbearias.indexOf(barbearia)].imageBanner = reader.result;

        localStorage.setItem('barbearia', JSON.stringify(barbearias));

    });

    reader.readAsDataURL(this.files[0]);

});

function enviar() {
    let end = document.getElementById('addressBarber').value
    userLogado.addressBarber = end;
    localStorage.setItem('userLogado', JSON.stringify(userLogado));

    barbearia = barbearias ? barbearias.find(b => b.usuario == userLogado.usuario) : undefined;
    barbearias[barbearias.indexOf(barbearia)].addressBarber = end;

    localStorage.setItem('barbearia', JSON.stringify(barbearias));

}



