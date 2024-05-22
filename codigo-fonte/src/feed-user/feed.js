const textUser = document.querySelector('.text-user')

const btnMenu = document.getElementById('imgMenu')
const btnSair = document.getElementById('btnSair')


let nameUser = document.getElementById('nameUser')



let userLogado = JSON.parse(localStorage.getItem('userLogado'))


nameUser.innerHTML = `${userLogado.usuario}`





function deslogar(){

    localStorage.removeItem('userLogado')

    localStorage.removeItem('token')
    window.location.href = '../login/login.html'
}


btnMenu.addEventListener('click', ()=>{
    if(btnSair.classList.contains('open')){
        btnSair.classList.remove('open')
    }else{
        btnSair.classList.add('open')
    }
})


