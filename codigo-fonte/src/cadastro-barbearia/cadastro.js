
 function cadastrar(){
    
    const usuario = document.getElementById('usuario').value;
    const nome = document.getElementById('nome').value
    const cnpj = document.getElementById('cnpj').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    const barbearia = new Barbearia(usuario,senha, nome, cnpj, email, imagePerfil='' ,imageBanner = '')


    let barbeariaList = JSON.parse(localStorage.getItem('barbearia') || '[]');
    
    barbeariaList.push(barbearia)

    localStorage.setItem('barbearia', JSON.stringify(barbeariaList))
}


window.cadastrar = cadastrar;