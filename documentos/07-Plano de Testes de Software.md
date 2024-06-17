# Plano de Testes de Software

[Apresente os cenários de testes a serem utilizados na realização dos testes da aplicação. Escolha cenários de testes que demonstrem os requisitos sendo atendidos. ]

Os testes funcionais a serem realizados na aplicação são descritos a seguir. [Utilize a estrutura abaixo para cada caso de teste]

|Caso de Teste    | CT-X - Título Caso de Teste |
|:---|:---|
| Requisitos Associados | RF-X |
| Objetivo do Teste | Descrição do objetivo do teste |
| Passos | Indicar passos para a execução do teste |
| Critérios de êxito | Indicar os critérios de êxito  |
| Responsável pela elaborar do caso de Teste | Nome do integrante da equipe |

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o funcionamento dos links da landing page</td>
  <td>
   <ul>
    <li>RF-08:	Ao clicar em home na landing page, deve permanecer na mesma pagina </li>
    <li>RF-08:	Ao clicar em barbearias, deve encaminhar para pagina de barbearias disponiveis </li>
    <li>RF-08:	Ao clicar em Sobre, a pagina deve descer para a sessao "Sobre" da landing page </li>
    <li>RF-08:	Ao clicar em Blog, a pagina deve descer para a sessao "Blog" da landing page </li>
    <li>RF-08:	Ao clicar em Contato, a pagina deve descer para a sessao "Contato" da landing page </li>
    <li>RF-08:	Deve ter um botao de login e de cadastro, encaminhando o usuario para suas respectivas paginas </li>
   </ul>
  </td>
  <td>Verificar se os links da página Home estão encaminhando para as respectivas páginas corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a landing page.</li>
    <li>Clicar nos links da landing page.</li>
   </ol>
   </td>
  <td>Todos os links da página Home devem encaminhar os usuários para as páginas descritas.</td>
  <td>Pedro</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Verificar funcionamento da pagina de login </td>
  <td>
   <ul>
   <li>RF-06	A aplicação deve permitir ao usuário fazer o login da sua conta. </li>
   <li>RF-06	A aplicação deve permitir ao usuário fazer o login da sua conta de barbeiro. </li>
    <li>RF-03:	O site deve permitir ao usuário cadastrar uma conta de cliente. </li>
   <li>RF-05:	O site deve permitir ao usuário cadastrar uma conta de barbearia </li>
   </ul>
  </td>
  <td>Verificar se os links da página Home e Barbearias estão encaminhando para as respectivas páginas corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Cadastrar novo usuário.</li>
    <li>Entrar na página de login e colocar os dados corretamente.</li>
   </ol>
   </td>
  <td>O usuário sera encaminhado para página feed com os dados cadastrados.</td>
  <td>Felipe</td>
 </tr>
</table>

<table>
  <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <td>CT-03: Verificar cadastro de usuário, barbearia e barbeiro.</td>
  <td>
   <ul>
   <li>RF-03:	O site deve permitir ao usuário cadastrar uma conta de cliente final.</li>
   <li>RF-10:	Permitir que o dono de uma barbearia seja capaz de cadastra-la. </li>
   <li>RF-05:	A aplicação deve permitir que o dono da barbearia cadastre seus barbeiros.</li>
   </ul>
  </td>
  <td>Verificar se os dados do usuário estão indo corretamente para o localStorage.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a pagina de cadastro de usuário/barbeira e cadastro de barbeiros.</li>
    <li>Digitar os seus dados e cadastrar.</li>
   </ol>
   </td>
  <td>Os dados do usuário irão aparecer no localStorage dentro do Devtools.</td>
  <td>Lucas</td>
 </tr>
</table>

<table>
  <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <td>CT-04: Verificar as fucionalidades de agendamentos</td>
  <td>
   <ul>
   <li>RF-06:	A aplicação deve permitir ao usuário fazer o login da sua conta.</li>
   <li>RF-08:	A aplicação deve permitir o usuário a navegar entre paginás.</li>
   <li>RF-07:	A aplicação deve permitir a escolha do serviço sendo eles, corte de cabelo, barba e combo.</li>
   <li>RF-02:	A aplicação deve ser capaz de realizar agendamento com barbeiro escolhido. </li>
   </ul>
  </td>
  <td>Verificar se o usuário consegue selecionar sua barbearia, o seu barbeiro e finalizar o agendamento.</td>
  <td>
   <ol>
    <li>O usuáio deve fazer Login com sua conta.</li>
    <li>Clicar em Barbearias.</li>
    <li>Selecionar a barbearia desejada.</li>
    <li>Selecionar o barbeiro desejado.</li>
    <li>Confirmar o agendamento.</li>
   </ol>
   </td>
  <td>O usuário deve ser encaminhado para a página de confimarção de agendamento e depois voltar para página principal</td>
  <td>Lucas</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-05: Verificar funcionamento do historico de agendamentos </td>
  <td>
   <ul>
   <li>RF-04:	Ao clicar no usuario logado deve permitir visualizar o historico de agendamentos feitos com suas devidas informaçoes </li>
   </ul>
  </td>
  <td>Verificar se os agendamentos sao exibidos no historico de agendamentos corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Cadastrar novo usuário.</li>
    <li>Realizar um agendamento</li>
    <li>Verificar se o agendamento e suas informaçoes sao exibidas no historico de agendamentos</li>
   </ol>
   </td>
  <td>O usuário sera encaminhado para página de usuario com o historico de agendamentos.</td>
  <td>Pedro</td>
 </tr>
</table>


 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
