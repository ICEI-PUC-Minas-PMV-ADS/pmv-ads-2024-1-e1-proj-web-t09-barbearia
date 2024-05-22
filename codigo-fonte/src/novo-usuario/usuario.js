function cadastrar(){
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value
    const nomeCompleto = document.getElementById('nomeCompleto').value
    const email = document.getElementById('email').value

    const user = new Usuario(usuario, senha, nomeCompleto, email)


    let userList = JSON.parse(localStorage.getItem('user')|| '[]');

    userList.push(user)

    localStorage.setItem('user', JSON.stringify(userList))

}


window.cadastrar = cadastrar;