---
layout: doc
title: Lista de férias
id: lista-ferias
order: 2
parent: ferias
---

O sistema deve permitir visualizar as férias cadastradas do colaborador.

## 1. Campos

Deve apresentar os grupos:

#### <a name= "saldoFerias"></a> 1.1 Férias para usufruir

Deve apresentar o saldo de férias para usufruir do colaborador.

#### <a name= "feriasFuturas"></a> 1.2 Férias futuras

Deve apresentar uma lista de férias futuras com os seguintes campos:

- Início
- Fim
- Nº de dias

Deve apresentar também a opção **"Editar"**.

#### <a name= "historicoFerias"></a> 1.3 Histórico de férias

Deve apresentar uma lista com o histórico de férias com os seguintes campos:

- Início
- Fim
- Nº de dias

Deve apresentar também a opção **"Editar"**.

## 2. Regras

- Caso não possua registro de férias deve apresentar a mensagem {% link msg-sistema#n-o-possui-campo, title:"não possui registros"%} e o botão {% link cadastro-ferias %}.
- Ao clicar em **"Adicionar férias"** deve ser apresentado o modal de cadastro de férias conforme {% link cadastro-ferias, title:"Cadastro de férias"%}.
- O grupo {% link lista-ferias#saldoFerias, title:"Férias para usufruir"%} deve ser apresentado somente para colaboradores bolsistas.
- Ao clicar em **"Editar"** deve ser apresentado o modal de cadastro de férias com as informações preenchidas conforme {% link cadastro-ferias, title:"Cadastro de férias"%}.
- O campo **"Saldo de férias"** deve apresentar o total de férias disponíveis para o colaborador conforme o seguinte cálculo:
  - A cada mês trabalhado, o bolsista tem direito a 2,5 dias de férias equivalentes à sua carga horária diária.
  - Ao ser alterado a carga horária o saldo de férias em dias também deve ser alterado de acordo com a nova carga horária.
