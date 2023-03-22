# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

# Plano de Testes de Software
Os testes funcionais a serem realizados no aplicativo são descritos a seguir.
 
| **Caso de Teste** 	| **CT-01 – Acesso a página "Home e cadastro"** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-01 - Deve possuir tela de cadastro com informações básicas do usuário. |
| Objetivo do Teste 	| Acessar a página "Cadastro" e utilizar suas funcionalidades |
| Passos 	| - Acessar o aplicativo <br> - Clicar em CADASTRE-SE <br> - Preencher os campos obrigatórios <br> - Clicar em "Cadastrar" |
|Critério de Êxito | - O cadastro foi realizado com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-02 – Efetuar login**	|
|Requisito Associado | RF-02 - Deve possuir tela login para usuários já cadastrados. |
| Objetivo do Teste 	| Verificar se o usuário é capaz de realizar login. |
| Passos 	| - Acessar o aplicativo <br> - Clicar no botão de Login <br> - Preencher o campo de id <br> - Preencher o campo da senha <br> - <br> - Clicar em "Login" |
|Critério de Êxito | - O login foi realizado com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-03 – Registrar entrada/saída**	|
|Requisito Associado | RF-03	- Deve possibilitar o registro de entrada e saída do usuário. |
| Objetivo do Teste 	| Verificar se o usuário consegue registrar seu horário de entrada e sáida no sistema. |
| Passos 	| - Fazer o login <br> - Clicar na opção ENTRADA e, posteriormente, clicar na opção SAIDA |
|Critério de Êxito | - Registro dos horário de entrada e saída corretamente no aplicativo. |
|  	|  	|
| **Caso de Teste** 	| **CT-04 – Mostrar o horário registrado**	|
|Requisito Associado | RF-04	- O aplicativo deve exibir o último registro de entrada/saída no dia. |
| Objetivo do Teste 	| Verificar se o usuário consegue visualizar o horário de seu último registro no dia. |
| Passos 	| - Fazer o login <br> - Clicar na opção ENTRADA <br> - Verificar o horário exibido na tela <br> - Clicar na opção SAIDA <br> - Verificar o horário exibido na tela |
|Critério de Êxito | - Exibição correta do último registro do dia seja de entrada ou saída |
|  	|  	|
| **Caso de Teste** 	| **CT-05 – Mostrar o tempo que se passou desde a entrada no sistema**	|
|Requisito Associado | RF-05	- Deve disponibilizar ao usuário cronômetro medindo o tempo desde sua última entrada no sistema. |
| Objetivo do Teste 	| Verificar se o aplicativo exibe corretamente o cronômetro do tempo de entrada no sistema. |
| Passos 	| - Fazer o login <br> - Clicar na opção ENTRADA <br> - Verificar se o aplicativo exibo o cronômetro. |
|Critério de Êxito | - Exibição do cronômetro após entrada no sistema |
|  	|  	|
 
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
