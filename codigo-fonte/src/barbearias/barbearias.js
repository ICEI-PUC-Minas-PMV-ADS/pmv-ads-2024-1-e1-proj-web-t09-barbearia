    const textUser = document.querySelector('.text-user');

    const btnMenu = document.getElementById('imgMenu');
    const btnSair = document.getElementById('btnSair');

    const cardGroup = document.getElementById('card-group');

    const imgPerfil = document.getElementById('imgPerfil');

    let barbeaira = JSON.parse(localStorage.getItem('barbearia'));

    let userLogado = JSON.parse(localStorage.getItem('userLogado'));
    
    if (userLogado.hasOwnProperty('cnpj')) {

        imgPerfil.src = userLogado.imagePerfil;


        function perfil(){
            window.location.href = '../feed/index.html'
        }
    } else { 
        imgPerfil.src = userLogado.imagePerfil;

        function perfil(){
            window.location.href = '../feed-user/index.html'
        }
    }

  

    function deslogar(){

        localStorage.removeItem('userLogado');

        localStorage.removeItem('token');
        window.location.href = '../login/login.html';
    }



    btnMenu.addEventListener('click', () => {
        if (btnSair.classList.contains('open')) {
            btnSair.classList.remove('open');
        } else {
            btnSair.classList.add('open');
        }
    });

    function cards(){

        barbeaira.forEach(b => {
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





