const textUser = document.querySelector('.text-user')

const btnMenu = document.getElementById('imgMenu')
const btnSair = document.getElementById('btnSair')



let nameBarber = document.getElementById('nameBarber')

let BarberLogado = JSON.parse(localStorage.getItem('barberLogado'))

nameBarber.innerHTML = `${BarberLogado.nome}`



function deslogar(){

    localStorage.removeItem('barberLogado')

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

