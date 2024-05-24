let userLogado = JSON.parse(localStorage.getItem('userLogado'));
let boxMenu = document.getElementById('box-menu');

if (userLogado) {
    if (userLogado.hasOwnProperty('cnpj')) {
        boxMenu.innerHTML += `
                <div class="user-menu" >
                    <img src="./assets/img/barbeiro1.jpg" alt="">

                    <div class="menu" id="menu" >
                        <ul>
                            <li><button id="btn-perfil">Perfil</button></li>
                            <li><button id="">Configurações</button></li>
                            <li><button id="">Sair</button></li>
                        </ul>
                    </div>
                </div>
        `
    } else {
        

    }



} else {

    boxMenu.innerHTML += `
            <div class="login">
                <a href="../src/novo-usuario/novo-usuario.html">Cadastrar</a>
                <a href="../src/login/login.html">Login</a>
            </div>
    `

}





let btnPerfil = document.getElementById('btn-perfil').addEventListener('click',()=>{
    window.location.href = '../src/feed/index.html'
})