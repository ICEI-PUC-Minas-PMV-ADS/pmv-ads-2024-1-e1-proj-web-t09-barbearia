let boxMenu = document.getElementById('box-menu');
//verificando o header
cadastraBarbeariaPadrao();
setMenu();

function setMenu() {
    if (userLogado) {
        if (userLogado.hasOwnProperty('cnpj')) {
            renderMenuUsuario(userLogado.imagePerfil, './feed/index.html', 'configurações/index.html', './login/login.html');
        } else {
            renderMenuUsuario(userLogado.imagePerfil, './feed/index.html', 'configurações/index.html', './login/login.html');
        }
    } else {
        renderMenuVisitante('./novo-usuario/novo-usuario.html','./login/login.html');
    }
}

function cadastraBarbeariaPadrao() {
    const barbearias = JSON.parse(localStorage.getItem('barbearia'));

    if (!barbearias) {
        barbeariaPadrao = [{
            usuario: 'barbeariaPadrao',
            senha: 12345,
            nome: 'Joaozinho Barber',
            cnpj: '26.843.189/0001-78',
            email: 'barbeariaPadroa@gmail.com',
            addressBarber: 'Rua joãozinho de carlos, nº:51',
            id: Math.random().toString(16).slice(2),
            imagePerfil: 'https://as1.ftcdn.net/v2/jpg/02/01/33/54/1000_F_201335438_CNpY0iWaXXAV95Gj8BPB0tEJlMcxWeaZ.jpg',
            imageBanner: 'https://i.pinimg.com/originals/45/b5/46/45b54601628e4a3b6466836748f1657a.jpg',
            barbeiros: [{
                nome: 'Joaozinho',
                senha: 12345,
                imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqplPZuSi2djRnGJz1xJHDJ3H2a35w5tc3Yg&s',
                email: 'barbeiroPadrao@gmail.com',
                id: Math.random().toString(16).slice(2)
            }
        ]
        },
        {
            usuario: 'barbeariaPadrao 2',
            senha: 123456,
            nome: 'Joaozinho Barber 2',
            cnpj: '26.843.189/0001-78',
            email: 'barbearia@gmail.com',
            addressBarber: 'Rua joãozinho de carlos dois ponto zero, nº:55',
            id: Math.random().toString(16).slice(2),
            imagePerfil: 'https://as1.ftcdn.net/v2/jpg/02/01/33/54/1000_F_201335438_CNpY0iWaXXAV95Gj8BPB0tEJlMcxWeaZ.jpg',
            imageBanner: 'https://en.idei.club/uploads/posts/2023-06/1687392694_en-idei-club-p-victor-barber-dizain-7.jpg',
            barbeiros: [{
                nome: 'Joaozinho 2',
                senha: 123456,
                imagem:'https://islam.plus/sites/default/files/fatwa/2022/volosy.jpg',
                email: 'barbeiro@gmail.com',
                id: Math.random().toString(16).slice(2)
            }
        ]
        }]

        localStorage.setItem('barbearia', JSON.stringify(barbeariaPadrao));
    }
}


