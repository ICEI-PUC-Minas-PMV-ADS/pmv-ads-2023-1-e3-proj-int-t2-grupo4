# Programação de Funcionalidades

## Cadastro

A Tela "Cadastro" possui um formulário contendo: Nome, e-mail, telefone, nº do Funcionário , senha e confirme sua senha para que seja realizado o cadastro do funcionário.

![cadastro](./img/cadastro.png)

### Requisitos Atendidos:
<ul>
<li>RF-01 Efetuar cadastro  </li>
</ul>

### Teste de Funcionalidades:

Tela de cadastro em branco para ser preenchida pelo administrador:

![cadastroembranco](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-int-t2-grupo4/assets/85715072/90341b98-64f7-4f4c-a582-a5e10d39f7fc)

Tela de cadastro preenchida incorretamente, portanto uma mensagem de erro aparece:

![cadastroerrocpf](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-int-t2-grupo4/assets/85715072/23a4978b-ccd7-4e98-91af-bd56de8f1297)

Tela de cadastro preenchida corretamente:

![cadastropreenchido](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-int-t2-grupo4/assets/85715072/2941d417-c460-4b29-81d6-705ec3bf554b)

Página de informações do usuário cadastrado:

![infodousuario](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-int-t2-grupo4/assets/85715072/731d79d9-df46-44d5-884f-cd54037ca421)

Processo de atualização dos dados cadastrados:

![atualizandoinfo](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-int-t2-grupo4/assets/85715072/20852ab8-da88-4755-be23-ab46b3311dfd)

Dados de cadastro atualizados:

![popupdeatualizacao](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-int-t2-grupo4/assets/85715072/aef66025-ba50-4483-be28-70548bb4adb8)
![infoatualizadadousuario](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-int-t2-grupo4/assets/85715072/563127c5-f76a-4aad-8233-85d170aa228c)

Deletar uma conta:

![deletaraconta](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-int-t2-grupo4/assets/85715072/efe5da54-8612-4333-9c2f-2c4491b095d5)

## Login

A Tela "Login" possui dois campos para que o funcionario utlize o Nº do funcionário e a senha para conseguir acessar o aplicativo.

![Captura de tela 2023-03-28 155009](https://user-images.githubusercontent.com/103431710/228338352-2bf5fca3-9659-4053-b329-a0120c31825d.png) 
![Captura de tela 2023-03-28 155320](https://user-images.githubusercontent.com/103431710/228339014-651fe166-13d1-4325-8662-2ff0107899a1.png)

### Requisitos Atendidos:
<ul>
<li>RF-02 Efetuar login  </li>
</ul>

### Teste de Funcionalidades:

Login como administrador:

![loginadmin](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-int-t2-grupo4/assets/85715072/5980b247-b451-4ade-b72a-19270605d03a)

Login como administrador depois de realizar o cadastro de um usuário:

![admincompessoasalva](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-int-t2-grupo4/assets/85715072/36b8b884-2360-4f2b-948d-d0def27eeb08)

Login como usuário:

![loginpreenchido](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-int-t2-grupo4/assets/85715072/a4a2e17f-93ac-4d1c-9ad1-dc4ed1b8cdc5)
![loginerrado](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-int-t2-grupo4/assets/85715072/fd74694a-23e1-4e96-9a12-107ff10df8d5)

Após realizar o login:

![logincomousuario](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-int-t2-grupo4/assets/85715072/3c81968e-a8d3-49de-b26c-7d107f502350)

## Marcação de Ponto

A Tela "Marcação de Ponto" possui um widget onde o usuário irá pressionar o horário será registrado no banco de dados. 

![img1](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-int-t2-grupo4/assets/103431710/d1299c6f-a36e-4798-86ed-b7e2123ffc80)

### Requisitos atendidos:
<ul>
<li>RF-03 - Registrar entrada/saída</li>
<li>RF-04 - Mostrar o horário registrado</li>
</ul>

Tela de marcação de ponto mostrando o último registro feito:
![img3](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-int-t2-grupo4/assets/103431710/fff31562-0232-493c-ad49-2f7bce834440)



## Página de Registros Realizados

A Tela "Registros Realizados" é uma página onde consta todos os registros feitos através do aplicativo.

![img2](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-int-t2-grupo4/assets/103431710/ef9cd0b2-e62b-4949-8e3e-0a2b9a8953d6)

### Requisitos atendidos:
<ul>
<li>RF-05 - Mostrar o tempo que se passou desde a entrada no sistema</li>
<li>RF-06 - Mostrar o tempo restante de trabalho e o horário previsto de saída</li>
<li>RF-07 - Histórico dos dias anteriores</li>
<li>RF-08 - Saldo do banco de horas</li>
  </ul>
  
  Tela quando ainda não feito nenhum registro:
 ![img4](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-int-t2-grupo4/assets/103431710/45d73cde-b9a8-41b7-9c31-7381dad30ff8)

  



