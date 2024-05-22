function logar(){
    
    const usuario = document.getElementById('usuario')

    const senha = document.getElementById('senha')

    
    
    let userValid = {
        usuario:'',
        senha:''
    };


    let barberValid = {
        usuario:'',
        senha:'',
        cnpj:'',
        nome:''
    };


    user = JSON.parse(localStorage.getItem('user'));
    
    barbearia = JSON.parse(localStorage.getItem('barbearia'));

    barberValid = barbearia.find(b => b.usuario == usuario && b.senha == senha);
    userValid = user.find(b => b.usuario == usuario && b.senha == senha);


    




    if(usuario.value == userValid.usuario && senha.value == userValid.senha){

        console.log('usuario logado')

        
        
        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
        localStorage.setItem('token', token)


        window.location.href = '../feed-user/index.html'

        localStorage.setItem('userLogado', JSON.stringify(userValid))

    }else if(usuario.value == barberValid.usuario && senha.value == barberValid.senha){

        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
        localStorage.setItem('token', token)

        window.location.href = '../feed/index.html'


        localStorage.setItem('barberLogado', JSON.stringify(barberValid))

    }else{

        console.log('barbeiro ou usuario não logado')

    }





    
    /*
    try {
    let barbeiroEncontrado = barbearia.find(item => item.hasOwnProperty('cnpj') && usuario.value === item.usuario && senha.value === item.senha);

    if (barbeiroEncontrado) {
        console.log('Barbeiro logado');
    } else {
        let usuarioEncontrado = user.find(e => usuario.value === e.usuario && senha.value === e.senha);

        if (usuarioEncontrado) {
            console.log('Usuário logado');
        } else {
            console.log('Usuário/barbearia não cadastrado');
        }
    }
    } catch (error) {
        console.error('deu erro:', error);
    }
    */
    

}