function cadastrar(){
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    const nomeCompleto = document.getElementById('nomeCompleto').value;
    const email = document.getElementById('email').value;

    const user = new Usuario(usuario, senha, nomeCompleto, email, imagePerfil = 'https://as1.ftcdn.net/v2/jpg/02/01/33/54/1000_F_201335438_CNpY0iWaXXAV95Gj8BPB0tEJlMcxWeaZ.jpg');


    let userList = JSON.parse(localStorage.getItem('user')|| '[]');

    userList.push(user);

    localStorage.setItem('user', JSON.stringify(userList));

};


window.cadastrar = cadastrar;