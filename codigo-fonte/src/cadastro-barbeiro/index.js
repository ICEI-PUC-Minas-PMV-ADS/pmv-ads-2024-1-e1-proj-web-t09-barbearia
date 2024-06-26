let boxMenu = document.getElementById('box-menu');

let imagebarbeiro = '';

let barbearia;

//verificação do header
if(userLogado){
    if (userLogado.hasOwnProperty('cnpj')) {
        renderMenuUsuario(userLogado.imagePerfil, '../feed/index.html', '../configurações/index.html', '../login/login.html');
    } else {
        renderMenuUsuario(userLogado.imagePerfil, '../feed/index.html', '../configurações/index.html', '../login/login.html');
    }
} else {
    renderMenuVisitante('../novo-usuario/novo-usuario.html','../login/login.html');
}




document.getElementById('icone').addEventListener('change', function(){
    const reader = new FileReader();

    reader.addEventListener('load', ()=>{
        imagebarbeiro = reader.result;
        exibirImagemSelecionada(imagebarbeiro);
    });

    reader.readAsDataURL(this.files[0]);
});

function exibirImagemSelecionada(imagebarbeiro) {
    const imgBarber = document.getElementById('imgBarber');
    imgBarber.src = imagebarbeiro;
}




function cadastrar(){
        const nome = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        
        var id = Math.random().toString(16).slice(2);
        
        let newBarbeiro = new Barbeiro(nome, telefone, email, id, imagebarbeiro);

        barbearia = barbearias ? barbearias.find(b => b.usuario == userLogado.usuario) : undefined;

        if (userLogado.barbeiros && userLogado.barbeiros.length > 0) {
        
        userLogado.barbeiros.push(newBarbeiro);
        barbearia.barbeiros.push(newBarbeiro);
        
        localStorage.setItem('barbearia', JSON.stringify(barbearias))
        localStorage.setItem('userLogado', JSON.stringify(userLogado));
        } else {
        
        userLogado.barbeiros = [newBarbeiro];
        barbearia.barbeiros = [newBarbeiro];
    
        localStorage.setItem('barbearia', JSON.stringify(barbearias))
        localStorage.setItem('userLogado', JSON.stringify(userLogado));
    }
}