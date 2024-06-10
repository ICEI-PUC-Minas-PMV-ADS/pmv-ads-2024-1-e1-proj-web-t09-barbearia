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
    <li>RF-03:	O site deve permitir ao usuário cadastrar uma conta de cliente final.</li>
   <li>RF-06:	O site deve permitir ao usuário fazer o login da sua conta.</li>
   <li>RF-01:	O site deve permitir ao usuário verificar barbearias cadastradas.</li>
    <li>RF-04:	O site deve permitir ao usuário acessar o historico de agendamentos feitos.</li>
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
  <td>CT-02: Verificar a validação do formulário de login </td>
  <td>
   <ul>
   <li>RF-06	A aplicação deve permitir ao usuário fazer o login da sua conta.</li>
    <li>RF-03:	O site deve permitir ao usuário cadastrar uma conta de cliente final.</li>
   <li>RF-10:	Permitir que o dono de uma barbearia seja capaz de cadastra-la. </li>
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
 <td>CT-03: Verificar cadastro de usuário e barbeiro</td>
  <td>
   <ul>
   <li>RF-03:	O site deve permitir ao usuário cadastrar uma conta de cliente final.</li>
   <li>RF-10:	Permitir que o dono de uma barbearia seja capaz de cadastra-la. </li>
   </ul>
  </td>
  <td>Verificar se os dados do usuário estão indo corretamente para o localStorage.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a pagina de cadastro de usuário/barbeiro.</li>
    <li>Digitar os seus dados e cadastrar.</li>
   </ol>
   </td>
  <td>Os dados do usuário irão aparecer no localStorage dentro do Devtools.</td>
  <td>Lucas</td>
 </tr>
</table>


 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
