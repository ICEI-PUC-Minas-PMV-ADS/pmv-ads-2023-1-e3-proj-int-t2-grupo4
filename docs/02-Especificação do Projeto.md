# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Maria Luiza | Alguma forma de poder diminuir as filas na hora de realizar os registros de chegada/saída. | Ter mais tempo para se concentrar no trabalho.  |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID   | Descrição do Requisito  | Prioridade |
|-----|-----------------------------------------|----|
|RF-01| Efetuar login | ALTA |
|RF-02| Registrar entrada/saída | ALTA |
|RF-03| Mostrar na tela o horário previsto de entrada | MÉDIA |
|RF-04| Mostrar o horário que foi registrada a entrada | ALTA |
|RF-05| Mostrar o tempo que se passou desde a entrada no sistema | MÉDIA |
|RF-06| Mostrar o tempo restante de trabalho e o horário previsto de saída | MÉDIA |
|RF-07| Histórico dos dias anteriores | MÉDIA |
|RF-08| Alerta caso entrada saída/fora do horário previsto | ALTA |
|RF-09| Alerta quando faltar 05 min para saída | ALTA |
|RF-10| Saldo do banco de horas | MÉDIA |
|RF-11| Configurar horário de entrada e duração da jornada | MÉDIA |


### Requisitos não Funcionais

|ID    | Descrição do Requisito  |Prioridade |
|------|-------------------------|----|
|RNF-01| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-02| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-03| Linguagem react Native |  ALTA | 
|RNF-04| Executável em iOS e Android |  ALTA | 
|RNF-05| Disponível offline | BAIXA |
|RNF-06| O sistema deve ser capaz de lidar com o número necessário de usuários sem queda no desempenho | MÉDIA |
|RNF-07| O sistema deve estar disponível quando necessário | ALTA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
