---
layout: doc
title: Lista de horário semanal
id: colaboradores-horario-semanal
order: 1
parent: colaboradores
---

O sistema deve permitir visualizar o horário semanal dos colaboradores.

## 1. Campos

Deve apresentar uma lista com os registros dos colaboradores. Cada item deve apresentar:

- Nome
- Total semanal

Também deve apresentar os seguintes campos em lista:

- Dia da semana
- Entrada
- Saída
- Total diário

Deve apresentar também para cada registro a opção de **"Visualizar"**.

## 2. Regras

- A pesquisa somente deve ser feita após selecionar pelo menos um colaborador no filtro, caso nenhum colaborador tenha sido selecionado deve apresentar a mensagem {% link msg-sistema#selecione-colaboradores, title:"selecione colaboradores"%}.
- Caso o colaborador não possua horário semanal vigente, deve apresentar o último horário semanal anterior e a mensagem de {% link msg-sistema#horario-desatualizado, title:"horário desatualizado"%} com a data final do horário semanal.
- Caso o colaborador não possua horário semanal vigente nem horários semanais anteriores deve apresentar a mensagem {% link msg-sistema#sem-registro, title:"sem horário registrado"%}.
- A opção de visualizar somente deve ser apresentada se o perfil do colaborador logado for "Administrativo" ou "Líder".
- Ao clicar em **"Visualizar"** deve ser apresentado a tela {% link visualizacao-colaborador %}.
