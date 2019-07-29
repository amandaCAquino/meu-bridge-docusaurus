---
layout: doc
title: Visualização do colaborador
id: visualizacao-colaborador
order: 3
parent: colaboradores
---

O sistema deve permitir visualizar o perfil dos colaboradores.

## 1. Campos

Deve apresentar os campos:

- Nome
- E-mail bridge

<!-- -Função
- Equipe
- Perfil

Também deve apresentar em abas os seguintes grupos:

#### 1.1 Dados Pessoais
Deve apresentar os seguintes grupos:

###### 1.1.1 Dados pessoais

Deve apresentar os mesmos campos do grupo Dados pessoais do curso da visualização dos dados conforme {}.

###### 1.1.2 Informações do curso

Deve apresentar os mesmos campos do grupo Informações do curso da visualização dos dados conforme {}.

###### 1.1.3 Dados bancários

Deve apresentar os mesmos campos do grupo Dados bancários da visualização dos dados conforme {}.

###### 1.1.3 Endereço

Deve apresentar os mesmos campos do grupo Endereço da visualização dos dados conforme {}.
-->

#### 1.1 Registro diário

Deve apresentar a visualização dos registro diários do colaborador conforme {% link registros-anteriores#campos-registro-anterior, title:"Registro diário"%} sem opção de "Edição".

<!-- #### 1.3 Horário

Deve apresentar a visualização do horário semanal do colaborador conforme {} sem opção de "Edição".

#### 1.4 Férias

Deve apresentar as férias agendadas do colaborador conforme {}} sem as opções de "Edição" e "Exclusão"

Deve apresentar o histórico de férias do colaborador conforme {} sem as opções de "Edição" e "Exclusão"

## 2. Regras

#### 2.1 Dados pessoais

- Os grupos "Conta" e "Endereço" somente devem ser apresentado se o colaborador logado for "Administrativo".
- O campo "Data de nascimento" somente deve ser apresentado se o colaborador logado for "Administrativo", caso não seja deve ser substituído pelo campo "Aniversário" apresentando somente o dia e mês de nascimento.
- Os campos "Estado civil", "CPF", "RG" "Órgão emissor", "Data de emissão", "Naturalidade" somente devem ser apresentado se o colaborador logado for "Administrativo".

#### 2.2 Registro diário
- O grupo "Registro diário" somente deve ser apresentado se o colaborador logado for "Administrativo" ou "Líder"
-->
