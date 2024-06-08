function cadastrar() {
    const usuario = document.getElementById('usuario').value;
    const nome = document.getElementById('nome').value;
    const cnpj = document.getElementById('cnpj').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    var id = Math.random().toString(16).slice(2);

    const barbearia = new Barbearia(usuario,senha, nome, cnpj, email, id, imagePerfil='https://as1.ftcdn.net/v2/jpg/02/01/33/54/1000_F_201335438_CNpY0iWaXXAV95Gj8BPB0tEJlMcxWeaZ.jpg' ,imageBanner = 'https://as1.ftcdn.net/v2/jpg/02/01/33/54/1000_F_201335438_CNpY0iWaXXAV95Gj8BPB0tEJlMcxWeaZ.jpg');

    let barbeariaList = JSON.parse(localStorage.getItem('barbearia') || '[]');

    barbeariaList.push(barbearia);
    localStorage.setItem('barbearia', JSON.stringify(barbeariaList));
};

window.cadastrar = cadastrar;