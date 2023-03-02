# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Maria Luiza tem 43 anos, é formada em engenharia química e trabalha em uma indústria do ramo. A empresa em que ela trabalha possui 7.890 funcionários com horários fixos. Todos trabalham seguindo o modelo presencial em horário comercial, com pequenas exceções quando é necessário trabalhar até mais tarde ou finais de semana. Apesar de possuir vários locais onde eles conseguem bater ponto, nos horários de entrada, saída e almoço, eles acabam perdendo muito tempo, pois ficam filas enormes devido a quantidade de funcionários. 

João Pedro tem 20 anos e trabalha no fórum de sua cidade. O fórum tem poucos funcionários e no setor em que João trabalha, são apenas funcionários terceirizados. Todos eles seguem o modelo presencial com horários fixos e não pode ocorrer um atraso de mais de 5 minutos, porque a empresa que os contratou não permite. No fórum existe apenas um local onde eles batem ponto e é com a máquina cartográfica que carimba o papel, depois a empresa confere. As vezes acontece do horário ser carimbado no lugar errado e então ele tem que levar no Departamento Pessoal da empresa para que arrume manualmente os erros. 

Gabriela tem 34 anos e é gerente de uma startup. Na empresa em que ela trabalha, eles adotaram o modelo remoto de trabalho após a pandemia. Antes, eles batiam ponto por biometria dentro da empresa e agora ficou complicado saber se os funcionários estão realmente cumprindo seu horário de serviço e de fazer o cálculo de horas extras de cada funcionário. 

Murilo tem 27 anos e trabalha no setor de Departamento Pessoal de uma empresa de médio porte. O seu time na empresa tem poucos agentes e os funcionários da empresa batem ponto através da máquina cartográfica. Apesar de não ter muitas pessoas que trabalham nesse local, o Murilo tem que conferir manualmente todos os pontos antes do acerto todos os meses. Com isso, ele tem que dedicar muito tempo para poder conferir um a um. Com esse tempo de trabalho manual, ele poderia se dedicar a novos projetos, pensar em melhorias para o setor, ajudar os outros funcionários que estão na empresa a menos tempo e ainda demandam uma certa atenção, entre diversas outras coisas. 

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Maria Luiza | Alguma forma de poder diminuir as filas na hora de realizar os registros de chegada/saída. | Ter mais tempo para se concentrar no trabalho.  |
| João Pedro  | Conseguir registrar seus horários com uma significativa baixa margem de erro. Além disso, sem que ocorra de se “atrasar” no registro de hora em decorrência da espera na fila do fórum pela quantidade de pessoas.  | Confiabilidade e praticidade para realizar seus registros. |
| Gabriela | Uma forma de registrar os horários dos funcionários. | Poder gerir sua equipe de uma forma mais saudável e justa. |
| Murilo  | Uma forma de automatizar esse longo processo manual que demanda muito tempo. | Otimizar seu trabalho para que assim ele possa realizar novos projetos. |


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

## Diagrama de Casos de Uso

O diagrama contempla as principais ligações entre os casos de uso e permite detalhar os Requisitos Funcionais identificados na etapa anterior.

![Diagrama de Casos de Uso](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-int-t2-grupo4/blob/main/docs/img/casos_de_uso.png)
