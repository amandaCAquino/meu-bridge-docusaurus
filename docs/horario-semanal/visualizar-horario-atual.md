---
layout: doc
title: Visualizar horário atual
id: visualizar-horario-atual
order: 2
parent: horario-semanal
---

O sistema deve permitir visualizar os horários semanais cadastrados do colaborador logado.

## 1. Campos

Deve apresentar os campos:

- Início
- Fim
- Total semanal

Também deve apresentar o seguinte grupo:

##### 1.1 Horário semanal atual

Deve apresentar uma tabela os seguintes campos:

- Dia da semana
- Entrada
- Saída
- Total diário

Deve apresentar também a opção **"Editar"** e o botão **"Criar novo"**.

## 2. Regras

- Os campos 'Entrada' e 'Saída' devem ser apresentados para cada dia da semana.

- Caso não haja nenhum horário atual cadastrado, deve ser apresentada a mensagem {% link hint#sem-horario-semanal, title:"sem horário semanal"%} e logo abaixo o botão **"Criar novo"**.

- Ao selecionar a opção **"Editar"**, deve habilitar os campos para edição na própria página, conforme {% link cadastrar-horario-semanal, title:"Cadastrar horário semanal"%}.

- Ao clicar no botão **"Criar novo"**, deve apresentar o modal de cadastro de horário semanal, conforme {% link cadastrar-horario-semanal, title:"Cadastrar horário semanal"%}.
