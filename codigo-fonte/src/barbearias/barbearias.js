    const textUser = document.querySelector('.text-user');

    const cardGroup = document.getElementById('card-group');

    let boxMenu = document.getElementById('box-menu');




    //verificação do header
    if(userLogado){
        if (userLogado.hasOwnProperty('cnpj')) {
            renderMenuUsuario(userLogado.imagePerfil, '../feed/index.html', '../configurações/index.html', '../login/login.html');
        } else {
            renderMenuUsuario(userLogado.imagePerfil, '../feed/index.html', '../configurações/index.html', '../login/login.html');
        }
    } else {
        renderMenuVisitante('../novo-usuario/novo-usuario.html','../login/login.html')
    }

// função para colocar cards na tela de acordo com o numero de barbeiro cadastrados

    function cards(){
        barbearia.forEach(b => {
            cardGroup.innerHTML += `
                <div class="card">
                    <div class="image-barbearia">
                        <img src="${b.imageBanner}" alt="">
                    </div>
                    <div class="text-barbearia">
                        <h2 class="nameBarbearia">${b.nome}</h2>
                        <p class="endereco">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                    <div class="btn-barbearia">
                            <button class="btn">Selecionar</button>
                    </div>
                </div>
            `
        })
    }
    cards()

    // função do header

   


