# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

## Plano de Testes de Funcionalidades
Os testes funcionais a serem realizados no aplicativo são descritos a seguir.
 
| **Caso de Teste** 	| **CT-01 – Acesso a página "Cadastro"** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-01 - Deve possuir tela de cadastro com informações básicas do usuário. |
| Objetivo do Teste 	| Acessar a página "Cadastro" e utilizar suas funcionalidades |
| Passos 	| - Acessar o aplicativo <br> - Clicar em CADASTRE-SE <br> - Preencher os campos obrigatórios <br> - Clicar em "Cadastrar" |
|Critério de Êxito | - O cadastro foi realizado com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-02 – Efetuar login**	|
|Requisito Associado | RF-02 - Deve possuir tela login para usuários já cadastrados. |
| Objetivo do Teste 	| Verificar se o usuário é capaz de realizar login. |
| Passos 	| - Acessar o aplicativo <br> - Clicar no botão de Login <br> - Preencher o campo de id <br> - Preencher o campo da senha <br> - Clicar em "Login" |
|Critério de Êxito | - O login foi realizado com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-03 – Registrar entrada/saída**	|
|Requisito Associado | RF-03	- Deve possibilitar o registro de entrada e saída do usuário. |
| Objetivo do Teste 	| Verificar se o usuário consegue registrar seu horário de entrada e saída no sistema. |
| Passos 	| - Fazer o login <br> - Clicar na opção ENTRADA e, posteriormente, clicar na opção SAIDA |
|Critério de Êxito | - Registro dos horário de entrada e saída corretamente no aplicativo. |
|  	|  	|
| **Caso de Teste** 	| **CT-04 – Mostrar o horário registrado**	|
|Requisito Associado | RF-04	- O aplicativo deve exibir o último registro de entrada/saída no dia. |
| Objetivo do Teste 	| Verificar se o usuário consegue visualizar o horário de seu último registro no dia. |
| Passos 	| - Fazer o login <br> - Clicar na opção ENTRADA <br> - Verificar o horário exibido na tela <br> - Clicar na opção SAIDA <br> - Verificar o horário exibido na tela |
|Critério de Êxito | - Exibição correta do último registro do dia seja de entrada ou saída |
|  	|  	|
| **Caso de Teste** 	| **CT-05 – Editar as informações do Usuário**	|
|Requisito Associado | RF-05	- Deve possibilitar que o usuário possa realizar atualizações em suas informações pessoais. |
| Objetivo do Teste 	| Verificar se o aplicativo fornece a possibilidade de alteração de informações. |
| Passos 	| - Fazer o login <br> - Clicar na opção PERFIL <br> - Clicar na opção ATUALIZAR INFORMAÇÕES <br> - Atualizar informações <br> - Salvar . |
|Critério de Êxito | - Informações atualizadas. |
|  	|  	|
| **Caso de Teste** 	| **CT-06 – Impossibilitar a existência de CPF duplicado**	|
|Requisito Associado | RF-06	- Deve impossibilitar que existam dois CPF iguais cadastrados no sistema. |
| Objetivo do Teste 	| Verificar se o aplicativo exibe corretamente uma mensagem de erro ao duplikcar um CPF. |
| Passos 	| - Fazer o login como administrador <br> - Clicar na opção REGISTRAR USUÁRIO <br> - Preencher os campos com o CPF duplicado <br> - Salvar. |
|Critério de Êxito | - Exibição de uma mensagem de erro. |
|  	|  	|
| **Caso de Teste** 	| **CT-07 – Histórico dos dias anteriores**	|
|Requisito Associado | RF-07	- O aplicativo deve ter opção com histórico dos registros efetuados anteriormente. |
| Objetivo do Teste 	| Verificar se o aplicativo exibe corretamente o histórico dos registros no sistema. |
| Passos 	| - Fazer o login <br> - Clicar na opção HISTÓRICO <br> - Verificar se o aplicativo exibe o histórico dos registros. |
|Critério de Êxito | - Exibição do histórico dos registros sistema |
|  	|  	|
| **Caso de Teste** 	| **CT-08 – Impossibilitar um CPF com mais de 11 digitos**	|
|Requisito Associado | RF-08	- O aplicativo não pode permitir um cadastro de um CPF com mais de 11 digitos. |
| Objetivo do Teste 	| Verificar se o aplicativo exibe corretamente uma mensagem de erro ao cadastrar um CPF inválido. |
| Passos 	| - Fazer o login como administrador <br> - Clicar na opção REGISTRAR USUÁRIO <br> - Preencher os campos com o CPF que contenha mais de 11 digitos <br> - Salvar. |
|Critério de Êxito | - Deve exibir para o administrador uma mensagem de erro. |
|  	|  	|
| **Caso de Teste** 	| **CT-09 – Informações dos Usúarios**	|
|Requisito Associado | RF-09	- Deve exibir para o usuário o saldo de banco de horas. |
| Objetivo do Teste 	| Verificar se aparece as informações do Usuário . |
| Passos 	| - Fazer o login <br> - Verificar se o aplicativo exibe o todas as informações. |
|Critério de Êxito | - Exibição das informações |
|  	|  	|

## Plano de Testes de Usabilidades

Os testes de usabilidade avaliam, não só a experiência dos usuários no momento em que interagem com o sistema, mas também como as funcionalidades e as regras de negócio impactam na interação entre usuário e o sistema. Busca-se testar neste caso se o tipo de informação, a linguagem, o design das páginas e a plataforma tecnológica utilizados proporcionam a eles a melhor experiência possível de uso. 

Os testes terão como objetivos obter respostas para os seguintes pontos:

1)	O sistema é intuitivo e de fácil utilização?
2)	O sistema é responsivo?
3)	Os usuários alcançam seus objetivos em poucos cliques?
4)	A navegabilidade é agradável e fluída?

As dimensões abordadas neste teste de usabilidade serão as seguintes: <br>
Usuários: 03 usuários com idades variando entre 16 e 65 anos com perfil social variado <br>
Ferramenta de Coleta de Dados: Registro de impressões durante a realização do teste de forma presencial <br>
Equipe (Acompanhamento do Teste): O acompanhamento será feito por 01 facilitador/observador	<br>
Report:  O facilitador/observador fará todas as anotações pertinentes em relatório especifico e trará para análise da equipe de desenvolvimento

### Planejamento de realização de testes com usuários definindo as operações que os usuários devem realizar ###

|Caso de Teste | 01 - Verificar responsividade|
|:--|:--|
|**Objetivo do teste**| Avaliar se o sistema é de fácil utilização e responsivo pelos usuários| 
||**Passos**|
||1) Acessar o site|
||2) Efetuar o cadastro como usuário|
||3) Registrar "ENTRADA" no sistema|
||4) Registrar "SAÍDA" no sistema|
||5) Acessar o histórico dos registros na opção "HISTÓRICO"|
||6) Efetuar “LOGOUT”|
|**Critérios de Êxito**|O usuário deve considerar o sistema intuitivo e de fácil utilização|

### Confecção e Analise do relatório ###

O observador irá registrar o tempo para conclusão dos testes, a opinião do usuário em relação ao sistema, sugestões de melhorias e outras observações de utilização que julgar pertinente. A equipe de posse dos relatórios fará a avaliação e ajustes necessários.
 
