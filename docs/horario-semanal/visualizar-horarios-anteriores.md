---
layout: doc
title: Visualizar horários anteriores
id: visualizar-horarios-anteriores
order: 3
parent: horario-semanal
---

O sistema deve permitir ao usuário visualizar os horários anteriores cadastrados do colaborador.

## 1. Campos

Deve apresentar uma lista contendo cada horário semanal anterior cadastrado. Cada item da lista deve apresentar os campos:

- Início
- Fim
- Total semanal

Deve apresentar também, em cada item, as opções **"Editar"** e **"Expandir"**. Além do botão **"Criar novo"** no canto superior direito da página.

## 2. Regras

- Caso não haja nenhum horário anterior cadastrado, deve ser apresentada a mensagem {% link msg-sistema#nao-possui, title:"não possui registro"%}.

- Ao clicar em **"Editar"**, deve ser apresentado o modal de cadastro de horário semanal conforme {% link cadastrar-horario-semanal, title:"Cadastrar horário semanal"%}, já com as informações preenchidas naquele registro. A exceção nesse caso é que caso a opção **"Fechar"** seja selecionada, deve manter o usuário na página atual.

- Ao clicar em **"Expandir"**, deve mostrar as informações contidas naquele horário conforme {% link visualizar-horario-atual, title:"Visualizar horário atual" %}. Ao clicar novamente sobre o mesmo botão, as informações daquele grupo devem ser retraídas.

- Ao clicar no botão **"Criar novo"**, deve apresentar o modal de cadastro de horário semanal, conforme {% link cadastrar-horario-semanal, title:"Cadastrar horário semanal"%}.
